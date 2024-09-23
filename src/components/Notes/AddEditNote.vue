<template>
  <div class="my-4 p-4" :class="`has-background-${bgColor}-dark`">
    <div class="field">
      <label class="label" v-if="label">{{ label }}</label>
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          v-autofocus
          ref="textareaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "../../directives/vAoutofocus.js";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "danger",
  },
  label: {
    type: String,
    default: "Add Note",
  },
  placeholder: {
    type: String,
    default: "Add Note",
  },
});

const emit = defineEmits(["update:modelValue"]);

const textareaRef = ref(null);
const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
