
import XProfile from '../../components/atoms/XProfile.vue';

export default {
  title: 'atoms/XProfile',
  component: { XProfile },
  argTypes: {
  },
};

const Template = (args) => ({
  components: { XProfile },
  setup() {
    return { args };
  },
  template: '<XProfile v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  width: '480px',
  height: '100%',
  animation: 'pulse-animation',
  classes: [
    , , ,
    , ,
    'cb-a-fast',
    , , , , , ,
    'cb-a-fast',
  ],
  fills: [
    "#bd00ff",
    "#fcec0c",
    "#978d01",
  ],
};

export const VuejsProfile = Template.bind({});
VuejsProfile.args = {
  width: '280px',
  height: '100%',
  animation: 'pulse-animation',
  classes: [
    , , ,
    , ,
    'cb-a-fast',
    , , , , , ,
    'cb-a-fast',
  ],
  fills: [
    "#41b883",
    "#41b883",
    "#354a5e",
  ],
};

export const AngularProfile = Template.bind({});
AngularProfile.args = {
  width: '280px',
  height: '100%',
  animation: 'pulse-animation',
  classes: [
    , , ,
    , ,
    'cb-a-fast',
    , , , , , ,
    'cb-a-fast',
  ],
  fills: [
    "white",
    "#303030",
    "#c31c2f",
  ],
};

export const ReactProfile = Template.bind({});
ReactProfile.args = {
  width: '280px',
  height: '100%',
  animation: 'pulse-animation',
  classes: [
    , , ,
    , ,
    'cb-a-fast',
    , , , , , ,
    'cb-a-fast',
  ],
  fills: [
    "#20232a",
    "#20232a",
    "#61dbfb",
  ],
};



