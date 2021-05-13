<template>
  <div>

  <p> There are a total of {{ states.length }} states and the District of Columbia</p>
    <p>You have visited {{ totalVisited }} {{ units}}</p>
    <p id="all-visited-message" v-if="areAllVisited">You have visited all the states and the District of Columbia!</p>
  </div>
</template>

<script>
export default {
name: "StateSummary.vue",
  props: {
  states: Array
  },
  computed: {
  totalVisited(){
    let visitedCount = 0
    this.states.forEach( state => {
      if (state.visited) {
        visitedCount++
      }
    })
    //return whats computed
    return visitedCount
    },
    //computed property for units state vs states
    units() {
      if (this.totalVisited == 1) {
        return 'state'
      }else {
        return 'states'
      }
    },
    //computed if all states visited
    areAllVisited() {
    return this.totalVisited === this.states.length
    }
  }
}
</script>

<style scoped>
#all-visited-message{
  color: cornflowerblue;
  font-weight: 600;
}
</style>