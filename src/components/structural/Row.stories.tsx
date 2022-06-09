import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Row } from './Row';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import { LayoutFragmentProps } from '../../types';

const meta: Meta = {
  title: 'Structural/Grid/Row',
  component: Row,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<LayoutFragmentProps> = (args) => (
  <Grid>
    <Row  {...args} />
  </Grid>
)
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
const config = {
  component: 'row',
  columnsPerRow: 10,
  columns: [
    { component: 'label', basic: true, content: 'this is item #1' },
    { component: 'label', basic: true, content: 'this is item #2' },
    { component: 'label', basic: true, content: 'this is item #3' }
  ]
}

Default.args = { config };
