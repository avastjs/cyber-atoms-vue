<template>
  <div class="cb-svg">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" :width="width" :height="height" version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      :style="`animation: ${animation} 3s infinite;filter: drop-shadow(0px ${glowPx} ${glowPx} ${glow});`" class="main"
      viewBox="0 0 151 118" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="46.0969" y1="96.4917" x2="62.5102" y2="96.4917">
          <stop offset="0" style="stop-opacity:1; stop-color:#525252" />
          <stop offset="1" style="stop-opacity:1; stop-color:#939393" />
        </linearGradient>
        <linearGradient id="id1" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="23.3696" y1="55.2271" x2="39.7817"
          y2="55.2271">
        </linearGradient>
        <linearGradient id="id2" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="35.0089" y1="76.1167" x2="51.4196"
          y2="76.1167">
        </linearGradient>
        <linearGradient id="id3" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="40.4644" y1="86.5024" x2="56.8732"
          y2="86.5024">
        </linearGradient>
        <linearGradient id="id4" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="29.3747" y1="66.1269" x2="45.7852"
          y2="66.1269">
        </linearGradient>
        <linearGradient id="id5" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="73.8345" y1="59.1542" x2="76.8481"
          y2="59.1542">
        </linearGradient>
        <linearGradient id="id6" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="73.5814" y1="53.5099" x2="73.8664"
          y2="53.5099">
        </linearGradient>
      </defs>
      <g id="Vrstva_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_2610518112512">
          <path :class="classes[0]" :style="{'fill': fills[0]}" 
            d="M122 92l-9 0 22 -37c0,-1 0,-2 0,-3l-21 -36 10 0 22 39 -24 37zm-20 11l-28 0 4 -7 28 0 -4 7zm-39 10l-23 1 -35 -60 4 -6 6 0 -2 4c-1,1 -1,2 0,3l29 51c1,1 1,1 2,1l23 0 -4 6zm-18 -10l-28 -49 3 -6 15 0c1,0 1,-1 2,-1l17 -31 55 0 22 38 -22 38 -33 0c0,0 -1,0 -1,1l-6 10 -24 0zm0 -99l57 0 5 8 -54 0c-1,0 -2,1 -2,1l-17 31 -11 0 22 -40zm105 49l-23 -40c-1,0 -1,-1 -2,-1l-13 0 -7 -11c0,-1 -1,-1 -2,-1l-59 0c-1,0 -1,0 -2,1l-24 43 -11 0c0,0 -1,0 -1,1l-6 7c0,1 0,2 0,3l37 62c0,1 1,1 2,1l0 0 26 0c0,0 1,-1 1,-2l6 -9 31 0c1,0 2,0 2,-1l6 -10 12 0c1,0 2,0 2,-1l25 -39c1,-1 1,-2 0,-3z" />
          <path :class="classes[1]" :style="{'fill': fills[2]}"
            d="M47 93l12 0c1,0 2,1 2,1l2 3c0,1 -1,3 -2,3l-12 0c0,0 -1,-1 -1,-1l-2 -3c-1,-2 0,-3 1,-3z" />
          <path :class="classes[2]" :style="{'fill': fills[3]}"
            d="M42 83l12 0c0,0 1,1 1,1l2 3c1,1 0,3 -1,3l-12 0c-1,0 -2,-1 -2,-1l-2 -3c0,-1 1,-3 2,-3z" />
          <path :class="classes[3]" :style="{'fill': fills[4]}"
            d="M36 73l12 0c1,0 1,0 2,1l2 3c0,1 -1,2 -2,2l-12 0c0,0 -1,0 -1,0l-2 -4c-1,-1 0,-2 1,-2z" />
          <path :class="classes[4]" :style="{'fill': fills[5]}" 
            d="M31 63l12 0c0,0 1,0 1,1l2 3c1,1 0,2 -1,2l-13 0c0,0 -1,0 -1,0l-2 -4c0,-1 0,-2 2,-2z" />
          <path :class="classes[5]" :style="{'fill': fills[6]}" 
            d="M25 52l12 0c0,0 1,0 1,1l2 3c1,1 0,3 -1,3l-13 0c0,0 -1,-1 -1,-1l-2 -4c0,-1 0,-2 2,-2z" />
        </g>
      </g>
    </svg>

  </div>

</template>

<script lang="ts">
import { PropType } from 'vue';
import { MultiFill } from '../../types';

export default {
  props: {
    width: {
      type: String,
      default: '230px',
    },
    height: {
      type: String,
      default: '183px',
    },
    animation: {
      type: String,
      default: '',
    },
    glow: {
      type: String,
      default: '',
    },
    glowPx: {
      type: String,
      default: '',
    },
    fills: {
      type: Object as PropType<MultiFill>,
      default: [],
    },
    classes: {
      type: Object as PropType<MultiFill>,
      default: [],
    }
  },
  components: {
  },

  setup(props: any, { emit }: any) {
    return {

    }
  },
};
</script>