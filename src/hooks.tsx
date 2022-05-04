// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react';

import { DataContext } from './context/data';
import { DataField, UIFragmentProps } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapValues from 'lodash/mapValues'


/**
 * Uses data field configuration to query DataContext
 * for respectful values.
 *
 * @param data Data fields configuration
 * @returns main value of children content + any props with its data values
 */
export const useData = (data: DataField) => {
  const _getData = (field: DataField) => {
    const dataContext = React.useContext(DataContext);
    if (_isString(field)) {
      return _get(dataContext, field, '');
    } else if (field.path || field.default) {
      return _get(dataContext, field.path || '', field.default || '');
    }
  }

  const childrenData = _getData(data)

  return { childrenData }
};

/**
 * Resolves any prop values using data field configuration and DataContext
 * 
 * If any of `props.children` or `props.content` was specified,
 * it will be replaced by resolved children data value.
 * 
 * @param field Data fields configuration
 * @param props Current component props
 * @returns `props` with values resolved from DataContext
 */
export const useResolvedDataProps = (
  field?: DataField,
  props?: UIFragmentProps
) => {
  if (field) {
    const { childrenData } = useData(field);
    const resolvedProps = {
      ...props,
    } as UIFragmentProps;
    if (childrenData && (props && props.children)) {
      resolvedProps.children = childrenData;
    } else if (childrenData && (props && props.content)) {
      resolvedProps.content = childrenData;
    } else if (childrenData) {
      resolvedProps.children = childrenData
    }
    return resolvedProps;
  }
  return props;
};

