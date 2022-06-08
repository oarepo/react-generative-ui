// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { AllHTMLAttributes, FC, HTMLAttributes } from 'react';

export type ComponentMap = {
  [key: string]: FC<React.PropsWithChildren<LayoutFragmentContext>>;
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

export interface LayoutFragmentAttributes
  extends AllHTMLAttributes<HTMLDivElement> {}

export interface LayoutFragmentConfig {
  /** Name of UI component that should render the UI fragment */
  component: string;
  /** UI configs of items (children) contained in the UI fragment */
  items?: LayoutFragmentConfig[] | undefined;
  /** Data object holding field values to be rendered */
  data?: LayoutFragmentData;
  /**
   * Holds configuration of how the values should be
   * fetched from DataContext and where should be used
   * (either as Fragment children or in Fragment props)
   */
  dataField?: DataField;
  /** Any component-specific properties */
  [key: string]: any;
}

export type LayoutFragmentData = { [key: string]: any };

export interface LayoutGeneratorProps {
  /** UI layout configuration */
  layout: LayoutFragmentConfig[];
  /** Data object holding field values to be rendered */
  data: LayoutFragmentData;
  /** Components available to the generator */
  components: { [key: string]: Function };
}

export interface LayoutFragmentProps {
  /** Layout configuration of a fragment */
  config: LayoutFragmentConfig;
  /** Data object to be rendered by fragment */
  data?: LayoutFragmentData;
  /** Key used by React, when fragment is a part of list */
  key?: React.Key;
}
