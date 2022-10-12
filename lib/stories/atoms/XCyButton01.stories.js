
import XCyButton01 from '../../components/atoms/XCyButton01.vue';

export default {
  title: 'atoms/XCyButton01',
  component: { XCyButton01 },
  argTypes: {
  },
};

const Template = (args) => ({
  components: { XCyButton01 },
  setup() {
    return { args };
  },
  template: '<XCyButton01 v-bind="args" />',
});

const TemplateIcon = (args) => ({
  components: { XCyButton01 },
  setup() {
    return { args };
  },
  template: `
  <div style="position: relative" class="hoverExample">
    <XCyButton01 v-bind="args" />
    <img style="position: absolute;left:30px;top:10px;width: 37px" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png" />
  </div>
  `,
});

export const Normal = Template.bind({});
Normal.args = {
  width: '80px',
  height: '100%',
  glow: '#d600ff',
  glowPx: '2px',
  animation: 'pulse-animation',
  classes: [
    'cb-a-fast',
  ],
  fills: [
    "#d600ff",
    "cyan",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "cyan",
  ],
};

export const WithIcon = TemplateIcon.bind({});
WithIcon.args = {
  width: '90px',
  height: '100%',
  glowPx: '2px',
  animation: 'pulse-animation',
  classes: [
    ,,,,,
    'cb-a-fast',
  ],
  fills: [
    "cyan",
    "cyan",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "#d600ff",
    "cyan",
  ],
};

