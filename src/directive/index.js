import Vue from "vue";
export function directive(roles) {
  Vue.directive("permit", {
    inserted: function(el, binding) {
      !roles.includes(binding.value) ? el.parentNode.removeChild(el) : {};
    }
  });
}
