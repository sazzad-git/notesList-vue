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

  <progress
    class="progress is-large is-info"
    max="100"
    v-if="!notesStore.notesLoaded"
  />

  <template v-else>
    <SingleNote v-for="note in notes" :key="note.id" :note="note" />
    <!-- for emits @onDeleteClicked="deleteNote"  -->
  </template>

  <div
    class="has-text-centered py-6 is-size-4 has-text-grey-light is-family-monospace"
    v-if="!notes.length && notesStore.notesLoaded"
  >
    No Notes added here yet!!!
  </div>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from "@/stores/NotesStore";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import SingleNote from "../components/Notes/SingleNote.vue";
import { useCharactersLimit } from "@/composables/useCharactersLimit";

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

useCharactersLimit(newNote, 50);

// const deleteNote = (idToDelete) => {
//   notes.value = notes.value.filter((note) => note.id !== idToDelete);
// };
</script>
