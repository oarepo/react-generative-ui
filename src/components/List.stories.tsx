import React from 'react';
import { Meta, Story, StoryFn } from '@storybook/react';
import { List } from '.';
import { UIFragmentContext } from '../types';
import 'semantic-ui-css/semantic.min.css'
import { useParameter, useState } from '@storybook/addons';
import { DataContext } from '../context/data';
import { UIFragment } from '../GeneratedUI/UIFragment';


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
export const HorizontalItemsArray = Template.bind({});

HorizontalItemsArray.args = {
  config: {
    component: 'horizontal-list',
    items: [
      { component: 'card', props: { content: 'this is item #1' } },
      { component: 'card', props: { content: 'this is item #2' } },
      { component: 'card', props: { content: 'this is item #3' } }
    ]
  }, renderUIFragment: UIFragment
};

export const HorizontalDataArray = Template.bind({});

HorizontalDataArray.args = {
  config: {
    component: 'horizontal-list',
    data: 'itemValues',
    props: {
      item: {
        component: "card",
        props: { "color": "blue" }
      }
    }
  }, renderUIFragment: UIFragment
};
HorizontalDataArray.parameters = {
  data: {
    itemValues: ['this is data item #1', 'this is data item #2', 'this is data item #3']
  }
}

export const SeparatedDataArray = Template.bind({});

SeparatedDataArray.args = {
  config: {
    component: 'horizontal-list',
    data: 'itemValues',
    props: {
      // @ts-ignore
      relaxed: 'very',
      separator: true,
      item: {
        component: "card",
        props: { "color": "blue" }
      }
    }
  }, renderUIFragment: UIFragment
};
SeparatedDataArray.parameters = {
  data: {
    itemValues: ['this is data item #1', 'this is data item #2', 'this is data item #3']
  }
}

export const VerticalDataArray = Template.bind({});

VerticalDataArray.args = {
  config: {
    component: 'list',
    data: 'itemValues',
    props: {
      item: {
        component: "card",
        props: { "color": "blue" }
      }
    }
  }, renderUIFragment: UIFragment
};
VerticalDataArray.parameters = {
  data: {
    itemValues: ['this is data item #1', 'this is data item #2', 'this is data item #3']
  }
}

