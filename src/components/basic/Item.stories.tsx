import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item, ItemLayoutConfig } from '..';
import 'semantic-ui-css/semantic.min.css'
import { LayoutFragmentProps } from '../../types';


const meta: Meta = {
  title: 'Basic Elements/Item',
  component: Item,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <Item  {...args} />;

export const SimpleHeader = Template.bind({});

SimpleHeader.args = {
  config: {
    component: 'item',
    header: {
      content: {
        component: 'placeholder',
      }
    }
  } as ItemLayoutConfig
};