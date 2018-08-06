<template>
  <mip-v-app>
    <mip-v-btn color="info">button in .vue</mip-v-btn>
  </mip-v-app>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
}
</style>

<script>
export default {
  mounted () {
    console.log('This is my first custom component !')
  }
}
</script>
