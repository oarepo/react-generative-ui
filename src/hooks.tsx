// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentMap, DataField, LayoutFragmentConfig, LayoutFragmentData, LayoutFragmentProps } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapValues from 'lodash/mapValues'
import { LayoutFragment } from './GeneratedLayout';
import React from 'react';
import { ErrorMessage } from './components';
import clsx from 'clsx';

/**
 * Uses data field configuration to query data
 * for respectful values.
 *
 * If any of `props.children` or `props.content` was specified,
 * it will be replaced by resolved children data value.
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
  return null
};


export const useItems = (
  items?: LayoutFragmentConfig[] | string[],
  itemConfig?: LayoutFragmentConfig,
) => {
  return items?.map(
    (item: LayoutFragmentConfig | string) => {
      return _isString(item)
        ? {
          ...itemConfig,
          ...{ children: item },
        } as LayoutFragmentConfig : {
          ...itemConfig,
          ...item
        } as LayoutFragmentConfig
    })
}

export const useSeparatedItems = (
  items?: LayoutFragmentConfig[],
  separator?: string | LayoutFragmentConfig) => {

  const Item = (item: LayoutFragmentConfig, index: number) => {
    return LayoutFragment({
      config: {
        ...item,
        ...{ key: index }
      }
    })
  }

  if (!separator) {
    return items?.map((item, index) => Item(item, index))
  }

  const Separator = (index: number) => (
    _isString(separator)
      ? LayoutFragment({
        config: {
          component: 'span',
          children: separator,
          className: 'oarepo-separator',
          key: `separator-${index}`
        },
      })
      : LayoutFragment({
        config: {
          ...separator,
          className: clsx(separator.className, 'oarepo-separator'),
          key: `separator-${index}`
        },
      })
  )

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
