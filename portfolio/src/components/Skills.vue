<template>
  <div>
    <h1>Skills</h1>
    <ul>
    <li class="skill" v-for="skill in skillList"
          v-if=" $store.state.areaChoice.includes(skill.type) &&
          skill.level >=  $store.state.levelChoice">{{skill.name}}: {{skill.level}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'skills',
    data() {
      return {
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
          {
            name: 'Git',
            type: 'tech',
            level: 5,
          },
          {
            name: 'SQL',
            type: 'tech',
            level: 4,
          },
          {
            name: 'Accounting',
            type: 'biz',
            level: 5,
          },
          {
            name: 'English',
            type: 'lang',
            level: 8,
          },
          {
            name: 'Russian',
            type: 'lang',
            level: 9,
          },{
            name: 'Finnish',
            type: 'lang',
            level: 4,
          },
        ],
      };
    },
  };
</script>
<style>
  li.skill {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border-style: solid;
    border-radius: 5px;
  }
</style>
