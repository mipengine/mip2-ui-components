<template>
  <div>
    <mip-v-btn class="yellow">button in .vue</mip-v-btn>
    <mip-v-btn color="info" class="white--text">button in .vue</mip-v-btn>

    <mip-v-chip close="true">
      <mip-v-avatar class="green">A</mip-v-avatar>ANZ Bank
    </mip-v-chip>

  </div>
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
