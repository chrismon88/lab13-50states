<template>
  <div id="block-header">
    <h1 id="title"> Have you visited every state?</h1>
  </div>
</template>

<script>

export default {
name: 'PageHeader',
}
</script>

<!--scoped make sure styles are only applied to this components-->
<style scoped>

#block-header{
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  border-radius: .3rem;
  background-color: saddlebrown;
  background-image: url('~@/assets/chris-lawton-KpBXAOs80YI-unsplash.jpg') ;
  background-position: center;
  background-size: cover;

}

#title{
  font-weight: 500;
  color: gainsboro;
}
</style>