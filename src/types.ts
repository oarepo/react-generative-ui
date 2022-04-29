// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { AllHTMLAttributes, FC, HTMLAttributes } from 'react';

export type ComponentMap = {
  [key: string]: FC<UIFragmentContext>;
};

/** Field with its value fetched from DataContext */
export type DataField =
  | string
  | {
      /** Dot-delimited path to a data field in a data context */
      path?: string;
      /** Default value if path is non-existent in a data context */
      default?: any;
      /** Component props with values to be resolved from data context */
      props?: { [key: string]: DataField };
    };

export interface UIFragmentProps extends AllHTMLAttributes<HTMLDivElement> {}

export interface UIListFragmentProps extends UIFragmentProps {
  /** List item separator - either a registered component or a string */
  separator?: string | boolean | undefined;
  /** UI fragment config used to render list items */
  item?: UIFragmentConfig;
}

export type AllUIFragmentProps = UIFragmentProps & UIListFragmentProps;

export interface UIFragmentConfig {
  /** Name of UI component that should render the UI fragment */
  component: string;
  /** UI configs of items (children) contained in the UI fragment */
  items?: UIFragmentConfig[] | undefined;
  /** Props to be passed to the component rendering the UI fragment */
  props?: AllUIFragmentProps;
  /**
   * Holds configuration of how the values should be
   * fetched from DataContext and where should be used
   * (either as Fragment children or in Fragment props)
   */
  data?: DataField;
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
  /** Data object holding field values to be rendered */
  data: { [key: string]: any };
  /** Components available to the generator */
  components: { [key: string]: Function };
}
