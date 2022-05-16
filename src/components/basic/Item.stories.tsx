import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item, ItemLayoutConfig } from '..';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../../GeneratedUI';


const meta: Meta = {
  title: 'Views/Item',
  component: Item,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Item  {...args} />;

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
  , renderUIFragment: UIFragment
};