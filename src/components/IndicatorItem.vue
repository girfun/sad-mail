<template>
  <div class="indicator" :class="'color_' + indicatorData.color_type">
    <div class="indicator__title" :class="{'adaptive_indicator-title': viewType === 'adaptiveMail'}">{{ indicatorData.title }}</div>
    <div class="indicator__values">
      <div class="values_row plan" :class="{'adaptive_plan': viewType === 'adaptiveMail'}">
        план <span> {{ indicatorData.plan }}</span>
      </div>
      <div class="values_row fact" :class="{'adaptive_fact': viewType === 'adaptiveMail'}">
        факт <span> {{ indicatorData.fact }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "IndicatorItem",
  props: {
    indicatorData: {
      type: Object
    },
    viewType: {
      type: String
    }
  }
})
</script>

<style scoped lang="sass">
.indicator
  display: flex
  border-radius: 8px
  justify-content: space-between
  flex-direction: column
  padding: 16px
  @media screen and (max-width: 576px)
    border-radius: 4px
    padding: 5px
    aspect-ratio: 1/1
    flex-basis: 25%
  &__title
    color: #000
    font-family: SF Pro Text, sans-serif
    font-size: 19px
    font-style: normal
    font-weight: 600
    line-height: 24px
    letter-spacing: -0.442px
    @media screen and (max-width: 576px)
      font-size: 8.3px
      line-height: 10.5px
      font-weight: 550
  &__values
    display: flex
    flex-direction: column
    gap: 8px
    @media screen and (max-width: 576px)
      gap: 2.7px
.values_row
  display: flex
  flex-direction: row
  justify-content: space-between
.plan
  color: rgba(0, 0, 0, 0.60)
  font-family: SF Pro Text, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 20px
  letter-spacing: -0.442px
  @media screen and (max-width: 576px)
    font-size: 7px
    line-height: 8.75px
  span
    font-size: 19px
    font-style: normal
    font-weight: 700
    @media screen and (max-width: 576px)
      font-size: 8.3px
      font-weight: 600
.fact
  overflow: hidden
  color: #000
  text-overflow: ellipsis
  font-family: SF Pro Text, sans-serif
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 20px
  letter-spacing: -0.442px
  @media screen and (max-width: 576px)
    font-size: 7px
    line-height: 8.75px
  span
    font-size: 19px
    font-style: normal
    font-weight: 700
    @media screen and (max-width: 576px)
      font-size: 8.3px
      font-weight: 600
.color
  &_lightgreen
    background: #A2EAA9
  &_green
    background: #5FD86B
  &_lightred
    background: #FFCAC1
  &_red
    background: #FF9383
.adaptive
  &_indicator-title
    font-size: 10.3px
    line-height: 13px
  &_plan
    font-size: 9px
    line-height: 11.25px
    span
      font-size: 10.3px
  &_fact
    font-size: 9px
    line-height: 11.25px
    span
      font-size: 10.3px
</style>