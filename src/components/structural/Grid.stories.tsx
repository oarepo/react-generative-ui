import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid } from './Grid';
import { UIFragmentContext } from '../../types';
import 'semantic-ui-css/semantic.min.css'
import { UIFragment } from '../../GeneratedUI';
import _times from 'lodash/times'

const meta: Meta = {
  title: 'Structural/Grid/Grid',
  component: Grid,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<UIFragmentContext> = (args) => <Grid {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const WithTwoColumns = Template.bind({});

WithTwoColumns.args = {
  config: {
    'component': 'grid',
    'columnsPerRow': 3,
    'className': 'demo',
    'columns': [
      {
        'component': 'column',
        'items': [
          { component: 'h1', children: 'Column #1' },
          ...(_times(10, () => ({ component: 'placeholder' })))
        ]
      },
      {
        'component': 'column',
        'items': [
          { component: 'h1', children: 'Column #2' },
          ...(_times(5, () => ({ component: 'placeholder' })))
        ]
      },
      {
        component: 'h1',
        children: 'Implicit column #3'
      },
    ]
  }, renderUIFragment: UIFragment
};

export const WithTwoRows = Template.bind({});
WithTwoRows.args = {
  config: {
    "component": "grid",
    "rows": [
      {
        "columns": [
          ...(_times(5, () => ({ component: 'placeholder' })))
        ]
      },
      {
        "columns": [
          {
            "className": "one wide",
            "items": [
              { "component": "placeholder" }
            ]
          },
          { "component": "placeholder" },
          { "component": "placeholder" }
        ]
      }
    ]
  }, renderUIFragment: UIFragment
};