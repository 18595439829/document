import Progress from '@/components/progress/Progress.vue';

function install(Vue, options = {}) {
  const progress = {
    start(vm) {
      this.$vm = vm;
    },
    finish(vm) {
      this.$vm = vm;
    },
  };
  const VueProgressBarEventBus = new Vue({
    data: {
      RADON_LOADING_BAR: {
        percent: 0,
        options,
      },
    },
  });
  window.VueProgressBarEventBus = VueProgressBarEventBus;
  progress.start(VueProgressBarEventBus);
  const Component = Vue.extend(Progress);
  document.body.appendChild((new Component().$mount()).$el);

  Vue.prototype.$Progress = progress;
}
export default install;
