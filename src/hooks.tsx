// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DataField } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapValues from 'lodash/mapValues'

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
  data: { [key: string]: any },
  field: DataField,
) => {
  if (_isString(field)) {
    return _get(data, field, '');
  } else if (field.path || field.default) {
    return _get(data, field.path || '', field.default || '');
  }
};

