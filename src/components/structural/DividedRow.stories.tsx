import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DividedRow } from './DividedRow';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Structural/DividedRow',
  component: DividedRow,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <DividedRow  {...args} />
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  config: {
    component: 'divided-row',
    items: [
      { component: 'label', basic: true, content: 'this is item #1' },
      { component: 'label', basic: true, content: 'this is item #2' },
      { component: 'label', basic: true, content: 'this is item #3' }
    ]
  }
}
