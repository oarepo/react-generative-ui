import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Column } from './Column';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../../GeneratedUI';
import { Grid } from 'semantic-ui-react';

const meta: Meta = {
  title: 'Structural/Grid/Column',
  component: Column,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Grid><Column  {...args} /></Grid>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
const config = {
  component: 'column',
  stretched: true,
  items: [
    { component: 'label', basic: true, content: 'this is item #1' },
    { component: 'label', basic: true, content: 'this is item #2' },
    { component: 'label', basic: true, content: 'this is item #3' },
  ]
}

// @ts-ignore 2322
Default.args = { config, renderUIFragment: UIFragment };
