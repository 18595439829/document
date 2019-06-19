<template>
  <div :class="$style['container']">
    <div :class="$style['content']">
      <mavon-editor
        class="md"
        :value="value"
      ></mavon-editor>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      value: '### test'
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
    getFunc(num, arr) {
      let big = [];
      let small = []
      arr.forEach((item, index) => {
        if (item > num) {
          big.push({
            value: item,
            index: index,
          })
        } else if (item < num) {
          small.push({
            value: item,
            index: index,
          })
        }
      })
      return [small[small.length-1],big[0]]
    }
  }

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
