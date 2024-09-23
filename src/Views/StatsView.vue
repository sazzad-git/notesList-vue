<template>
  <div class="mt-3">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Total Notes Count</td>
          <td>{{ notesCount }}</td>
        </tr>
        <tr>
          <td>Total Characters Count</td>
          <td>{{ notesCharacters }}</td>
        </tr>
      </tbody>
    </table>

    <input
      type="text"
      class="input"
      name=""
      id=""
      placeholder="Enter Feedback"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { useNotesStore } from "@/stores/NotesStore";
import { vAutofocus } from "../directives/vAoutofocus.js";

const notesStore = useNotesStore();

const notesCount = notesStore.totalNotesCount;

const notesCharacters = notesStore.totalCharactersCount;
</script>
