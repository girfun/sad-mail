<template>
  <div style="padding: 0">
    <img
        src="@/assets/svg/image1.png" alt=""
        style="width: 100%"
        @click="goBack"
    >
    <img
        src="@/assets/svg/image2.png" alt=""
        style="width: 100%; margin-top: -5px"
        @click="onRouteMail"
    >
  </div>
</template>

<script>
export default {
  name: "Mails",
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onRouteMail() {
      this.$router.push({path: '/mail'})
    }
  }
}
</script>

<style scoped>

</style>