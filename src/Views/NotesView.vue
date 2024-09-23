<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef">
    <template #button>
      <button
        :disabled="!newNote"
        class="button is-link is-danger"
        @click.prevent="addNote"
      >
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <SingleNote v-for="note in notes" :key="note.id" :note="note" />
  <!-- for emits @onDeleteClicked="deleteNote"  -->
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from "@/stores/NotesStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import SingleNote from "../components/Notes/SingleNote.vue";

const notesStore = useNotesStore();

// eta jante hobe
const addEditNoteRef = ref(null);

const { notes } = storeToRefs(notesStore);

const newNote = ref("");

const addNote = () => {
  notesStore.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

// const deleteNote = (idToDelete) => {
//   notes.value = notes.value.filter((note) => note.id !== idToDelete);
// };
</script>
