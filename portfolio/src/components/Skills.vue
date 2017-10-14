<template>
  <div>
    <h1>Skills</h1>
    <h2>Area choice</h2>
    <div v-on:click="chooseAll()">all</div>
    <div v-for="area in areaList" v-on:click="toggleArea(area.name)">{{area.name}}</div>
    <h2>Minimum level choice (1-10)</h2>
    <p>{{levelChoice}}</p><input v-model="levelChoice" >
    <ul>
      <li v-for="skill in skillList"
          v-if="areachoice.includes(skill.type) &&
          skill.level >= levelChoice">{{skill.name}}: {{skill.level}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'skills',
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
        skillList: [
          {
            name: 'Python',
            type: 'tech',
            level: 5,
          },
          {
            name: 'JavaScript',
            type: 'tech',
            level: 6,
          },
          {
            name: 'Business Development',
            type: 'biz',
            level: 4,
          },
        ],
        areachoice: ['tech'],
        levelChoice: 2,
      };
    },
    methods: {
      toggleArea(area) {
        const a = this.areachoice;
        if (a.includes(area)) {
          a.splice(a.indexOf(area), 1);
        } else {
          a.push(area);
        }
      },
      chooseAll() {
        this.areachoice = [];
        this.areaList.forEach(area => this.areachoice.push(area.name));
      },
    },
  };
</script>
