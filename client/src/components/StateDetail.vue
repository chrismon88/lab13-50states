<template>

  <div class="state-info">
   <span class="state-name">{{ state.name }}</span>

    <div>
      <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>


    <div>
      <!-- router will know which state is linked based on object-->
      <router-link v-bind:to=" {name: 'StateMap', params: {state: state.name }}">
        <img class="map-icon" src="@/assets/icons8-map-64.png">
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "StateDetail.vue",
  emits: ['update-visited'],
  props:{
    state: Object  // dont modify props
  },
  data() {
    return {
      visited: this.state.visited  //ok to modify
    }
  },
  methods: {
    visitedChanged(){
      // emit message to parent parent will handle all api calls
        this.$emit('update-visited', this.state.name, this.visited)
    }
  }
}
</script>

<style scoped>

.state-info{
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px gainsboro;
  border-radius: .3rem;
  background-color: whitesmoke;
}

.visit-state{
  margin: 1rem;
  text-align: center;
}

.map-icon{
  width: 2rem;
  height: 2rem;
}

</style>