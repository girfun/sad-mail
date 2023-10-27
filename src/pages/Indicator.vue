<template>
  <div :class="[{'adaptiv-mail': viewType === 'adaptiveMail'}]">
    <div @click="goBack" style="margin: 10px 0 0 38px">
      <img
          src="@/assets/svg/image4.jpg" alt=""
          style="width: 100%"
      >
    </div>
    <ViewSwitcher @viewType="switchView"/>
    <Header/>
    <Responsible :view-type="viewType"/>
    <SummaryIndicator :view-type="viewType"/>
    <div class="summary__position">
      <img :src="IconGraph" alt="" class="graph">
    </div>
<!--    <indicator-list :view-type="viewType"/>-->
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Responsible from "@/components/Responsible.vue";
import SummaryIndicator from "@/components/SummaryIndicator.vue";
import {defineComponent} from 'vue'
import LineChart from "@/components/LineChart.vue";
import ComponentsStyles from '@/styles/linechart.styl'
import IndicatorList from "@/components/IndicatorList.vue";
import SedHeader from "@/components/SedHeader.vue";
import ViewSwitcher from "@/components/ViewSwitcher.vue";
import IconGraph from '@/assets/svg/icon_graph.svg'

export default defineComponent({
  name: "Indicator",
  components: {
    ViewSwitcher,
    SedHeader,
    IndicatorList,
    Header,
    Responsible,
    SummaryIndicator,
    LineChart
  },
  data () {
    return {
      IconGraph,
      show: false,
      viewType: 'adaptiveMail',
    }
  },
  methods: {
    onPeriodChanged(period) {
      this.period = isNaN(+period) ? period : +period;
    },
    switchView (value) {
      this.viewType = value
    },

    goBack() {
      this.$emit('go-back')
    }
  },
  mounted() {
    console.log(this.$route)
  }
})
</script>

<style scoped lang="sass">
.indicators__info_banner
  align-items: center
  display: flex
  gap: 16px
  padding: 12px 16px
  border-radius: 12px
  background: rgba(24, 162, 242, 0.12)

.info__text
  color: #2C2D2E
  font-family: SF Pro Text, sans-serif
  font-size: 15px
  font-style: normal
  font-weight: normal
  line-height: 20px
  letter-spacing: -0.24px

.indicators
  margin: 0 80px

.category__header
  color: #000
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro Display, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: bold
  line-height: 30px
  letter-spacing: 0.36px
  padding: 32px 0 16px

.indicators__list_header
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  gap: 24px
  padding: 8px 0

.indicators__list_header > div
  font-feature-settings: 'ss03' on, 'clig' off, 'liga' off
  font-family: SF Pro Text Regular, sans-serif
  font-size: 15px
  font-style: normal
  font-weight: 400
  line-height: 22px
  letter-spacing: -0.456px

.p-bottom-24
  padding-bottom: 24px

.indicators__list_line_type_1
  border: 1.5px solid rgba(0, 0, 0, 0.80)
  margin: 0

.indicators__list_line_type_2
  border: 1px solid rgba(0, 0, 0, 0.80)
  margin: 0

.indicator__item
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 24px
  align-items: center
  padding: 16px 0
  border-bottom: 1px solid rgba(0, 0, 0, 0.40)

.indicator__button
  padding: 12px 16px
  color: #FFFFFF
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.12)
  margin-left: auto
  border-radius: 4px

.button__green
  background: linear-gradient(180deg, #1DBF53 0%, #009E35 100%)

.button__green:hover
  background: linear-gradient(180deg, #1DBF53 0%, #009E35 20%)

.button__red
  background: linear-gradient(180deg, #FF4A4A 0%, #EA0000 100%)

.button__red:hover
  background: linear-gradient(180deg, #FF4A4A 0%, #EA0000 20%)

.indicators__list_wrapper
  display: flex
  flex-direction: column
  flex-wrap: wrap

.indicator__title
  color: #000
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro,sans-serif
  font-size: 17px
  font-style: normal
  font-weight: 590
  line-height: 22px
  letter-spacing: -0.442px

.indicator__unit
  color: #92A6B9
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro,sans-serif
  font-size: 13px
  font-style: normal
  font-weight: normal
  line-height: 20px
  letter-spacing: -0.078px

.indicator__value
  color: #000
  font-feature-settings: 'ss03' on, 'clig' off, 'liga' off
  font-family: SF Pro Text Bold, sans-serif
  font-size: 23px
  font-style: normal
  font-weight: bold
  line-height: 28px
  letter-spacing: -0.456px

.indicator__button_text
  font-family: SF Pro Text Regular, sans-serif
  font-size: 15px
  font-style: normal
  font-weight: 500
  line-height: 20px

.text-center
  text-align: center

.text-bold
  font-weight: bold

.info
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: flex-end
  padding-bottom: 80px
  padding-right: 80px
  &__text
    color: #2C2D2E
    font-family: SF Pro Text, sans-serif
    font-size: 15px
    font-style: normal
    font-weight: normal
    line-height: 20px
    letter-spacing: -0.24px

.indicators__info_banner
  align-items: center
  display: flex
  gap: 16px
  padding: 12px 16px
  border-radius: 12px
  background: rgba(24, 162, 242, 0.12)

.indicators
  margin: 0 80px
  &__list_header
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    gap: 24px
    padding: 8px 0
    > div
      font-feature-settings: 'ss03' on, 'clig' off, 'liga' off
      font-family: SF Pro Text Regular, sans-serif
      font-size: 15px
      font-style: normal
      font-weight: 400
      line-height: 22px
      letter-spacing: -0.456px


  &__list_line_type_1
    border: 1.5px solid rgba(0, 0, 0, 0.80)
    margin: 0

  &__list_line_type_2
    border: 1px solid rgba(0, 0, 0, 0.80)
    margin: 0

  &__list_wrapper
    display: flex
    flex-direction: column
    flex-wrap: wrap


.category__header
  color: #000000
  font-feature-settings: 'clig' off, 'liga' off
  font-family: SF Pro Display, sans-serif
  font-size: 24px
  font-style: normal
  font-weight: bold
  line-height: 30px
  letter-spacing: 0.36px
  padding: 32px 0 16px

.p-bottom-24
  padding-bottom: 24px
</style>