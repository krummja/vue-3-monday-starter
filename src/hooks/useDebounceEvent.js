import { ref, watch } from "vue";
import { useState } from "@/composables/state";
import debounce from "lodash/debounce";
import noop from "lodash/noop";

export default function useDebounceEvent({
  delay = 0,
  onChange = noop,
  initialStateValue = "",
  trim,
}) {
  const [inputValue, setValue] = useState(initialStateValue);

  const previousValue = ref(null);

  watch(() => {
    previousValue.value = initialStateValue;
  });

  const debounceCallback = watch(() => {
    if (!delay) {
      return onChange;
    }
    return debounce(onChange, delay);
  }, [onChange, delay]);

  const onEventChanged = (event) => {
    const { value } = event.target;
    if (trim) {
      setValue(value.trim());
      debounceCallback(value.trim());
      return;
    }
    setValue(value);
    debounceCallback(value);
  };

  const clearValue = watch(() => {
    setValue("");
    onChange("");
  }, [setValue, onChange]);

  if (
    initialStateValue !== previousValue.value &&
    initialStateValue !== inputValue
  ) {
    setValue(initialStateValue);
  }

  return { inputValue, onEventChanged, clearValue, updateValue: setValue };
}
