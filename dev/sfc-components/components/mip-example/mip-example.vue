<template>
  <div>
    <mip-v-btn class="yellow">button in .vue</mip-v-btn>
    <mip-v-btn color="info" class="white--text">button in .vue</mip-v-btn>

    <mip-v-chip close>
      <mip-v-avatar class="green">A</mip-v-avatar>ANZ Bank
    </mip-v-chip>

    <mip-v-chip class="blue white--text">Example Chip</mip-v-chip>
    <mip-v-avatar class="green" :size="asize">A</mip-v-avatar>
    <mip-v-chip outline color="primary" text-color="red">Outline</mip-v-chip>

    <mip-v-toolbar>
      <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
      <mip-v-toolbar-title>Title</mip-v-toolbar-title>

      <mip-v-spacer></mip-v-spacer>

      <mip-v-toolbar-items class="">
        <mip-v-btn flat>Link One</mip-v-btn>
        <mip-v-btn flat>Link Two</mip-v-btn>
        <mip-v-btn flat>Link Three</mip-v-btn>
      </mip-v-toolbar-items>
    </mip-v-toolbar>

    <mip-v-toolbar dark color="primary">
      <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

      <mip-v-toolbar-title class="white--text">Title</mip-v-toolbar-title>

      <mip-v-spacer></mip-v-spacer>

      <mip-v-btn icon>
        <mip-v-icon>search</mip-v-icon>
      </mip-v-btn>

      <mip-v-btn icon>
        <mip-v-icon>apps</mip-v-icon>
      </mip-v-btn>

      <mip-v-btn icon>
        <mip-v-icon>refresh</mip-v-icon>
      </mip-v-btn>

      <mip-v-btn icon>
        <mip-v-icon>more_vert</mip-v-icon>
      </mip-v-btn>
    </mip-v-toolbar>

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
  data() {
    return {
      asize: 100
    }
  },
  mounted () {
    console.log('This is my first custom component !')
  }
}
</script>
