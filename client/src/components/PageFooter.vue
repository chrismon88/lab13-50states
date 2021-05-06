<template>
  <div>
<!-- id for styling-->
    <div id="navigation-links">

      <span class="nav-link">
          <!--router links for browser navigation links-->
    <router-link to="/">Home</router-link>
      </span>

      <span class="nav-link">
    <router-link to="/about">About this site</router-link>
      </span>

    </div>

    <p>Header image by
      <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrisLawton on Unsplash</a>
    </p>
    </div>
</template>

<script>

export default {
  name: "PageFooter.vue"
}
</script>

<style scoped>

.nav-link{
  margin: 1rem;
}
</style>