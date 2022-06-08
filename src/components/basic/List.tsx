// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { List as SemanticList } from "semantic-ui-react"
import { useResolvedData, useSeparatedItems } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import _isString from 'lodash/isString'
import { ErrorMessage } from ".."


export interface ListLayoutConfig extends LayoutFragmentConfig {
    item?: LayoutFragmentConfig
    items?: any[]
    separator?: LayoutFragmentConfig | string
    horizontal?: boolean
}


/**
 * Component putting its children items into a List.
 * See https://react.semantic-ui.com/elements/list for available props.
 */
export const List: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
    key
}) => {
    const {
        component,
        dataField,
        items,
        item = { component: 'raw' },
        separator,
        ...rest
    } = config as ListLayoutConfig

    const resolvedItems = dataField && data
        ? useResolvedData(data, dataField)
        : items

    if (!resolvedItems) {
        return <ErrorMessage key={key} component={component}>
            Either items or dataField must be provided.
        </ErrorMessage>
    }

    const itemComponents = resolvedItems.map(
        (itemData: any) => ({ ...item, ...(_isString(itemData) ? { children: itemData } : itemData) }
        ))

    const separatedItems = useSeparatedItems(itemComponents, data, separator).map(
        (item, index) => ({ key: index, content: item }))

    return <SemanticList key={key} items={separatedItems} {...rest} />
}