import { defineComponent as t } from "vue";
const o = t({
  name: "EsButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  }
});
export {
  o as default
};
