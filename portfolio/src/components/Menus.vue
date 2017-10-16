<template>
  <div>
    <div class="store">
      <h3>store.state:</h3>
      Areas: <p class="store-item" v-for="area in areaChoice">{{area}}</p><br>
      Favs: <p class="store-item" v-for="fav in favs">{{fav}}</p>
      <!--<h2>Minimum level choice (1-10)</h2>-->
      <p>{{ levelChoice }}</p>
    </div>
    <h1>Menus</h1>
    <h2>Area choice</h2>
    <button @click="chooseAll">all</button>
    <button @click="toggleFavs" v-bind:class="{ active: favsOn }">favs</button><br>
    <button v-for="area in areaList" @click="toggleArea({area: area.name})">{{area.name}}</button>
    <!--v-on:click="toggleArea(area.name)"-->
    <!--<input v-model="levelChoice" >-->
  </div>
</template>

<script>
  //  import mapActions from 'vuex';

  export default {
    name: 'menus',
    data() {
      return {
        areaList: [
          {
            name: 'tech',
          },
          {
            name: 'biz',
          },
          {
            name: 'lang',
          },
        ],
      };
    },
    computed: {
      areaChoice() {
        return this.$store.state.areaChoice;
      },
      levelChoice() {
        return this.$store.state.levelChoice;
      },
      favsOn() {
        return this.$store.state.favsOn;
      },
      favs() {
        return this.$store.state.favs;
      },
    },
    methods: {
      chooseAll() {
        this.$store.commit('chooseAll');
      },
      toggleArea(area) {
        this.$store.commit('toggleArea', area);
      },
      toggleFavs() {
        this.$store.commit('toggleFavs');
      },
    },
  };
</script>

<style>
  .store {
    border-style: solid;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }
  .store-item {
    display: inline-block;
    margin: 5px;
  }
  button {
    cursor: pointer;
  }
  .active {
    color: aquamarine;
  }
</style>
