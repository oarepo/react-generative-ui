// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from 'react';
import { UIFragmentConfig, UIGeneratorProps, ComponentMap } from './types';
import { Columns, Column, Row, Label, Header } from '../components';
import { useFragmentComponent } from '../hooks';


const defaultComponents = {
    // @ts-ignore 7031
    columns: ({ components, config }) => <Columns config={config} components={components} />,
    // @ts-ignore 7031
    column: ({ components, config }) => <Column config={config} components={components} />,
    // @ts-ignore 7031
    row: ({ components, config }) => <Row config={config} components={components} />,
    // @ts-ignore 7031
    label: ({ components, config }) => <Label config={config} components={components} />,
    // @ts-ignore 7031
    header: ({ components, config }) => <Header config={config} components={components} />
} as ComponentMap


/**
 * Generator of user-configured UI views 
 */
// @ts-ignore 2322
export const UIGenerator: FC<UIGeneratorProps> = ({ config, components }) => {
    const availableComponents = {
        ...defaultComponents,
        ...components,
    }

    return (<>
        {config?.map((fragment: UIFragmentConfig, index: number) => {
            return useFragmentComponent(availableComponents, fragment, index)
        })}
    </>)
    // return <UIFragment key={index} availableComponents={availableComponents} {...fragment}></UIFragment>
}
