
import XEnergy01 from '../../components/atoms/XEnergy01.vue';

export default {
  title: 'atoms/XEnergy01',
  component: { XEnergy01 },
  argTypes: {
  },
};

const Template = (args) => ({
  components: { XEnergy01 },
  setup() {
    return { args };
  },
  template: '<XEnergy01 v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  width: '480px',
  height: '100%',
  glow: '#d600ff',
  glowPx: '2px',
  animation: 'pulse-animation',
  classes: [
    , , ,
    , ,
    'cb-a-fast',
    , , , , , ,
    'cb-a-fast',
  ],
  fills: [
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "#bd00ff",
    "#bd00ff",
    "#bd00ff",
    "#bd00ff",
    "#bd00ff",
    "#bd00ff",
    "#bd00ff",
    "#bd00ff",
    "#fcec0c",
    "#fcec0c",
    "#fcec0c",
    "#fcec0c",
    "#978d01",
    "#978d01",
    "#978d01",
    "#978d01",
    "#978d01",
    "#978d01",
    "#978d01",
    "yellowgreen"
  ],
};
