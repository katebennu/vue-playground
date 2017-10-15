<template>
  <div>
    <h1>Skills</h1>
    <ul>
    <li v-for="skill in skillList"
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
        ],
      };
    },
  };
</script>
