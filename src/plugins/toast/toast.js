// toast.js
// https://segmentfault.com/a/1190000008869576
const Toast = {};
Toast.install = (Vue, options) => {
  Vue.prototype.$toast = (tips) => {
    const toastTpl = Vue.extend({ // 1、创建构造器，定义好提示信息的模板
      template: `<div class="vue-toast">${tips}</div>`,
    });
    const tpl = new toastTpl().$mount().$el; // 2、创建实例，挂载到文档以后的地方
    document.body.appendChild(tpl); // 3、把创建的实例添加到body中
    setTimeout(() => { // 4、延迟2.5秒后移除该提示
      document.body.removeChild(tpl);
    }, 2500);
  };
};
module.exports = Toast;
