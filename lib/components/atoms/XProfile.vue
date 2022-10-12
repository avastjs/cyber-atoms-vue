<template>
  <div class="cb-svg">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" :width="width" :height="height" version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      :style="`animation: ${animation} 3s infinite;filter: drop-shadow(0px ${glowPx} ${glowPx} ${glow});`"
      class="main"
      viewBox="0 0 182 52" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="20.1564" y1="3.8558" x2="20.1564" y2="34.3556">
          <stop offset="0" style="stop-opacity:1; stop-color:#939393" />
          <stop offset="1" style="stop-opacity:1; stop-color:#525252" />
        </linearGradient>
        <linearGradient id="id1" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="91.0058" y1="14.0552" x2="91.0058"
          y2="38.0013">
        </linearGradient>
      </defs>
      <g id="Vrstva_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_2646562105920">
          <path :style="{'fill': fills[0]}" class="fil0" d="M51 26l-11 14 -13 0c6,-2 12,-7 14,-14l10 0z" />
          <path :style="{'fill': fills[1]}" class="fil9" d="M35 19c0,-8 -6,-15 -15,-15 -8,0 -15,7 -15,15 0,9 7,15 15,15 9,0 15,-6 15,-15z" />
          <path :style="{'fill': fills[2]}" class="fil10"
            d="M3 19c0,-10 7,-17 17,-17 10,0 18,7 18,17 0,10 -8,18 -18,18 -10,0 -17,-8 -17,-18zm175 5l-16 19 -138 0c-2,0 -3,-3 -2,-4 1,-1 1,-1 2,-1 7,-2 13,-8 15,-15l139 1zm-9 26l9 -12c1,-1 1,-2 1,-3l0 -8c0,-1 1,-2 1,-3l2 -1c0,0 0,-1 0,-1 0,0 0,-1 -1,-1l-142 0c0,0 0,-1 0,-2 0,0 0,-1 0,-1l75 0c2,0 4,-2 4,-4 0,-2 -1,-4 -4,-4l-77 0c-4,-6 -10,-10 -17,-10 -10,0 -18,8 -19,18 0,7 3,12 7,16l-8 10c0,0 0,0 0,0 0,0 0,0 0,1 0,0 1,0 1,0l128 0c2,0 4,1 5,2l4 4c1,1 2,1 3,1l24 0c1,0 3,-1 4,-2z" />
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
