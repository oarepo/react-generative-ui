import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SemanticFallback } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../GeneratedUI';

const meta: Meta = {
  title: 'Elements/SemanticFallback',
  component: SemanticFallback,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <SemanticFallback  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Icon = Template.bind({});
Icon.args = {
  config: {
    component: 'icon',
    props: {
      name: 'hand victory'
    }
  }, renderUIFragment: UIFragment
};

export const List = Template.bind({});

// @ts-ignore 2322
List.args = {
  config: {
    component: 'list',
    props: {
      // @ts-ignore
      ordered: true,
      // @ts-ignore
      items: ['item #1', 'item #2', 'item #3']
    }
  }, renderUIFragment: UIFragment
};

/** Unknown fallback */
export const Unknown = Template.bind({});
Unknown.args = {
  config: {
    component: 'deathstar'
  }
}
