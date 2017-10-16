<template>
  <div>
  <h1>Menus</h1>
  <h2>Area choice</h2>
  <button @click="chooseAll">all</button>
  <div v-for="area in areaList" @click="toggleArea({area: area.name})">{{area.name}}</div>
    <!--v-on:click="toggleArea(area.name)"-->
    <h3>store.state:</h3>
    <p v-for="area in areaChoice">{{area}}</p>
  <!--<h2>Minimum level choice (1-10)</h2>-->
  <p>{{ levelChoice }}</p>
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
    },
    methods: {
      chooseAll() {
        this.$store.commit('chooseAll');
      },
      toggleArea(area) {
        this.$store.commit('toggleArea', area);
      },
    },
  };
</script>
