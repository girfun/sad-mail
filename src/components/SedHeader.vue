<template>
  <div>
    <div class="text-center sed sed__header">
      № 16658
    </div>
    <div class="sed sed__subheader">На рассмотрении</div>
    <div class="sed__info">
      <div style="display: flex; flex-direction: row; gap: 4px">
        <img :src="iconDocument" alt="">
        <div class="number">№ 16658</div>
        <div class="date">от 11.10.2023</div>
      </div>
      <img :src="iconExpandButton" alt="">
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import iconDocument from '@/assets/svg/iconDocument.svg'
import iconExpandButton from '@/assets/svg/icon_expand_button.svg'

export default defineComponent({
  name: "SedHeader",
  data () {
    return {
      iconDocument,
      iconExpandButton
    }
  }
})
</script>

<style scoped lang="sass">
.sed
  font-family: Gotham Pro,sans-serif
  font-weight: 600
  &__header
    font-size: 16px
    padding: 10px
    font-weight: 500
  &__subheader
    font-size: 22px
    padding: 15px 15px 5px
  &__info
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    gap: 4px
    padding: 10px
    font-family: Gotham Pro,sans-serif
    background: #fbf5df
    border-radius: 8px
    margin: 10px
    .number
      color: #131d1e
      text-decoration: underline
    .date
      color: #7c786d
</style>