import alertBox from '../../components/alertBox.vue'
export default {
  install: function (Vue, options) {
    Vue.mixin({
      components: {
        alertBox
      }
    });
  }
}