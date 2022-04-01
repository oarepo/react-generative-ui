// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentMap, UIFragmentConfig } from "./UIGenerator/types"
import _mapKeys from 'lodash/mapKeys'
import React, { Fragment } from "react"


export const useFragmentComponent = (components: ComponentMap, config: UIFragmentConfig, index?: number) => {
    const { props, component, items } = config

    const mappedProps = _mapKeys(props, (_value: string, key: string) => {
        if (key === 'class') {
            return 'className'
        }
        return key
    })


    if (component in components) {
        const fragmentConfig = { items, component, props: mappedProps }
        const UIFragmentComponent = components[component]({ components, config: fragmentConfig })

        if (index !== undefined) {
            return <Fragment key={index}>{UIFragmentComponent}</Fragment>
        }

        return <>{UIFragmentComponent}</>
    } else {
        // TODO: render using some configurable fallback component instead of just div?
        return <span key={index || 0}>Unknown component type: {component}</span>
    }
}
