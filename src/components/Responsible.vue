<template>
  <div>
    <div class="info">
      <div class="main-text" :class="{'adaptive-main-text': viewType === 'adaptiveMail'}" style="flex-basis: 35%">
        Начальнику управления экономики, финансов и распоряжению государственным имуществом
        <div class="responsible__padding">Гайнутдинову Р.В.</div>
      </div>
    </div>
    <div class="minister__data p-bottom-24">
      <div
          class="main-text text-center text-bold p-bottom-24"
          :class="{'adaptive-main-text': viewType === 'adaptiveMail'}"
      >
        Уважаемый Ренат Вагизович!
      </div>
      <div class="minister__text" :class="{'adaptive-minister-text': viewType === 'adaptiveMail'}">
        <p>Информируем Вас о том, что по итогам июля 2023 года плановое значение по показателю "Общая задолженность в консолидированный бюджет РТ" не достигнуто.</p>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Responsible",
  props: {
    viewType: {
      type: String
    }
  }
})
</script>

<style scoped lang="sass">
.info
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-end
  padding-bottom: 80px
  padding-right: 80px
  @media screen and (max-width: 576px)
    padding-bottom: 20px
    padding-right: 20px

.minister__text
  padding: 0 88px 0 115px
  color: #000
  text-align: justify
  font-family: Times New Roman, sans-serif
  font-size: 21px
  font-style: normal
  font-weight: normal
  line-height: 32px
  letter-spacing: -0.442px
  @media screen and (max-width: 576px)
    font-size: 9px
    line-height: 14px

.minister__text
  padding: 0 30px 0 38px
  color: #000000
  text-align: justify
  font-family: Times New Roman, sans-serif
  font-size: 21px
  font-style: normal
  font-weight: normal
  line-height: 32px
  letter-spacing: -0.442px
  @media screen and (max-width: 576px)
    font-size: 9px
    line-height: 14px
  p
    text-indent: 40px
    @media screen and (max-width: 576px)
      text-indent: 13px
.responsible
  &__padding
    padding-top: 28px
    @media screen and (max-width: 576px)
      padding-top: 7px
.adaptive
  &-main-text
    font-size: 11px
    line-height: 14.6px
  &-minister-text
    font-size: 11px
    line-height: 17px
</style>