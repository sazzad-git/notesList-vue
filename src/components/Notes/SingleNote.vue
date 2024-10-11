<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns has-text-white">
          <small class="column mt-3">{{ formattedDate }}</small>
          <small class="column has-text-right">{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{ name: 'editNote', params: { id: note.id } }"
        class="card-footer-item"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick"
        >Delete</a
      >
    </footer>
    <DeleteNoteModel
      v-if="modals.deleteModal"
      v-model="modals.deleteModal"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
import { useNotesStore } from "@/stores/NotesStore";
import { computed, reactive } from "vue";
import DeleteNoteModel from "./DeleteNoteModel.vue";
import { useDateFormat } from "@vueuse/core";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const noteStore = useNotesStore();

const date = new Date(+props.note.date);
const formattedDate = useDateFormat(date, "DD-MM-YYYY @ HH:mm");
console.log(formattedDate.value);

// const emit = defineEmits(["onDeleteClicked"]);
const characterLength = computed(() => {
  const noteLength = props.note.content.length;
  const description = noteLength > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

const handleDeleteClick = () => {
  // emit("onDeleteClicked", props.note.id);
  // noteStore.deleteNote(props.note.id);
  // Show delete modal
  // console.log("click the delete modal");
  modals.deleteModal = true;
};

const modals = reactive({
  deleteModal: false,
});
</script>
