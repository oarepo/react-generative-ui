// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment, useContext } from 'react';
import { ComponentMap, UIFragmentConfig, UIGeneratorProps } from './types';
import { AvailableComponents, DataContext, defaultComponents } from '../context';
import _mapKeys from 'lodash/mapKeys'


/**
 * Generator of user-configured UI views 
 */
// @ts-ignore 2322
export const UIGenerator: FC<UIGeneratorProps> = ({ config, data, components }) => {
    const availableComponents = {
        ...components,
        ...defaultComponents
    } as ComponentMap

    const renderUIFragment = (config: UIFragmentConfig, index?: number) => {
        const { props, component, items } = config
        const components = useContext(AvailableComponents)

        const mappedProps = _mapKeys(props, (_value: string, key: string) => {
            if (key === 'class') {
                return 'className'
            }
            return key
        })

        if (component in components) {
            const resolvedConfig = { items, component, props: mappedProps }
            const UIFragmentComponent = components[component]({ renderUIFragment, config: resolvedConfig })

            return index !== undefined ? <Fragment key={index}>{UIFragmentComponent}</Fragment> : <>{UIFragmentComponent}</>
        } else {
            const FallbackComponent = components['_fallback']({ config: { component } })

            return index !== undefined ? <Fragment key={index}>{FallbackComponent}</Fragment> : <>{FallbackComponent}</>
        }
    }

    return (
        <AvailableComponents.Provider value={availableComponents}>
            <DataContext.Provider value={data}>
                {config?.map((fragment: UIFragmentConfig, index: number) => {
                    return renderUIFragment(fragment, index)
                })}
            </DataContext.Provider>
        </AvailableComponents.Provider>)
}
