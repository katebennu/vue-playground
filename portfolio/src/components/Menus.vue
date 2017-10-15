<template>
  <div>
  <h1>Menus</h1>
  <h2>Area choice</h2>
  <!--<div v-on:click="chooseAll()">all</div>-->
  <div v-for="area in areaList">{{area.name}}</div>
    <!--v-on:click="toggleArea(area.name)"-->
    <!--<p v-for="area in areaChoice">{{area}}</p>-->
  <!--<h2>Minimum level choice (1-10)</h2>-->
  <p>{{ $store.state.levelChoice }}</p>
    <!--<input v-model="levelChoice" >-->
  </div>
</template>

<script>
//  import mapGetters from 'vuex';

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
        ],
//        computed: mapGetters([
//          'levelChoice',
//        ]),
      };
    },
    methods: {
      toggleArea(area) {
        const a = this.areaChoice;
        if (a.includes(area)) {
          a.splice(a.indexOf(area), 1);
        } else {
          a.push(area);
        }
      },
      chooseAll() {
        this.areaChoice = [];
        this.areaList.forEach(area => this.areaChoice.push(area.name));
      },
    },
  };
</script>
