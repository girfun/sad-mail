<template>
  <div class="indicator__list-position">
    <div class="header__wrapper">
      <div class="header__switchers"
           :class="{'active': category.componentName === selectedComponent, 'adaptive_switchers': viewType === 'adaptiveMail'}"
           v-for="category in components"
           :key="category.id"
           @click="selectedComponent = category.componentName"
      >
        {{ category.title }}
      </div>
    </div>
    <div class="indicators" :class="{'adaptive_indicators': viewType === 'adaptiveMail'}">
      <indicator-item
          v-for="indicator in indicators[selectedComponent]"
          :key="indicator.id"
          :indicator-data="indicator"
          :view-type="viewType"
      />
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import IndicatorItem from "@/components/IndicatorItem.vue";

export default defineComponent({
  name: "IndicatorList",
  components: {
    IndicatorItem
  },
  data() {
    return {
      selectedComponent: 'tax',
      components: [
        {
          id: 0,
          title: 'Вид налога',
          componentName: 'tax'
        },
        {
          id: 1,
          title: 'Категории',
          componentName: 'category'
        },
        {
          id: 2,
          title: 'Министерства',
          componentName: 'ministry'
        },
        {
          id: 3,
          title: 'Районы',
          componentName: 'region'
        },
        {
          id: 4,
          title: 'Тип должников',
          componentName: 'deb'
        },

      ],
      indicators: {
        tax: [
          {
            id: 0,
            title: 'Налог на прибыль организаций',
            plan: 3376,
            fact: 5002,
            color_type: 'red'
          },
          {
            id: 1,
            title: 'Налог на доходы физ. лиц',
            plan: 2487,
            fact: 3687,
            color_type: 'red'
          },
          {
            id: 2,
            title: 'Транспортный налог с физ. лиц',
            plan: 1265,
            fact: 1051,
            color_type: 'green'
          },
          {
            id: 3,
            title: 'Налог со специальным налоговым режимом',
            plan: 961,
            fact: 1293,
            color_type: 'lightred'
          },
          {
            id: 4,
            title: 'Налог на имущество с организаций',
            plan: 773,
            fact: 791,
            color_type: 'lightred'
          },
          {
            id: 5,
            title: 'Земельный налог с организаций',
            plan: 755,
            fact: 778,
            color_type: 'red'
          },
          {
            id: 6,
            title: 'Налог на имущество с физ. лиц',
            plan: 391,
            fact: 387,
            color_type: 'lightgreen'
          },
          {
            id: 7,
            title: 'Транспортный налог с организаций',
            plan: 261,
            fact: 260,
            color_type: 'lightgreen'
          },
          {
            id: 8,
            title: 'Земельный налог с физ. лиц',
            plan: 270,
            fact: 249,
            color_type: 'green'
          },
          {
            id: 9,
            title: 'Акцизы',
            plan: 132,
            fact: 241,
            color_type: 'red'
          },
          {
            id: 10,
            title: 'Прочие налоги с сборы',
            plan: 3,
            fact: 16,
            color_type: 'red'
          }
        ],
        category: [
          {
            id: 0,
            title: 'Недоимка',
            plan: 5411,
            fact: 8255,
            color_type: 'red'
          },
          {
            id: 1,
            title: 'В процедуре банкротства',
            plan: 3711,
            fact: 5505,
            color_type: 'lightred'
          },
          {
            id: 2,
            title: 'Приостановлено по суду',
            plan: 234,
            fact: 0.3,
            color_type: 'green'
          },
          {
            id: 3,
            title: 'Отсроченные платежи',
            plan: 129,
            fact: 0,
            color_type: 'green'
          }
        ],
        ministry: [
          {
            id: 0,
            title: 'Налог на прибыль организаций',
            plan: 3376,
            fact: 5002,
            color_type: 'red'
          },
          {
            id: 1,
            title: 'Налог на доходы физ. лиц',
            plan: 2487,
            fact: 3687,
            color_type: 'red'
          },
          {
            id: 2,
            title: 'Транспортный налог с физ. лиц',
            plan: 1265,
            fact: 1051,
            color_type: 'green'
          },
          {
            id: 3,
            title: 'Налог со специальным налоговым режимом',
            plan: 961,
            fact: 1293,
            color_type: 'lightred'
          },
          {
            id: 4,
            title: 'Налог на имущество с организаций',
            plan: 773,
            fact: 791,
            color_type: 'lightred'
          },
          {
            id: 5,
            title: 'Земельный налог с организаций',
            plan: 755,
            fact: 778,
            color_type: 'red'
          },
          {
            id: 6,
            title: 'Налог на имущество с физ. лиц',
            plan: 391,
            fact: 387,
            color_type: 'lightgreen'
          },
          {
            id: 7,
            title: 'Транспортный налог с организаций',
            plan: 261,
            fact: 260,
            color_type: 'lightgreen'
          },
          {
            id: 8,
            title: 'Земельный налог с физ. лиц',
            plan: 270,
            fact: 249,
            color_type: 'green'
          },
          {
            id: 9,
            title: 'Акцизы',
            plan: 132,
            fact: 241,
            color_type: 'red'
          },
          {
            id: 10,
            title: 'Прочие налоги с сборы',
            plan: 3,
            fact: 16,
            color_type: 'red'
          }
        ],
        region: [
          {
            id: 0,
            title: 'Недоимка',
            plan: 5411,
            fact: 8255,
            color_type: 'red'
          },
          {
            id: 1,
            title: 'В процедуре банкротства',
            plan: 3711,
            fact: 5505,
            color_type: 'lightred'
          },
          {
            id: 2,
            title: 'Приостановлено по суду',
            plan: 234,
            fact: 0.3,
            color_type: 'green'
          },
          {
            id: 3,
            title: 'Отсроченные платежи',
            plan: 129,
            fact: 0,
            color_type: 'green'
          }
        ],
        deb: [
          {
            id: 0,
            title: 'Недоимка',
            plan: 5411,
            fact: 8255,
            color_type: 'red'
          },
          {
            id: 1,
            title: 'В процедуре банкротства',
            plan: 3711,
            fact: 5505,
            color_type: 'lightred'
          },
          {
            id: 2,
            title: 'Приостановлено по суду',
            plan: 234,
            fact: 0.3,
            color_type: 'green'
          },
          {
            id: 3,
            title: 'Отсроченные платежи',
            plan: 129,
            fact: 0,
            color_type: 'green'
          }
        ],
      }
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
.header
  &__wrapper
    display: flex
    flex-direction: row
    gap: 4px
    @media screen and (max-width: 576px)
      gap: 2px
  &__switchers
    padding: 12px 24px
    background: #EAEEF2
    border-radius: 10px 10px 0 0
    font-family: Gotham Pro, sans-serif
    font-size: 18px
    font-style: normal
    font-weight: 400
    line-height: 22px
    letter-spacing: -0.5px
    @media screen and (max-width: 576px)
      padding: 4px 8px
      border-radius: 3px 3px 0 0
      font-size: 7.8px
      line-height: 9.5px
    &:hover
      cursor: pointer
.active
  background: #FFF
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.10)
  @media screen and (max-width: 576px)
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.10)
.indicators
  position: relative
  border-radius: 0 16px 16px 16px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  gap: 16px
  flex-direction: row
  flex-wrap: wrap
  padding: 16px
  background: white
  box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.20)
  @media screen and (max-width: 576px)
    border-radius: 0 5px 5px 5px
    gap: 4px
    padding: 4px
    box-shadow: 0 13px 13px 0 rgba(0, 0, 0, 0.20)
.indicator
  &__list
    &-position
      padding: 0 115px
      @media screen and (max-width: 576px)
        padding: 0 38px
.adaptive
  &_switchers
    font-size: 9.8px
    line-height: 12px
  &_indicators
    display: grid
    grid-template-columns: repeat(2, 1fr)
</style>