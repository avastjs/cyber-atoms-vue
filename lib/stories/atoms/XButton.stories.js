
import XButton from '../../components/atoms/XButton.vue';
export default {
  title: 'XButton',
  component: {XButton},
  argTypes: {
    label: 'String',
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { XButton },
  setup() {
    return { args };
  },
  template: '<XButton label="hello" v-bind="args" />',
});

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'XButton',
  rounded: true,
};
export const Normal = Template.bind({});
Normal.args = {
  label: 'XButton',
};