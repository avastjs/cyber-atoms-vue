
import XAds from '../../components/atoms/XAds.vue';

export default {
  title: 'atoms/XAds',
  component: {XAds},
  argTypes: {
  },
};

const Template = (args) => ({
  components: { XAds },
  setup() {
    return { args };
  },
  template: '<XAds v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  animation: 'pulse-animation',
  fills: [
    "white",
    "#1bfdff",
    "#1bfdff",
    "#1bfdff",
    "white",
    "#1bfdff",
    "yellow",
    "#1bfdff",
    "#1bfdff",
    "#1bfdff",
    "#1bfdff"
  ],
  glow: "#38d0da"
};

export const Small = Template.bind({});
Small.args = {
  width: '80px',
  height: '50px',
  animation: 'pulse-animation',
  fills: [
    "white",
    "#1bfdff",
    "#1bfdff",
    "#1bfdff",
    "white",
    "#1bfdff",
    "yellow",
    "#1bfdff",
    "#1bfdff",
    "#1bfdff",
    "#1bfdff"
  ],
  glow: "#38d0da"
};