<template>
  <div id="app" ref="content">
    <Progress ref="Progress" />
    <Menu class="meun" :menu="menuData" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import Progress from '@/components/progress/Progress.vue';
import Menu from '@/components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Progress,
  },
  data() {
    return {
      menuData: [
        {
          name: 'home',
          path: '/',
        },
        {
          name: 'test',
          path: 'test',
        },
        {
          name: 'markdown',
          path: 'markdown',
        },
        {
          name: 'nginx',
          path: 'nginx',
        },
        {
          name: 'fileDownload',
          path: 'fileDownload',
        },
        {
          name: 'live2d',
          path: 'live2d',
        },
      ],
    };
  },
  mounted() {
    this.ps = new PerfectScrollbar(this.$refs.content);
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-z16/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '../live2dw/live2d-widget-model-z16/assets/z16.model.json' },
        display: { position: 'right', width: 100, height: 200 },
        mobile: { show: true },
        log: false,
      });
    }, 1000);
  },
  beforeDestroy() {
    this.ps.destroy();
    this.ps = null;
  },
};
</script>

<style lang="less">
@common-color: #0769fd;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
}
#app .meun {
  width: 100px;
}
.content {
  flex: 1;
  width: 100%;
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857;
  word-break: break-all;
  word-wrap: break-word;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-x: auto;
  color: #abb2bf;
  background: #282c34;
}
a {
  text-decoration-line: none;
  color: @common-color;
}
</style>
