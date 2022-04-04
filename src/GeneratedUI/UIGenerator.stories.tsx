import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GeneratedUI } from '.';
import { UIGeneratorProps } from '../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'UI Generator',
  component: GeneratedUI,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UIGeneratorProps> = (args, { loaded: { data, config } }) => <GeneratedUI {...args} data={data} config={config} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.loaders = [
  async () => ({
    data: await (await import('./assets/ui-data-list-item.json')).default,
    config: await (await import('./assets/ui-config-list-item.json')).default
  })
]

Default.args = {};
