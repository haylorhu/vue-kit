<template>
    <div class="tabs-item" @click="onclick" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabsItem",
        inject:['eventBus'],
        data(){
          return {
            active:false
          }
        },
        props:{
          disabled:{
            type: Boolean,
            default: false
          },
          name: {
            type: String | Number,
            required: true
          }
        },
      created() {
          if(this.eventBus){
            this.eventBus.$on("update:selected",(name)=>{
              this.active = name === this.name
            })
          }
      },
      methods:{
        onclick(){
            if (this.disabled){return}
            this.eventBus && this.eventBus.$emit("update:selected",this.name,this)
            this.$emit('click',this)
          }
      }
    }
</script>

<style lang='scss' scoped>
  $blue: blue;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
