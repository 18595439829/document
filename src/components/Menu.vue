<template>
  <div :class="$style['container']">
    <div
      v-for="(item, index) in menuData"
      :class="$style['meuns']"
      :key="index"
    >
      <div :class="$style['panel']"></div>
      <div
        :class="{ name: true, menuClick: index === menuIndex ? true : false }"
        @click="meunClick(item.path, index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menuData: this.menu,
      menuIndex: 0
    };
  },
  watch: {
    menu(v) {
      this.menuData = v;
    }
  },
  methods: {
    meunClick(path, index) {
      this.menuIndex = index;
      this.$router.push(path);
    }
  },
  mounted() {
      this.menuData.forEach((item, index) => {
      if (item.name === this.$route.name) {
        this.menuIndex = index;
      }
    })
  }
};
</script>
<style lang="less">
@menuBG: #aec6f5;
.name {
  width: 100%;
  padding-left: 5px;
}
.menuClick {
  color: #ffffff;
  background: @menuBG;
}
</style>

<style lang="less" module>
@common-color: #0769fd;
@menuBG: #aec6f5;
.container {
  margin: 10px;
  .meuns {
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-content: center;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
      color: #ffffff;
      background: @menuBG;
    }
    .panel {
      border: 3px solid @common-color;
    }
  }
}
</style>

