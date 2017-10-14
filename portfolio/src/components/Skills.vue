<template>
  <div>
    <h1>Skills</h1>
    <div v-for="area in areaList" v-on:click="toggleArea(area.name)">{{area.name}}</div>
    <ul>
      <li v-for="skill in skillList"
          v-if="areachoice.includes(skill.type) &&
          skill.level >= levelchoice">{{skill.name}}</li>
    </ul>
    <p v-for="item in areachoice">{{item}}</p>
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
        levelchoice: 2,
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
    },
  };
</script>
