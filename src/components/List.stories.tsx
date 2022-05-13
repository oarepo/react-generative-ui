import React from 'react';
import { Meta, Story, StoryFn } from '@storybook/react';
import { List } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { useParameter, useState } from '@storybook/addons';
import { DataContext } from '../context/data';
import { UIFragment } from '../GeneratedUI/UIFragment';
import { ListLayoutConfig } from './List';


const DataContextDecorator = (Story: StoryFn) => {
  const initialState = useParameter('data', {})

  const [data] = useState({ ...initialState })

  return <><DataContext.Provider value={data}><Story /></DataContext.Provider></>
}

const meta: Meta = {
  title: 'Elements/List',
  component: List,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [DataContextDecorator]
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <List  {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const SimpleList = Template.bind({});
SimpleList.args = {
  config: {
    component: 'list',
    items: [
      'this is item #1',
      'this is item #2',
      'this is item #3'
    ]
  } as ListLayoutConfig,
  renderUIFragment: UIFragment
};

export const HorizontalListFromData = Template.bind({});
HorizontalListFromData.args = {
  config: {
    component: 'list',
    horizontal: true,
    dataField: 'itemValues',
  }, renderUIFragment: UIFragment
};


HorizontalListFromData.parameters = {
  data: {
    itemValues: ['this is data item #1', 'this is data item #2', 'this is data item #3']
  }
}

export const CustomItemComponent = Template.bind({});
CustomItemComponent.args = {
  config: {
    component: 'list',
    horizontal: true,
    dataField: 'itemValues',
    item: {
      component: "card",
      "color": "blue"
    }
  } as ListLayoutConfig,
  renderUIFragment: UIFragment
}
CustomItemComponent.parameters = {
  data: {
    itemValues: [
      { content: 'this is data item #1', color: 'red' },
      { header: 'this is data item #2', color: 'green', size: 'large' },
      { content: 'this is data item #3', color: 'blue' }
    ]
  }
}
