import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { Fallback } from '../basic/Fallback';

const meta: Meta = {
  title: 'Basic Elements/Fallback',
  component: Fallback,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UIFragmentContext & { component: string }> = (args) => <Fallback {...args} />;

/** Unknown fallback */
export const Default = Template.bind({});
Default.args = {
  // @ts-ignore
  'data-component': 'unknown',
  children: ['check the browser console log by pressing F12']
}

export const Strong = Template.bind({});
Strong.args = {
  // @ts-ignore
  'data-component': 'strong',
  children: ['this is so strong']
}