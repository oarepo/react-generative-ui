// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { Grid } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import _isString from 'lodash/isString'
import { useItems } from "../../hooks"

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
    const {
        component,
        items,
        item = { component: 'span' },
        dataField,
        ...rest
    } = config as ColumnLayoutConfig

    const columnItems = useItems(items, item, data, dataField)
    return (
        <Grid.Column {...rest}>
            {columnItems?.map((columnItem: LayoutFragmentConfig, index: number) => (
                LayoutFragment({ config: { key: index, ...columnItem, data } })
            ))}
        </Grid.Column>
    )
}
