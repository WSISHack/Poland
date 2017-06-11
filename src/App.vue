<template>
  <div id="app">
    <toolbar v-if="$store.state.toolbarEnabled" />
    <div class="content" v-bind:class="{ 'content-with-toolbar': $store.state.toolbarEnabled, 'content-with-footer': $store.state.bottomBarEnabled }">
      <router-view></router-view>
    </div>
    <div class="footer-bar" v-if="$store.state.bottomBarEnabled">
      <bottom-bar  />
    </div>
    <global-dialog />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import BottomBar from './components/BottomBar'
import GlobalDialog from './components/Dialog'

export default {
  name: 'app',
  components: {
    Toolbar,
    BottomBar,
    GlobalDialog
  }
}
</script>

<style scoped>
#app {  
  height: 100%;
}

.content {
  position: fixed; 
  top: 0; 
  bottom: 0; 
  left: 0px; 
  right: 0px; 
  overflow: auto;
}

.content-with-toolbar {
  top: 64px; 
}

.content-with-footer {
  bottom: 56px;
}

.footer-bar {
  position: absolute; 
  bottom: 0px; 
  left: 0px; 
  right: 0px; 
}

</style>
