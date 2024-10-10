import { watch } from "vue";

export function useCharactersLimit(value, limit) {
  watch(value, (newValue, oldValue) => {
    if (newValue.length === limit) {
      alert(`Sorry!!! only ${limit} characters are allowed`);
    }
  });
}
