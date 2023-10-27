<template>
  <div style="padding: 0">
    <img
        src="@/assets/svg/image.png" alt=""
        style="width: 100%"
        @click="onRouteMails"
    >
  </div>
</template>

<script>
export default {
  name: "Main",
  methods: {
    onRouteMails() {
      this.$router.push({path: '/mails'})
    }
  }
}
</script>

<style scoped>

</style>