import { watchEffect } from "vue";

export default function useMergeRefs({ refs = [] }) {
  return watchEffect(() => {
    if (refs.every((ref) => ref === null)) return null;

    return (node) => {
      refs.forEach((ref) => {
        if (ref) assignRef(ref, node);
      });
    };
  }, [refs]);
}

function assignRef(ref, value) {
  if (ref === null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    ref.value = value;
  } catch (error) {
    console.error(error);
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
