<template>
  <div :class="$style['container']">
    <div :class="$style['content']">
      <mavon-editor class="md" :value="value" />
    </div>
    <Test />
    <Upload accept=".xls, xlsx" />
    <button @click="msgbox">
      点击弹窗
    </button>
    <button @click="progress">
      点击进度条
    </button>
  </div>
</template>
<script>
import Test from '@/docs/test.md';

export default {
  name: 'Home',
  components: {
    Test,
  },
  data() {
    return {
      value: '### test ### a',
    };
  },
  mounted() {
    // let str = this.getFunc(6, [1,3,5,7,9]);
    // console.log(str)
    // let arr = [1,3,5,7,9];
    // for (let i = 0; i < arr.length; i ++) {
    //   if (arr[i] > 6) {
    //     console.log(arr[i], i);
    //     break;
    //   }
    // }
  },
  methods: {
    msgbox() {
      this.$msgbox({
        title: '温馨提示',
        cancel: '取消',
        content: '这里是消息弹出内容',
        confirm: '确定按钮',
        className: 'pop-custom',
      }).then(() => {
        console.log('我点击了确定按钮');
      }).catch(() => {
        console.log('error');
      });
    },
    progress() {
      this.$toast();
      console.log(this.$root.$children[0].$refs.Progress);
      this.$root.$children[0].$refs.Progress.start();
      setTimeout(() => {
        this.$root.$children[0].$refs.Progress.finish();
      }, 2000);
    },
    getFunc(num, arr) {
      const big = [];
      const small = [];
      arr.forEach((item, index) => {
        if (item > num) {
          big.push({
            value: item,
            index,
          });
        } else if (item < num) {
          small.push({
            value: item,
            index,
          });
        }
      });
      return [small[small.length - 1], big[0]];
    },
  },
};
</script>
<style lang="less" module>
.container {
  display: flex;
  .content {
    padding: 20px;
  }
}
</style>
