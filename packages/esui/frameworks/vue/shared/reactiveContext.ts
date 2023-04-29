import  { useSlots, useAttrs, ref, onBeforeUpdate } from 'vue';

export const useSlotRef = () => {
    const slots = ref(useSlots());

    // slots are not reactive, so we need to update them manually
    // see: https://vuejs.org/api/composition-api-setup.html#setup-context
    // see: https://github.com/vuejs/core/issues/6202#issuecomment-1278776852
    onBeforeUpdate(() => {
        slots.value = useSlots();
    });

    return slots;
};

export const useAttrsRef = () => {
    const attrs = ref(useAttrs());

    // attrs are not reactive, so we need to update them manually
    // see: https://vuejs.org/api/composition-api-setup.html#setup-context
    // see: https://github.com/vuejs/core/issues/6202#issuecomment-1278776852
    onBeforeUpdate(() => {
        attrs.value = useAttrs();
    });

    return attrs;
};