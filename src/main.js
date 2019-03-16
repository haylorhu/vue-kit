// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Button from './components/button.vue'
import Icon from './components/icon.vue'
import Input from './components/input.vue'
import Plugin from './components/plugin'
import TabHead from './components/tabs-head'
import Tab from './components/tabs'
import TabItem from './components/tabs-item'
import TabPane from './components/tabs-pane'
import TabBody from './components/tabs-body'
import Popover from './components/popover'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-input',Input)
Vue.component('g-tab-head',TabHead)
Vue.component('g-tab',Tab)
Vue.component('g-tab-item',TabItem)
Vue.component('g-tab-pane',TabPane)
Vue.component('g-tab-body',TabBody)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(Plugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
