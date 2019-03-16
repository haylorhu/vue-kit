<template>
  <div class="input">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           :class="{error:error}"
    >
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      "g-icon": Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String,
        default:""
      },
    },
  };
</script>
<style lang='scss' scoped>
  $input-border-color: #979797;
  $orangeS: #FFF8E7;
  $orangeSS: #FFE29D;
  $orangeSSS: #FFCF5C;
  $neutral: #ffffff;
  $neutralS: #F7F5F9;
  $neutralSS: #ECE9F1;
  $neutralSSS: #D0C9D6;
  $neutralSSSS: #3F3356;
  $neutralSSSSS: #1A051D;
  $border-color: #6979F8;
  $border-radius: 6px;
  $error-red:#FF647C;
  .input {
    align-items: center;
    > input {
      outline: none;
      padding: 0.5em 2em;
      border: 1px solid $input-border-color;
      border-radius: $border-radius;
      transition: all 0.3s;

      &:hover {
        border-color: $orangeSS;
      }

      &:focus {
        border-color: $orangeSSS;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
     &.error{
      border-color: $error-red;
    }
    }
    .icon-error{
      color: $error-red;
    }
    .errorMessage{
      color: $error-red;
    }

  }
</style>

