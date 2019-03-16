<template>
  <div class="wrapper">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]">
        </div>
      </div>
      <div class="line" ref="line">
          <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 50,
        validator(value) {
          return value === false || typeof value === 'number'
        }
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      positon: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    methods: {
      updateStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      execAutoClose() {
        console.log('clos')
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },    close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }


      }
    },

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
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: $orangeSSS;
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0; }
    100% {opacity: 1;}
  }
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    $animation-duration: 300ms;
    &.position-top {
      top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom {
      bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-middle {
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }
  .toast {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    display: flex;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3); padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      text-align: center;
    }
    .line {
      height: 100%;
      border-left: 1px solid $neutral;
      margin-left: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
