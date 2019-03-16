<template>
  <button class="g-button" :class="`icon-${iconPositon}`" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="icon loading" v-if="loading" :name="loading"></g-icon>
    <div class="content">
      <slot>
      </slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon.vue'
export default {
  name: "g-button",
  components: {
    "g-icon": Icon
  },
  props:{
    icon:{
      type:String,
      default:'setting'
    },
    loading:{
      type:Boolean,
      default:false
    },
    iconPositon:{
      type:String,
      default: "right",
      validator(value){
        return value === 'left' || value === "right"
      }
    }
  }
}
</script>

<style lang='scss' scoped>
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
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .g-button{
    border: 1px solid $orangeSSS ;
    border-radius: $border-radius;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5em 2em;
    vertical-align: center;
    transition: all 0.3s;
    outline: none;
    &:hover{
      border-color: $orangeSS;
      border: 1px solid transparent;
      background-color: $orangeSS;
    }
    &:active{
      color: white;
    }
    &.icon-left{
      >.icon{
        order: 0;
        margin-right: 0.5em;
      }

    }
    &.icon-right{
      >.icon{
        order: 1;
        margin-left: 0.5em;

      }
    }

  }

</style>
