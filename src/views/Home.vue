<template>
  <div :class="$style['container']">
    <Menu :menu="menu"></Menu>
    <div :class="$style['content']">
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "Home",
  components: {
    Menu
  },
  data() {
    return {
      menu: [
        {
          title: "动物",
          children: [
            {
              name: "猪",
              label: "猪"
            },
            {
              name: "狗",
              label: "狗"
            }
          ]
        },
        {
          title: "植物",
          children: [
            {
              name: "花",
              label: "花"
            },
            {
              name: "草",
              label: "草"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" module>
.container {
  display: flex;
}
</style>
