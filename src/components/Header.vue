<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__text">
        <div>Модуль «Контроль»</div>
        <div>Единой межведомственной системы</div>
        <div>электронного документооборота</div>
        <div>Республики Татарстан</div>
      </div>
      <img class="header__image" src="@/assets/svg/iconTatarstan.svg" alt="">
      <div class="header__text">
        <div>Татарстан Республикасының</div>
        <div>Бердәм ведомствоара электрон</div>
        <div>документлар белән идарә итү</div>
        <div>системасының "Контроль" модуле</div>

      </div>
    </div>
    <div class="main-text-header text-center">
      Техническая поддержка:
      <a href="mailto:support.control@tatar.ru?subject=Вопрос технической поддержке" style="color: #0084FF">support.control@tatar.ru</a><span>, +7 986 723-61-97</span>
    </div>
    <hr style="border: 1px solid #CBCBCB">
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>



<style scoped lang="sass">
.header
  padding: 70px 80px 32px 80px
  @media screen and (max-width: 576px)
    padding: 18px 20px 8px 20px
  &__wrapper
    justify-content: space-between
    align-items: center
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    padding-bottom: 44px
    @media screen and (max-width: 576px)
      padding-bottom: 11px
  &__image
    width: 120px
    height: 120px
    @media screen and (max-width: 576px)
      width: 45px
      height: 45px
  &__text
    color: #000000
    text-align: center
    font-family: Times New Roman, sans-serif
    font-size: 23px
    font-style: normal
    font-weight: normal
    line-height: 30px
    letter-spacing: -0.442px
    @media screen and (max-width: 576px)
      font-size: 10px
      font-style: normal
      font-weight: normal
      line-height: 17px
      letter-spacing: -0.442px
</style>