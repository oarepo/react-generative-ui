import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List } from './List';
import 'semantic-ui-css/semantic.min.css'
import { ListLayoutConfig } from './List';
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Basic Elements/List',
  component: List,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => <List  {...args} />;

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
};

export const HorizontalDataList = Template.bind({});
HorizontalDataList.args = {
  config: {
    component: 'list',
    horizontal: true,
    dataField: 'itemValues',
  }
};


HorizontalDataList.parameters = {
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
}
CustomItemComponent.parameters = {
  data: {
    itemValues: [
      { content: 'this is data item #1', color: 'red' },
      { header: 'this is data item #2', color: 'green', size: 'large' },
      { content: 'this is data item #3' }
    ]
  }
}

export const SeparatedList = Template.bind({});
SeparatedList.args = {
  config: {
    component: 'list',
    horizontal: true,
    separator: ',',
    dataField: 'itemValues',
    item: {
      component: "span",
      "color": "blue"
    }
  } as ListLayoutConfig,
}
SeparatedList.parameters = {
  data: {
    itemValues: [
      'this is data item #1', 'this is data item #2', 'this is data item #3'
    ]
  }
}