import Vue from 'vue';
import msgBoxComponent from './MsgBox.vue';

const msgBox = (options = {}) => {
  const msgBoxConstructor = Vue.extend(msgBoxComponent);
  const instance = new msgBoxConstructor({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);
  // 将单个 confirm instance 的配置合并到默认值中
  Object.assign(instance.$data, options);
  return new Promise((resolve, reject) => {
    instance.show = true;
    const { successBtn } = instance;
    const { cancelBtn } = instance;
    instance.successBtn = () => {
      resolve();
      successBtn();
    };
    instance.cancelBtn = () => {
      reject();
      cancelBtn();
    };
  });
};

export default function (Vue) {
  // //添加全局API
  Vue.prototype.$msgbox = msgBox;
}
