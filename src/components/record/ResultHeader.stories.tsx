import React from 'react';
import { Meta, Story, StoryFn } from '@storybook/react';
import { ResultHeader } from './ResultHeader';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { useParameter, useState } from '@storybook/addons';
import { DataContext } from '../../context/data';
import { UIFragment } from '../../GeneratedUI/UIFragment';

const DataContextDecorator = (Story: StoryFn) => {
  const initialState = useParameter('data', {})

  const [data] = useState({ ...initialState })

  return <><DataContext.Provider value={data}><Story /></DataContext.Provider></>
}


const meta: Meta = {
  title: 'Record/Defense status',
  component: ResultHeader,
  parameters: {
    controls: { expanded: true },
  },
  decorators: [DataContextDecorator]
};

export default meta;

const Template: Story<UIFragmentContext> = (args) => <ResultHeader  {...args} />;

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
  renderUIFragment: UIFragment
};