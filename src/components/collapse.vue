<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "GuluCollapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array,
      }
    },
    data () {
      return {
        eventBus: new Vue(),
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {

      this.eventBus.$emit('update:selected', this.selected)

      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })

      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy)
      })
    }
  }
</script>

<style scoped lang="scss">
  $orangeS:#FFF8E7;
  $orangeSS:#FFE29D;
  $orangeSSS:#FFCF5C;
  $neutral:#ffffff;
  $neutralS:#F7F5F9;
  $neutralSS:#ECE9F1;
  $neutralSSS:#D0C9D6;
  $neutralSSSS:#3F3356;
  $neutralSSSSS:#1A051D;
  $border-color:#6979F8;
  $border-radius:6px;

  $grey: $orangeS;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
