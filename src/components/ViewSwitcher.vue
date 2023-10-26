<template>
  <div class="view-switcher__position">
    <div class="view-switcher">
      <div
          v-for="item in views"
          :key="item.id"
          class="switcher-item"
          :class="{'active': activeView === item.value}"
          @click="switchView(item.value)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ViewSwitcher",
  data () {
    return {
      activeView: 'simpleMail',
      views: [
        {
          id: 0,
          name: 'Письмо',
          value: 'simpleMail'
        },
        {
          id: 1,
          name: 'Адаптивное письмо',
          value: 'adaptiveMail'
        }
      ],
    }
  },
  methods: {
    switchView (value) {
      this.activeView = value
      this.$emit('viewType', this.activeView)
    }
  }
})
</script>

<style scoped lang="sass">
.view-switcher
  display: flex
  flex-direction: row
  padding: 4px
  background: #e9e9ec
  width: fit-content
  border-radius: 8px
  &__position
    display: flex
    justify-content: center
.switcher-item
  font-family: Gotham Pro, sans-serif
  font-weight: 500
  font-size: 10px
  padding: 8px
  background: #e9e9ec
  color: #2b3949
  border-radius: 8px
.active
  background: #2b3949
  color: white
</style>