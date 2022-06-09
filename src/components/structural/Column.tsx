// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"

export interface ColumnLayoutConfig extends LayoutFragmentConfig { }

/**
 * A component wrapping the layout inside a column component
 */
export const ColumnWrapper: React.FC<React.PropsWithoutRef<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, ...rest } = config

    const wrapperConfig = component == undefined || component !== 'column'
        ? { component: 'column', items: [{ ...config, ...rest }] }
        : { component: component, ...rest }

    return LayoutFragment({
        config: wrapperConfig,
        data,
    })
}

/**
 * Component putting its children items into a single responsive column.
 * See https://react.semantic-ui.com/collections/grid/#Grid.Column for available props.
 */
export const Column: React.FC<React.PropsWithoutRef<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const { component, items, ...rest } = config as ColumnLayoutConfig
    return (
        <Grid.Column {...rest}>
            {items?.map((itemConfig: LayoutFragmentConfig, index) => (
                LayoutFragment({ config: { key: index, ...itemConfig, data } })
            ))}
        </Grid.Column>
    )
}
