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
