<template>
<div class="state-map">
  <h2>The state of {{ state.name }}</h2>

  <p v-if="state.visited">You have visited this state</p>
  <p v-else>You have not visited this state yet</p>

  <!--map here-->
<!-- vbind will center map -->
  <div id="map-container" v-if="dataReady">
    <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors">

      </l-tile-layer>
    </l-map>
  </div>


</div>
</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  name: "StateMap.vue",
  components: {
    LMap, LTileLayer
  },
  //data will return an object:state
  data() {
    return {
      state: {},
      //data properties will check if data and map ready
      dataReady: false,
      mapReady: false
    }
  },
  mounted() {
    this.state.name = this.$route.params.state
    this.fetchStateData()
  },
  //this.state data will overwrite state API

  methods: {
    fetchStateData() {
      this.$stateService.getOneState(this.state.name).then( state => {
        this.state = state
        this.dataReady = true
      }).catch( err => {
        //404 not found
        if ( err.response && err.response.status ===404 ) {
          this.state.name = '?'
        }else{
          alert('Sorry, error fetching data about this state') // gen message for user
          console.error(err) // for developer
        }
      })
    },
    onMapReady() {
      this.mapReady = true
    },
    setMapView() {
      if (this.mapReady && this.dataReady) {
        //refers to html element with refmap
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)

      }
    }
  },
  computed: {
    mapCenter() {
      return [ this.state.lat, this.state.lon ]
    }
  }
}
</script>

<style scoped>

#map-container{
  height: 30rem;
}
</style>