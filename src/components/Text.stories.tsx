import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../GeneratedUI';

const meta: Meta = {
  title: 'Layout/Row',
  component: Row,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Row  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
const config = {
  component: 'row',
  items: [
    { component: 'label', props: { basic: true, content: 'this is item #1' } },
    { component: 'label', 'props': { basic: true, content: 'this is item #2' } },
    { component: 'label', 'props': { basic: true, content: 'this is item #3' } }
  ]
}

// @ts-ignore 2322
Default.args = { config, renderUIFragment: UIFragment };


export const CustomSeparator = Template.bind({});
// @ts-ignore 2322
CustomSeparator.args = {
  ...Default.args,
  ...{
    config: {
      ...Default.args.config,
      ...{
        props: {
          separator: ' || '
        }
      }
    }
  }
}