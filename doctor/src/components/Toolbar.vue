<template>
  <div>
    <md-whiteframe md-elevation="2">
      <md-toolbar>
        <!--<md-button class="md-icon-button" @click.native="toggleLeftSidenav" v-if="$store.state.sidenavEnabled">
          <md-icon>menu</md-icon>
        </md-button>-->
         <md-avatar class="md-small">
            <img src="../assets/doctor.jpg">
          </md-avatar>

        <h2 class="md-title toolbar-title" style="flex: 1">{{ $store.state.title }}</h2>

        <md-menu md-direction="bottom left">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item v-if="user" @click.native="logout">
               <md-icon>power_settings_new</md-icon>
               <span>Logout</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
       
      </md-toolbar>
    </md-whiteframe>

    <sidenav />

  </div>
</template>

<script>
import Sidenav from './Sidenav'

export default {
  name: 'toolbar',
  data () {
    return {
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$store.commit('toggleSidenav');
    },
    logout () {
      const router = this.$router;
      this.$store.dispatch('user/logout').then(() => {
        router.push({ name: 'login_page' });
      });
    }
  },
  computed: {
    user () {
          return this.$store.getters['user/current'];
      }
  },
  components: {
    Sidenav
  }
}
</script>

<style scoped>
.toolbar-title {
  text-align: center;
}
</style>
