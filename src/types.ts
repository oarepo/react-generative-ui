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
    };

export interface UIFragmentProps extends AllHTMLAttributes<HTMLDivElement> {}

export interface UILayoutConfig {
  /** Name of UI component that should render the UI fragment */
  component: string;
  /** UI configs of items (children) contained in the UI fragment */
  items?: UILayoutConfig[] | undefined;
  /**
   * Holds configuration of how the values should be
   * fetched from DataContext and where should be used
   * (either as Fragment children or in Fragment props)
   */
  dataField?: DataField;
  /** Any component-specific properties */
  [key: string]: any;
}

export type UIFragmentContext = {
  /** Function to render children UI fragments */
  renderUIFragment: Function;
  /** UI fragment config */
  config: UILayoutConfig;
};

export interface UIGeneratorProps extends HTMLAttributes<HTMLDivElement> {
  /** UI view configuration */
  layout: UILayoutConfig[];
  /** Data object holding field values to be rendered */
  data: { [key: string]: any };
  /** Components available to the generator */
  components: { [key: string]: Function };
}
