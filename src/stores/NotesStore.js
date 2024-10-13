import { db } from "@/js/firebase";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useAuthStore } from "./AuthStore";

export const useNotesStore = defineStore("notesStore", () => {
  const notes = ref([]);
  const notesLoaded = ref(false);

  const authStore = useAuthStore();

  let notesCollectionRef;
  let notesCollectionQuery;
  let notesSnapshot = null;

  const getNoteContentById = computed(() => {
    return (id) => {
      return notes.value.find((note) => note.id === id).content;
    };
  });

  const getNotes = async () => {
    console.log(authStore.user.uid);
    notesCollectionRef = collection(db, "users", authStore.user.uid, "notes");
    notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

    // const querySnapshot = await getDocs(collection(db, "notes"));
    // querySnapshot.forEach((doc) => {
    //   let note = {
    //     id: doc.id,
    //     content: doc.data().content,
    //   };
    //   notes.value.push(note);
    // });

    notesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
      let notesData = [];
      notesLoaded.value = false;
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date,
        };
        notesData.push(note);
      });

      notes.value = notesData;
      notesLoaded.value = true;
    });
  };

  const clearNote = () => {
    notes.value = [];
    if (notesSnapshot) notesSnapshot();
  };

  const totalNotesCount = computed(() => {
    return notes.value.length;
  });

  const totalCharactersCount = computed(() => {
    let count = 0;
    for (let note of notes.value) {
      count += note.content.length;
    }
    return count;
  });

  const addNote = async (noteContent) => {
    const currentDate = new Date().getTime().toString();
    // const note = {
    //   id: currentDate,
    //   content: noteContent,
    // };

    // console.log("date:", currentDate);

    // notes.value.unshift(note);
    await addDoc(notesCollectionRef, {
      content: noteContent,
      date: currentDate,
    });
  };

  const deleteNote = async (noteId) => {
    // notes.value = notes.value.filter((note) => note.id !== noteId);
    await deleteDoc(doc(notesCollectionRef, noteId));
  };

  const updateNote = async (id, content) => {
    // const index = notes.value.findIndex((note) => note.id === id);
    // notes.value[index].content = content;
    await updateDoc(doc(notesCollectionRef, id), {
      content,
    });
  };

  return {
    notes,
    addNote,
    deleteNote,
    getNoteContentById,
    updateNote,
    totalNotesCount,
    totalCharactersCount,
    getNotes,
    notesLoaded,
    clearNote,
  };
});
