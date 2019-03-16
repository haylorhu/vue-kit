<template>
  <div id="app">
    <g-button
    name="setting" @click="showToast"

    >我的</g-button>
    <g-input></g-input>
    <g-tab>
      <g-tab-head>
        <g-tab-item name="news">新闻</g-tab-item>
        <g-tab-item name="girl">美女</g-tab-item>
        <g-tab-item name="car">汽车</g-tab-item>
      </g-tab-head>
      <g-tab-body>
        <g-tab-pane name="news">很多新闻</g-tab-pane>
        <g-tab-pane name="girl"> 很多美女</g-tab-pane>
        <g-tab-pane name="car">很多汽车</g-tab-pane>
      </g-tab-body>
    </g-tab>
    <g-popover>
      <p>123</p>
      <p slot="content">show</p>
    </g-popover>
    <g-collapse :selected=selected>
      <g-collapse-item name="1" title="1"></g-collapse-item>
      <g-collapse-item name="2" title="2"></g-collapse-item>
      <g-collapse-item name="3" title="3"></g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>


export default {
  name: 'App',

  components: {

  },
  methods:{
    showToast(){
      this.$toast("123",{})
    }
  },
  data(){
    return{
      selected:[1]
    }
  }

}
</script>

<style lang="scss">
@import url("./_initcss.sass");
#app {
  margin: 20px;


}
</style>
