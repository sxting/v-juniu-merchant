import comfirmBox from '../../components/confirmBox.vue'
export default {
  install: function (Vue, options) {
    Vue.mixin({
      components: {
        comfirmBox
      }
    });
  }
}