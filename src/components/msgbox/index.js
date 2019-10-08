import Vue from 'vue';
import msgBoxComponent from './MsgBox.vue';

const msgBox = (options = {}) => {
  const MsgBoxConstructor = Vue.extend(msgBoxComponent);
  const instance = new MsgBoxConstructor({
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

export default function () {
  // //添加全局API
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$msgbox = msgBox;
}
