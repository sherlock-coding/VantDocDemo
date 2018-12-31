<template>
  <div id="app">
    <van-doc
      :config="config"
      active="Vue 组件"
      :simulators="simulators"
      :current-simulator="currentSimulator"
    >
      <router-view @changeDemoUrl="onChangeDemoURL"/>
    </van-doc>
  </div>
</template>

<script>
import docConf from "./router/doc.conf.js";
export default {
  data() {
    return {
      config: docConf,
      simulators: [`demo.html${location.hash}`],
      currentSimulator: 0
    };
  },
  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>


<style lang="less">
.van-doc-intro {
  text-align: center;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;

  &__youzan {
    width: 32px;
    height: 32px;
    display: block;
    margin: 25px 0 0;
  }

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-size: 36px;
    line-height: 60px;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    color: #455a64;
  }
}
</style>
