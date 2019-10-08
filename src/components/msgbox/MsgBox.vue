<template>
  <transition name="msgbox">
    <div v-if="show" class="msgbox-container" :class="className">
      <header>{{ title }}</header>
      <div class="content-body">
        <div>弹出内容可以嵌入html标签</div>
      </div>
      <footer>
        <a
          v-if="cancel"
          href="javascript:;"
          class="button"
          @click="cancelBtn"
        >{{ cancel }}</a>
        <a href="javascript:;" class="button" @click="successBtn">{{
          confirm
        }}</a>
      </footer>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      title: '提示',
      content: '',
      confirm: '确定',
      cancel: '',
      className: '',
    };
  },
  watch: {
    show(val) {
      if (val) {
        if (!this.hasClass(document.body, 'pop-mask')) {
          this.addClass(document.body, 'pop-mask');
        }
      } else {
        this.removeClass(document.body, 'pop-mask');
      }
    },
  },
  beforeMount() {
    // 如果已经存在，则阻止出现第二次
    const node = document.querySelector('.msgbox-container');
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  },
  methods: {
    successBtn() {
      this.show = false;
    },
    cancelBtn() {
      this.show = false;
    },
    addClass(obj, cls) {
      const objClass = obj.className;
      const blank = objClass !== '' ? ' ' : '';
      const added = objClass + blank + cls;
      // eslint-disable-next-line no-param-reassign
      obj.className = added;
    },
    removeClass(obj, cls) {
      let objClass = ` ${obj.className} `;
      objClass = objClass.replace(/(\s+)/gi, ' ');
      let removed = objClass.replace(` ${cls} `, ' ');
      removed = removed.replace(/(^\s+)|(\s+$)/g, '');
      // eslint-disable-next-line no-param-reassign
      obj.className = removed; // 替换原来的 class.
    },
    hasClass(obj, cls) {
      const objClass = obj.className;
      const objClassLst = objClass.split(/\s+/);
      let x = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (x in objClassLst) {
        if (objClassLst[x] === cls) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>
<style lang="less" scoped>
.msgbox-container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  background: #fff;
  color: #555;
  border-radius: 0.8rem;
  transform: translate(-50%, -50%) scale(1, 1);
  border: 1px solid #666666;
  header {
    margin: 0;
    padding: 1.2rem 0;
    text-align: center;
    color: #333;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.7rem;
    border-radius: 0.8rem 0.8rem 0 0;
    background: #fff;
    border-width: 0;
    border-bottom: 1px solid #ccc;
  }
  .content-body {
    font-size: 1.5rem;
    margin: 2rem 1rem;
    line-height: 2;
    max-height: 20rem;
    overflow-y: auto;
    color: #666;
    div {
      padding: 0 1rem;
      text-align: justify;
      word-break: break-all;
    }
  }
  footer {
    width: 100%;
    text-align: center;
    display: block !important;
    border-width: 0;
    border-top: 1px solid #ccc;
    overflow: hidden;
    background: transparent;
    border-radius: 0 0 0.8rem 0.8rem;
    .button {
      float: left;
      padding: 1rem 0;
      width: 50%;
      color: #999;
      box-sizing: border-box;
      line-height: 3rem;
      font-size: 1.7rem;
      background: #f7f7f7;
      border-right: 1px solid #d5d7d6;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    .button:first-child:nth-last-child(1) {
      width: 100%;
    }
    .button:first-child:nth-last-child(2) ~ .button {
      width: 50%;
    }
  }
}
.msgbox-enter,
.msgbox-leave-to {
  -webkit-transform: translate(-50%, -50%) scale(0, 0);
}
.msgbox-enter-active,
.msgbox-leave-active {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.msgbox-enter-to,
.msgbox-leave {
  -webkit-transform: translate(-50%, -50%) scale(1, 1);
}
</style>
