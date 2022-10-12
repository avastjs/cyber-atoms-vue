<template>
  <div class="cb-svg">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" :width="width" :height="height" version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      :style="`animation: ${animation} 3s infinite;filter: drop-shadow(0px ${glowPx} ${glowPx} ${glow});`"
      class="main" viewBox="0 0 1522 523" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Vrstva_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_2646644386976">
          <polygon :style="{'fill': fills[0]}" :class="classes[0]"
            points="492,185 415,262 369,262 428,203 446,185 428,167 369,108 415,108 " />
          <polygon :style="{'fill': fills[1]}" :class="classes[1]" points="441,108 518,185 441,262 492,262 569,185 492,108 " />
          <polygon :style="{'fill': fills[2]}" :class="classes[2]" points="518,108 594,185 518,262 569,262 646,185 569,108 " />
          <polygon :style="{'fill': fills[3]}" :class="classes[3]" points="594,108 671,185 594,262 646,262 722,185 646,108 " />
          <polygon :style="{'fill': fills[4]}" :class="classes[4]" points="671,108 748,185 671,262 722,262 799,185 722,108 " />
          <polygon :style="{'fill': fills[5]}" :class="classes[5]" points="748,108 825,185 748,262 799,262 876,185 799,108 " />
          <polygon :style="{'fill': fills[6]}" :class="classes[6]" points="825,108 902,185 825,262 876,262 953,185 876,108 " />
          <polygon :style="{'fill': fills[7]}" :class="classes[7]"
            points="902,108 979,185 902,262 953,262 1030,185 953,108 " />
          <polygon :style="{'fill': fills[8]}" :class="classes[8]"
            points="979,108 1055,185 979,262 1030,262 1107,185 1030,108 " />
          <polygon :style="{'fill': fills[9]}" :class="classes[9]"
            points="1055,108 1132,185 1055,262 1107,262 1183,185 1107,108 " />
          <polygon :style="{'fill': fills[10]}" :class="classes[10]"
            points="1132,108 1209,185 1132,262 1183,262 1260,185 1183,108 " />
          <polygon :style="{'fill': fills[11]}" :class="classes[11]"
            points="1209,108 1286,185 1209,262 1260,262 1337,185 1260,108 " />
          <polygon :style="{'fill': fills[12]}" :class="classes[12]"
            points="1286,108 1363,185 1286,262 1337,262 1414,185 1337,108 " />
          <polygon :style="{'fill': fills[13]}" :class="classes[13]"
            points="1363,108 1439,185 1363,262 1414,262 1491,185 1414,108 " />
          <polygon :style="{'fill': fills[14]}" class="fil0" points="1491,108 1439,108 1491,159 " />
          <polygon :style="{'fill': fills[15]}" class="fil0" points="1491,210 1439,262 1491,262 " />
          <polygon :style="{'fill': fills[16]}" class="fil1"
            points="1522,77 1522,293 338,293 349,282 1511,282 1511,88 349,88 338,77 " />
          <path class="fil1" :style="{'fill': fills[17]}"
            d="M287 267l-82 -82 82 -83 82 83 -82 82zm0 -205l-122 123 122 122 26 -25 97 -97 -123 -123z" />
          <polygon :style="{'fill': fills[18]}" class="fil2"
            points="141,185 214,112 208,105 147,167 128,185 147,203 237,294 244,287 " />
          <path :style="{'fill': fills[19]}" class="fil0"
            d="M1002 26l-154 0 -25 25 -395 0 41 -40 548 0 -15 15zm-538 -26l-62 62 425 0 26 -25 153 0 37 -37 -579 0z" />
          <polygon :style="{'fill': fills[20]}" class="fil1" points="1277,51 862,51 826,88 1313,88 " />
          <polygon :style="{'fill': fills[21]}" class="fil0"
            points="659,307 622,344 494,344 443,395 223,395 281,337 310,307 " />
          <polygon :style="{'fill': fills[22]}" class="fil1"
            points="470,395 499,366 645,366 704,307 1172,307 1143,337 704,337 645,395 " />
          <path :style="{'fill': fills[23]}" class="fil1"
            d="M244 287l-7 7 -158 158 -4 4c-3,-3 -5,-5 -8,-8l161 -161 -102 -102 80 -81 8 8 -73 73 103 102z" />
          <path :style="{'fill': fills[24]}" class="fil1"
            d="M44 518c-21,0 -39,-18 -39,-39 0,-21 18,-38 39,-38 9,0 17,3 23,7 3,3 5,5 8,8 4,7 7,15 7,23 0,21 -17,39 -38,39zm35 -66c-3,-3 -5,-5 -8,-7 -8,-6 -17,-10 -27,-10 -24,0 -44,20 -44,44 0,24 20,44 44,44 24,0 44,-20 44,-44 0,-10 -4,-19 -9,-27z" />
          <path :style="{'fill': fills[25]}" class="fil0"
            d="M44 463c-9,0 -16,7 -16,16 0,9 7,16 16,16 9,0 16,-7 16,-16 0,-9 -7,-16 -16,-16z" />
          <polygon :style="{'fill': fills[26]}" class="fil0" points="287,139 241,185 287,231 333,185 " />
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

<style scoped>
.fil0 {
  fill: #252626;
  fill-rule: nonzero
}

.fil1 {
  fill: #767676;
  fill-rule: nonzero
}

.fil2 {
  fill: white;
  fill-rule: nonzero
}

.main {
  left: 10px;
  top: 10px;
}

</style>