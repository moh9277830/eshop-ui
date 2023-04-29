<script lang="ts">
import { ConcreteComponent, PropType, computed, defineComponent, toRefs } from 'vue';
import { useAttrsRef, EsButtonSize, EsButtonVariant } from '@eshop-ui/vue';

export default defineComponent({
    name: 'EsButton',
    props: {
        size: {
            type: String as PropType<`${EsButtonSize}`>,
            default: EsButtonSize.base,
        },
        variant: {
            type: String as PropType<`${EsButtonVariant}`>,
            default: EsButtonVariant.primary,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        square: {
            type: Boolean,
            default: false,
        },
        tag: {
            type: [String, Object] as PropType<string | ConcreteComponent>,
            default: undefined,
        }
    },
    setup(props) {
        const { size, tag, square } = toRefs(props);

        const sizeClasses = computed(() => {
            switch(size.value) {
                case EsButtonSize.sm:
                    return [square.value ? 'es-button--small es-button--small--square' : 'es-button--small'];
                case EsButtonSize.lg:
                    return [square.value ? 'es-button--large es-button--large--square' : 'es-button--large'];;
                default:
                    return [square.value ? 'es-button--base es-button--base--square' : 'es-button--base'];
            }
        });

        const tagWithDefault = computed(() => tag?.value || 'button');

        const attrs = useAttrsRef();
        const type = computed(() => 
            attrs.value.type ??
            (typeof tagWithDefault.value === 'string' && tagWithDefault.value.toLocaleLowerCase() === 'button' 
                ? 'button' 
                : undefined));

        const variantClasses = {
            [EsButtonVariant.primary]: 'es-button--primary',
            [EsButtonVariant.secondary]: 'es-button--secondary',
            [EsButtonVariant.tertiary]: 'es-button--tertiary',
        }

        return {
            tagWithDefault,
            type,
            sizeClasses,
            variantClasses
        }
    }
});
</script>
<template>
    <component
        :is="tagWithDefault"
        :type="type"
        :disabled="disabled"
        :class="[
            'es-button',
            sizeClasses,
            variantClasses[variant]
        ]"
        data-testid="es-button"
    >
        <slot v-if="$slots.prefix" name="prefix"></slot>
        <slot></slot>
        <slot v-if="$slots.suffix" name="suffix"></slot>
    </component>
</template>
<style>
    @import './styles/components/EsButton.css';
</style>