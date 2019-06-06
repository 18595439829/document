<template>
  <div :class="$style['container']">
    <Menu :theme="theme" active-name="1">
      <MenuGroup
        v-for="(item, index) in menu"
        :key="index"
        :title="item.title"
      >
        <MenuItem
          v-for="(child, childIndex) in item.children"
          :key="childIndex"
          :name="child.name"
        >
          <Icon :type="child.icon" />
          {{ child.label }}
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    theme: {
      type: String,
      required: false,
      default: "light"
    },
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.menu);
  }
};
</script>
<style lang="less" module>
.container {
}
</style>
