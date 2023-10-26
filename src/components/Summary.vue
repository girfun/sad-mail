<template>
  <div class="summary__position">
    <div class="graph__title title-padding" :class="{'adaptive_graph-title': viewType === 'adaptiveMail'}">Задолженность в консолидированный бюджет РТ, млн</div>
    <div class="graph__summary" :class="{'full-width': viewType === 'adaptiveMail'}">
      <div class="graph__line">
        <div class="graph__labels-part">
          <img class="graph__icon" :class="{'adaptive_icon': viewType === 'adaptiveMail'}" :src="iconPlan" alt="">
          <div class="label" :class="{'adaptive_label': viewType === 'adaptiveMail'}">План на апрель</div>
        </div>
        <div class="value" :class="{'adaptive_value': viewType === 'adaptiveMail'}">10 715</div>
      </div>
      <hr class="horizontal-line">
      <div class="graph__line">
        <div class="graph__labels-part">
          <img class="graph__icon" :class="{'adaptive_icon': viewType === 'adaptiveMail'}" :src="iconFact" alt="">
          <div class="label" :class="{'adaptive_label': viewType === 'adaptiveMail'}">Факт на апрель</div>
        </div>
        <div class="value value__red" :class="{'adaptive_value': viewType === 'adaptiveMail'}">13 760</div>
      </div>
      <hr class="horizontal-line">
      <div class="graph__line">
        <div class="graph__labels-part">
          <img class="graph__icon" :class="{'adaptive_icon': viewType === 'adaptiveMail'}" :src="iconDeviation" alt="">
          <div class="label" :class="{'adaptive_label': viewType === 'adaptiveMail'}">Отклонение</div>
        </div>
        <div class="value value__deviation" :class="{'adaptive_value': viewType === 'adaptiveMail'}">+3 045</div>
      </div>
    </div>
  </div>
</template>
<script>
import iconPlan from '@/assets/svg/plane_plan.svg'
import iconFact from '@/assets/svg/plane_fact.svg'
import iconDeviation from '@/assets/svg/plane_deviation.svg'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Summary",
  data () {
    return {
      iconPlan,
      iconFact,
      iconDeviation
    }
  },
  props: {
    viewType: {
      type: String
    }
  }
})
</script>

<style scoped lang="sass">
.summary
  &__position
    padding: 46px 115px
    @media screen and (max-width: 576px)
      padding: 15px 38px
.graph
  &__title
    color: #000
    font-family: SF Pro Display, sans-serif
    font-size: 20px
    font-style: normal
    font-weight: 700
    line-height: normal
    letter-spacing: 0.38px
    @media screen and (max-width: 576px)
      font-size: 8px
  &__icon
    @media screen and (max-width: 576px)
      width: 9px
      height: 9px
  &__summary
    display: flex
    width: fit-content
    padding: 15px 20px
    background: #F4F7F8
    border-radius: 10px
    flex-direction: column
    @media screen and (max-width: 576px)
      padding: 5px 7px
    .label
      color: #2E374D
      font-family: SF Pro Text,sans-serif
      font-size: 16px
      font-style: normal
      font-weight: 400
      line-height: 20px
      letter-spacing: -0.32px
      @media screen and (max-width: 576px)
        font-size: 7px
        line-height: 8.75px
    .value
      color: #2E374D
      text-align: right
      font-family: SF Pro Display, sans-serif
      font-size: 20px
      font-style: normal
      font-weight: 700
      line-height: 24px
      letter-spacing: 0.38px
      @media screen and (max-width: 576px)
        font-size: 8px
        line-height: 9.6px
  &__line
    display: flex
    gap: 8px
    flex-direction: row
    justify-content: space-between
    align-items: center
    @media screen and (max-width: 576px)
      gap: 6px
  &__labels-part
    display: flex
    align-items: center
    gap: 8px
    @media screen and (max-width: 576px)
      gap: 2.7px
.value
  &__red
    color: #FF7B67 !important
  &__green
    color: #44CC51 !important
  &__deviation
    color: #6F849E !important
.horizontal-line
  width: 100%
  height: 1px
  background: #CEDBE6
  border: none
  @media screen and (max-width: 576px)
    margin: 3px 0
.title-padding
  padding-bottom: 26px
  @media screen and (max-width: 576px)
    padding-bottom: 11px
.adaptive
  &_graph-title
    font-size: 10px !important
  &_label
    font-size: 9px !important
    line-height: 11.25px !important
  &_value
    font-size: 10px !important
    line-height: 12px !important
  &_icon
    width: 12px
    height: 12px
</style>