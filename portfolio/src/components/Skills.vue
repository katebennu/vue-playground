<template>
  <div>
    <h1>Skills</h1>
    <ul>
    <li class="skill" v-for="skill in skillList"
          v-if=" (areaChoice.includes(skill.type) && skill.level >=  levelChoice && !favsOn) ||
                  (favsOn && favs.includes(skill.name))"
          @click="addFav({fav: skill.name})"
          v-bind:class="{ active: favs.includes(skill.name) }">{{skill.name}}: {{skill.level}}</li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: 'skills',
    methods: {
      addFav(payload) {
        this.$store.commit('addFav', payload);
      },
    },
    computed: {
      areaChoice() {
        return this.$store.state.areaChoice;
      },
      levelChoice() {
        return this.$store.state.levelChoice;
      },
      favs() {
        return this.$store.state.favs;
      },
      favsOn() {
        return this.$store.state.favsOn;
      },
    },
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
          },
          {
            name: 'Finnish',
            type: 'lang',
            level: 4,
          },
          {
            name: 'Vue',
            type: 'tech',
            level: 3,
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
