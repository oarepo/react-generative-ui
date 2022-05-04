// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { AvailableComponents } from "../context/components"
import { ComponentMap, UILayoutConfig } from "../types"
import _mapKeys from 'lodash/mapKeys'
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty'

/**
 * UI fragment component redered from the given configuration
 * 
 * @param config rendering configuration of a fragment
 * @param index optional position of a fragment as a list element, used for key attribute
 * @returns UI fragment component
 */
export const UIFragment = (config: UILayoutConfig, index?: number) => {
    const { component, ...props } = config

    const resolvedProps = _mapKeys(props, (_value: string, key: string) => {
        return key === 'class' ? 'className' : key
    })

    const renderContext = {
        renderUIFragment: UIFragment,
        config: { ...config, ...resolvedProps }
    }

    console.log('ctx', renderContext, resolvedProps)

    const fragmentComponent = (components: ComponentMap, component: string, context: any) => {
        const comp = _get(components, component, components['_fallback'])

        const CachedFragment = React.memo(comp)
        return <CachedFragment {...context} />
    }

    return (
        <AvailableComponents.Consumer {...(index != null && { key: index })} >
            {value => fragmentComponent(value, component, renderContext)}
        </AvailableComponents.Consumer >
    )
}
