<template>
  <AddEditNote
    v-model="noteContent"
    ref="addEditNoteRef"
    bgColor="link"
    label="Edit Note"
    placeholder="Edit Note"
  >
    <template #button>
      <!-- <button class="button" @click.prevent="$router.back()">Cancel</button> -->
      <RouterLink class="button" :to="{ name: 'notes' }">Cancel</RouterLink>
      <button
        :disabled="!noteContent"
        class="button is-link is-danger"
        @click.prevent="onNoteSave"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useNotesStore } from "@/stores/NotesStore";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const noteStore = useNotesStore();

const route = useRoute();
const router = useRouter();

const noteContent = ref("");

noteContent.value = noteStore.getNoteContentById(route.params.id);

const onNoteSave = () => {
  noteStore.updateNote(route.params.id, noteContent.value);
  router.push({ name: "notes" });
};
</script>
