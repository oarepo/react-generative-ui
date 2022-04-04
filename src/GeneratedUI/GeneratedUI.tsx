// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Fragment, useContext } from 'react';
import { ComponentMap, UIFragmentConfig, UIGeneratorProps } from '../types';
import { AvailableComponents, DataContext, defaultComponents } from '../context';
import _mapKeys from 'lodash/mapKeys'
import _get from 'lodash/get'

/**
 * Generated user-configured UI view
 */
export const GeneratedUI: FC<UIGeneratorProps> = ({ config, data, components }) => {
    const availableComponents = {
        ...components,
        ...defaultComponents
    } as ComponentMap

    const renderUIFragment = (config: UIFragmentConfig, index?: number) => {
        const { props, component } = config
        const components = useContext(AvailableComponents)

        const translatedProps = _mapKeys(props, (_value: string, key: string) => {
            return key === 'class' ? 'className' : key
        })

        const renderContext = {
            renderUIFragment,
            config: { ...config, props: translatedProps }
        }

        const UIFragmentComponent = _get(components, component, components['_fallback'])

        if (index !== undefined) {
            return <Fragment key={index}>{UIFragmentComponent(renderContext)}</Fragment>
        } else {
            return <>{UIFragmentComponent(renderContext)}</>
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
