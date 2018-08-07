<template>
  <div>
    <mip-v-btn color="info" class="green--text">button in .vue</mip-v-btn>

    <mip-v-chip close="true">
      <mip-v-avatar class="green">A</mip-v-avatar>ANZ Bank
    </mip-v-chip>

    <mip-v-chip outline="true" color="primary" tile="false" size="40">A</mip-v-chip>

    <mip-v-avatar tile="false" size="40" color="red lighten-4">
      <mip-img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar"/>
    </mip-v-avatar>

    <mip-v-chip close="true">
      <mip-v-avatar><img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">A</mip-v-avatar>
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
