import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Column } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../GeneratedUI';

const meta: Meta = {
  title: 'Structural/Column',
  component: Column,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Column  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
const config = {
  component: 'column',
  stretched: true,
  items: [
    { component: 'placeholder' },
    { component: 'placeholder' },
    { component: 'placeholder' },
  ]
}

// @ts-ignore 2322
Default.args = { config, renderUIFragment: UIFragment };
