<template>
  <div>
    <h1>Skills</h1>
    <ul>
    <li v-for="skill in skillList">{{skill.name}}: {{skill.level}}</li>
          <!--v-if="areaChoice.includes(skill.type) &&
          skill.level >= levelChoice"-->
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
