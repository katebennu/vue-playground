<template>
  <div>
  <h1>Menus</h1>
  <h2>Area choice</h2>
  <div v-on:click="chooseAll()">all</div>
  <div v-for="area in areaList" v-on:click="toggleArea(area.name)">{{area.name}}</div>
  <!--<h2>Minimum level choice (1-10)</h2>-->
  <!--<p>{{levelChoice}}</p><input v-model="levelChoice" >-->
  </div>
</template>

<script>
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
        areaChoice: ['tech'],
//        levelChoice: 2,
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
