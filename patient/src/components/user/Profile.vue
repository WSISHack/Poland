
<template>
  <div class="container">
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Name</label>
        <md-input v-model="user.name"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Surname</label>
        <md-input v-model="user.surname"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Age</label>
        <md-input v-model="user.age" type="number"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Height</label>
        <md-input v-model="user.height"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Weight</label>
        <md-input v-model="user.weight"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Address</label>
        <md-input v-model="user.address"></md-input>
      </md-input-container>

      <md-input-container>
        <label>City</label>
        <md-input v-model="user.city"></md-input>
      </md-input-container>

      <!--State & Zip code-->
      <md-layout md-gutter>
        <md-layout class="inline">
          <md-input-container>
            <label>State</label>
            <md-input v-model="user.state"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout>
          <md-input-container>
            <label>Zip code</label>
            <md-input v-model="user.zipCode"></md-input>
          </md-input-container>
        </md-layout>
      </md-layout>
      
      <!--Lifestyle-->
      <md-input-container>
        <label for="lifestyle">Lifestyle</label>
        <md-select name="lifestyle" id="lifestyle" v-model="user.lifestyle">
          <md-option value="1.0">Lying or sedentary lifestyle, lack of physical activity</md-option>
          <md-option value="1.2">Sedentary work, low level physical activity</md-option>
          <md-option value="1.4">Work not physical, workout 2 times a week</md-option>
          <md-option value="1.6">Light physical work, training 3-4 times a week</md-option>
          <md-option value="1.8">Physical workout, training 5 times a week</md-option>
          <md-option value="2">Hard physical work, daily workout</md-option>
        </md-select>
      </md-input-container>

      <!--Diseases-->
      <div class="md-theme-default label">
        <label>Diseases</label>
      </div>
      <div class="md-chips md-theme-default mychips" md-delete="">
        <div class="md-input-container md-theme-default auto-height">
          <div v-for="(disease, id) in user.diseases" @click="removeDisease(disease)" tabindex="0" class="md-chip md-theme-default md-deletable">
            {{ disease }}
            <button type="button" class="md-button md-icon-button md-dense md-delete md-theme-default" tabindex="-1">
              <i aria-hidden="true" class="md-icon md-icon-delete md-theme-default material-icons">cancel</i>
              <div class="md-ink-ripple">
                <div class="md-ripple" style="width: 24px; height: 24px;" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div style="max-height: 130px; min-height: 64px; overflow-y: scroll;">
        <md-list>
          <md-list-item v-for="(disease, id) in getDiseases()" :key="id" @click.native="addDisease(disease)">
            <span>{{ disease }}</span>
            <md-ink-ripple />
          </md-list-item>
        </md-list>
      </div>

      <!--Allergens-->
      <div class="md-theme-default label">
        <label>Allergens</label>
      </div>
      <div class="md-chips md-theme-default mychips" md-delete="">
        <div class="md-input-container md-theme-default auto-height">
          <div v-for="(allergen, id) in user.allergens" @click="removeAllergen(allergen)" tabindex="0" class="md-chip md-theme-default md-deletable">
            {{ allergen }}
            <button type="button" class="md-button md-icon-button md-dense md-delete md-theme-default" tabindex="-1">
              <i aria-hidden="true" class="md-icon md-icon-delete md-theme-default material-icons">cancel</i>
              <div class="md-ink-ripple">
                <div class="md-ripple" style="width: 24px; height: 24px;" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div style="max-height: 130px; min-height: 64px; overflow-y: scroll;">
        <md-list>
          <md-list-item v-for="(allergen, id) in getAllergens()" :key="id" @click.native="addAllergen(allergen)">
            <span>{{ allergen }}</span>
            <md-ink-ripple />
          </md-list-item>
        </md-list>
      </div>

      <!--Sex-->
      <md-list>
        <label class="label">Sex</label>
        <md-radio v-model="user.sex" id="my-test2" name="my-test-group1" md-value="2" class="md-primary">
          Female
        </md-radio>
        <md-radio v-model="user.sex" id="my-test3" name="my-test-group1" md-value="3"class="md-primary">
          Male
        </md-radio>
      </md-list>

      <!--Save button-->
      <md-layout md-align="end">
        <md-button class="md-raised md-primary left" @click.native="save">Save</md-button>
      </md-layout>
    </form>
    <br />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setTitle', 'Your profile');
  },
  data() {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/profile/user'];
    }
  },
  components: {  },
  methods : {
    save() {
      this.$store.dispatch('user/profile/save', this.user);
    },
    addDisease(value) {
      this.$store.dispatch('user/profile/addDisease', value);
    },
    removeDisease(value) {
      this.$store.dispatch('user/profile/removeDisease', value);
    },
    getDiseases() {
      return this.$store.getters['user/profile/diseases'];
    },
    addAllergen(value) {
      this.$store.dispatch('user/profile/addAllergen', value);
    },
    removeAllergen(value) {
      this.$store.dispatch('user/profile/removeAllergen', value);
    },
    getAllergens() {
      return this.$store.getters['user/profile/allergens'];
    }
  }
}
</script>

<style scoped>
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .inline {
    padding-right: 8px;
  }
  .left {
    margin-left: 0px;
  }
  .label {
    width: 100%;
    min-height: 48px;
    padding-top: 16px;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    border: none;
    background: none;
    color: rgba(0,0,0,.54);
    font-family: inherit;
    font-size: 16px;
  }
  .auto-height {
    min-height: 0px;
    margin: 0;
  }

</style>
