import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GeneratedUI } from '.';
import { UIGeneratorProps } from '../types';
import 'semantic-ui-css/semantic.min.css'

const meta: Meta = {
  title: 'Generated UI',
  component: GeneratedUI,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIGeneratorProps> = (args) => <GeneratedUI {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ResultListItem = Template.bind({});
const data = require('./assets/ui-data-list-item.json')
const config = require('./assets/ui-config-list-item.json')

ResultListItem.args = { data, config };
