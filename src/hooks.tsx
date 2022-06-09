// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentMap, DataField, LayoutFragmentConfig, LayoutFragmentData } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapValues from 'lodash/mapValues'
import { LayoutFragment } from './GeneratedLayout';
import React from 'react';

/**
 * Uses data field configuration to query DataContext
 * for respectful values.
 *
 * If any of `props.children` or `props.content` was specified,
 * it will be replaced by resolved children data value.
 * 
 * @param data Current Data context object
 * @param field Data fields configuration
 * @returns `props` with values resolved from DataContext
 */
export const useResolvedData = (
  data: LayoutFragmentData,
  field: DataField,
) => {
  if (_isString(field)) {
    return _get(data, field, '');
  } else if (field.path || field.default) {
    return _get(data, field.path || '', field.default || '');
  }
};


export const useSeparatedItems = (
  items?: LayoutFragmentConfig[],
  separator?: string | LayoutFragmentConfig) => {

  const Item = (item: LayoutFragmentConfig, index: number) => {
    const { config: itemConfig, data: itemData } = item

    return LayoutFragment({
      config: {
        ...itemConfig,
        ...{ key: index }
      },
      data: itemData
    })
  }

  if (!separator) {
    return items?.map((item, index) => Item(item, index))
  }

  const Separator = (index: number) => (
    _isString(separator)
      ? LayoutFragment({
        config: {
          component: 'raw',
          children: separator,
          key: `separator-${index}`
        },
      })
      : LayoutFragment({
        config: {
          ...separator,
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


export const useLayoutFragment = (components: ComponentMap, component: string, props: any) => {
  const CachedFragment = React.memo(components[component])
  return <CachedFragment {...props} />
}