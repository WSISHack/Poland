  <template>
  <div>
    <md-sidenav class="md-left" :md-swipeable="true" ref="leftSidenav" v-if="$store.state.sidenavEnabled">
      <md-card class="user-card">

        <md-card-header>
          <md-avatar class="md-large">
            <img src="../assets/shiba1.jpg">
          </md-avatar>
        </md-card-header>

        <md-card-content class="md-body-2 user-card-content" v-if="user">
           {{ user.firstName }} {{ user.lastName }}
        </md-card-content>


        <md-card-actions class="user-card-actions" v-if="user">
            <span class="md-body-1">{{ user.email }}</span>

            <span style="flex: 1"></span>

            <md-button class="md-icon-button" md-expand-trigger>
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>

        </md-card-actions>

      </md-card>
      
      <sidenav-menu />
    </md-sidenav>

  </div>
</template>

<script>
import SidenavMenu from './SidenavMenu'

export default {
  name: 'sidenav',
  mounted () {
    this.$store.commit('setSidenavRef', this.$refs.leftSidenav)
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
          return this.$store.getters['user/current'];
      }
  },
  components: {
      SidenavMenu
  }
}
</script>

<style scoped>
.user-card {
  background-image: url('../assets/sidenav.jpg');
  background-size: cover;   
  background-repeat: no-repeat;    
}

.user-card-content {
  padding: 0;
  padding-left: 16px;
  margin-bottom: -10px;
}

.user-card-actions {
  padding: 0;
  padding-left: 16px;
}

</style>
