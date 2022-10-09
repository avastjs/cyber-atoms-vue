
import XAdsDialog from '../../components/molecules/XAdsDialog.vue';

export default {
  title: 'molecules/XAdsDialog',
  component: {XAdsDialog},
  argTypes: {
  },
};

const Template = (args) => ({
  components: { XAdsDialog },
  setup() {
    return { args };
  },
  template: `<XAdsDialog v-bind="args" >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </XAdsDialog>
  `,
});

export const Normal = Template.bind({});
Normal.args = {
};
