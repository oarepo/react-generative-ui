// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { AvailableComponents } from "../context/components"
import { UIFragmentConfig } from "../types"
import _mapKeys from 'lodash/mapKeys'
import _get from 'lodash/get';


/**
 * UI fragment component redered from the given configuration
 * 
 * @param config rendering configuration of a fragment
 * @param index optional position of a fragment as a list element, used for key attribute
 * @returns UI fragment component
 */
export const UIFragment = (config: UIFragmentConfig, index?: number) => {
    const { props, component } = config

    const resolvedProps = _mapKeys(props, (_value: string, key: string) => {
        return key === 'class' ? 'className' : key
    })

    const renderContext = {
        renderUIFragment: UIFragment,
        config: { ...config, props: resolvedProps }
    }
    // TODO: cache using React memo

    if (index !== undefined) {
        return (
            <AvailableComponents.Consumer key={index}>
                {value => _get(value, component, value['_fallback'])(renderContext)}
            </AvailableComponents.Consumer>
        )
    } else {
        return (
            <AvailableComponents.Consumer>
                {value => _get(value, component, value['_fallback'])(renderContext)}
            </AvailableComponents.Consumer>
        )
    }
}
