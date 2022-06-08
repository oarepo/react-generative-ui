import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ResultHeader } from './ResultHeader';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';


const meta: Meta = {
  title: 'Record/Defense status',
  component: ResultHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LayoutFragmentProps> = (args) => <ResultHeader  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  config: {
    component: 'result-header',
    title: 'Test record title',
    links: {
      self: '/test/1'
    }
  },
};
