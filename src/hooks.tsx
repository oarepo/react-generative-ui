// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment, useContext } from 'react';

import { AvailableComponents, DataContext } from './context';
import { AllUIFragmentProps, DataField, UIFragmentConfig } from './types';

import _get from 'lodash/get';
import _isString from 'lodash/isString';
import _mapKeys from 'lodash/mapKeys'
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
    const dataContext = useContext(DataContext);

    if (_isString(field)) {
      return _get(dataContext, field, '');
    } else if (field.path || field.default) {
      return _get(dataContext, field.path || '', field.default || '');
    }
  }

  const childrenData = _getData(data)
  const propsData = !_isString(data) ? _mapValues(data.props, (o: DataField) => _getData(o)) : {}

  return { childrenData, propsData }
};

/**
 * Resolves any prop values using data field configuration and DataContext
 * 
 * If any of `props.children` or `props.content` was specified,
 * it will be replaced by resolved children data value.
 * 
 * @param data Data fields configuration
 * @param props Current component props
 * @returns `props` with values resolved from DataContext
 */
export const useResolvedDataProps = (
  data?: DataField,
  props?: AllUIFragmentProps
) => {
  if (data) {
    const { childrenData, propsData } = useData(data);
    const resolvedProps = {
      ...props,
      ...propsData,
    };
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


/**
 * Returns an UI fragment corresponding to the given configuration
 * 
 * @param config rendering configuration of a fragment
 * @param index optional position of a fragment as a list element, used for key attribute
 * @returns UI fragment component
 */
export const useUIFragment = (config: UIFragmentConfig, index?: number) => {
  const { props, component } = config
  const components = useContext(AvailableComponents)

  const resolvedProps = _mapKeys(props, (_value: string, key: string) => {
    return key === 'class' ? 'className' : key
  })

  const renderContext = {
    renderUIFragment: useUIFragment,
    config: { ...config, props: resolvedProps }
  }

  const UIFragmentComponent = _get(components, component, components['_fallback'])

  if (index !== undefined) {
    return <Fragment key={index}>{UIFragmentComponent(renderContext)}</Fragment>
  } else {
    return <>{UIFragmentComponent(renderContext)}</>
  }
}
