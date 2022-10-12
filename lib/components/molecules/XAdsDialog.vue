<template>
  <div class="dialog" >
    <span class="text" >
      <slot />
    </span>
    <XAds v-bind="args" />
  </div>

</template>

<script lang="ts">
import XAds from "../atoms/XAds.vue"

export default {
  props: {
  },
  components: {
    XAds
  },

  setup(props: any, { emit }: any) {
    // TODO create more props for options/colors
    const args = {
      width: '100%',
      height: '100%',
      animation: 'pulse-animation',
      fills: [
        "#00ff9f",
        "#00ff9f",
        "#00ff9f",
        "#001eff",
        "#d600ff",
        "#00ff9f",
        "#00ff9f",
        "#d600ff",
        "#00ff9f",
        "#00ff9f",
        "#00ff9f"
      ],
    }
    return {
      args
    }
  },
};
</script>
<style scoped>
.dialog {
  position: relative;
  width: 500px;
  cursor: pointer
}

.text {
  z-index: 1;
  color: white;
  position: absolute;
  left: 50px;
  top: 50px;
  font-size: 32px;
  padding: 20px;
}

.dialog:hover :deep(.main) {
  /*
pass this to the molecuels, since the hover is not ok w text
  */
  animation-duration: .8s !important;
}
</style>
