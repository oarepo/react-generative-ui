// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentMap, DataField, LayoutFragmentConfig, LayoutFragmentData, LayoutFragmentProps } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapValues from 'lodash/mapValues'
import React from 'react';
import { ErrorMessage } from './components';
import clsx from 'clsx';
import { GlobalDataContext } from './context';

/**
 * Uses data field configuration to query data
 * for respectful values. If no field is passed
 * it simply returns all data.
 * 
 * @param data Current Data context object
 * @param field Data fields configuration
 * @returns `props` with values resolved from DataContext
 */
export const useDataContext = (
  data?: LayoutFragmentData,
  field?: DataField,
) => {
  if (_isString(field)) {
    return _get(data, field, '');
  } else if (field?.path || field?.default) {
    return _get(data, field?.path || '', field?.default || '');
  }
  return data
};


export const useGlobalDataContext = () => {
  const context = React.useContext(GlobalDataContext)
  if (context === undefined) {
    throw new Error('useGlobalDataContext must be used within a context provider')
  }
  return context
}


export const useSeparatedItems = (
  items?: LayoutFragmentConfig[],
  separator?: string | LayoutFragmentConfig) => {

  const Item = (item: LayoutFragmentConfig, index: number) => {
    return {
      ...item,
      ...{ key: index }
    }
  }

  if (!separator) {
    return items
  }

  const Separator = (index: number) => {
    return _isString(separator)
      ? {
        config: {
          component: 'span',
          children: separator,
          className: 'oarepo-separator',
          key: `separator-${index}`
        }
      }
      : {
        config: {
          ...separator,
          className: clsx(separator.className, 'oarepo-separator'),
          key: `separator-${index}`
        }
      }
  }

  return items?.flatMap(
    (item, index, array) => (
      index !== array.length - 1
        ? [Item(item, index), Separator(index)]
        : Item(item, index)
    ))
}


export const useLayoutFragment = (
  components: ComponentMap,
  component: string,
  props: LayoutFragmentProps
) => {
  const { config } = props
  const fragmentComp = components[component]

  if (fragmentComp) {
    const CachedLayoutFragment = React.memo(fragmentComp)
    return <CachedLayoutFragment {...props} />
  } else {
    return <ErrorMessage {...config}>
      Component {component} not found
    </ErrorMessage>
  }
}
