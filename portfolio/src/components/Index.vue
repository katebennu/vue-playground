<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <menus></menus>
    <skills></skills>
  </div>
</template>

<script>
import menus from './Menus';
import skills from './Skills';

export default {
  components: { menus, skills },
  name: 'Index',
  data() {
    return {
      msg: 'Welcome to the playground',
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
