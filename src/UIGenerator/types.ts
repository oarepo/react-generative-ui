// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { AllHTMLAttributes, HTMLAttributes } from 'react';

export type ComponentMap = {
  [key: string]: Function;
};

export interface UIFragmentProps extends AllHTMLAttributes<HTMLDivElement> {
  /** Context path to data rendered by the UI fragment */
  data?: string | undefined;
}

export interface UIListFragmentProps extends UIFragmentProps {
  /** List item separator - either a registered component or a string */
  separator?: string | undefined;
  /** UI fragment config used to render list items */
  item: UIFragmentConfig;
}

export type AllUIFragmentProps = UIFragmentProps & UIListFragmentProps;

export interface UIFragmentConfig {
  /** Name of UI component that should render the UI fragment */
  component: string;
  /** UI configs of items (children) contained in the UI fragment */
  items?: UIFragmentConfig[] | undefined;
  /** Props to be passed to the component rendering the UI fragment */
  props?: AllUIFragmentProps;
}

export type UIFragmentContext = {
  /** Function to render children UI fragments */
  renderUIFragment: Function;
  /** UI fragment config */
  config: UIFragmentConfig;
};

export interface UIGeneratorProps extends HTMLAttributes<HTMLDivElement> {
  /** UI view configuration */
  config: UIFragmentConfig[];
  /** Components available to the generator */
  components: { [key: string]: Function };
}
