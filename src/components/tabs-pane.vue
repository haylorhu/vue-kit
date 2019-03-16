<template>
    <div class="tabs-head">
      <div class="tabs-pane"  v-if="active">
        <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-pane",
      data () {
        return {
          active: false
        }
      },
      props: {
        name: {
          type: String | Number,
          required: true
        }
      },
      inject:['eventBus'],
      created () {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    }
</script>

<style lang='scss' scoped>
  .tabs-pane {
    padding: 1em;
    &.active {
    }
  }
</style>
