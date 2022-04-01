import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UIGenerator } from '.';
import { UIGeneratorProps } from './types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'UI Generator',
  component: UIGenerator,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UIGeneratorProps> = (args, { loaded: { config } }) => <UIGenerator {...args} config={config} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.loaders = [
  async () => ({
    config: await (await import('./assets/ui-config.json')).default
  })
]

Default.args = {};
