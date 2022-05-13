// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { List as SemanticList } from "semantic-ui-react"
import { DataContext } from "../context"
import { useResolvedData } from "../hooks"
import { UILayoutConfig, UIFragmentContext } from "../types"
import _isString from 'lodash/isString'


export interface ListLayoutConfig extends UILayoutConfig {
    item?: UILayoutConfig
    items?: any[]
    horizontal?: boolean
}


/**
 * Component putting its children items into a List.
 * See https://react.semantic-ui.com/elements/list for available props.
 */
export const List: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
}) => {
    const {
        component,
        dataField,
        items,
        item = { component: 'raw' },
        horizontal = false,
        ...rest
    } = config as ListLayoutConfig

    const resolvedItems = dataField
        ? useResolvedData(React.useContext(DataContext), dataField)
        : items

    if (!resolvedItems) {
        return <div className="error">
            Error rendering list: either items or dataField must be provided.
        </div>
    }

    const renderItem = (itemData: any, index: React.Key) => {
        const itemProps = _isString(itemData) ? { children: itemData } : itemData
        return renderUIFragment({ ...item, ...itemProps }, index)
    }

    return (
        <SemanticList horizontal={horizontal} {...rest}>
            {resolvedItems?.map((itemData: any, index: React.Key) => (
                <SemanticList.Item key={index}>
                    {renderItem(itemData, index)}
                </SemanticList.Item>
            ))}
        </SemanticList >
    )
}