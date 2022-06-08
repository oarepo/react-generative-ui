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
}) => {
    const {
        component,
        dataField,
        items,
        item = {},
        separator,
        ...rest
    } = config as ListLayoutConfig

    const resolvedItems = dataField && data
        ? useResolvedData(data, dataField)
        : items

    if (!resolvedItems) {
        return <ErrorMessage component={component}>
            Either items or dataField must be provided.
        </ErrorMessage>
    }

    const itemComponents = resolvedItems.map(
        (itemData: any) => ({ ...item, ...{ content: itemData } })
    ) as LayoutFragmentConfig[]

    const separatedItems = useSeparatedItems(itemComponents, separator)?.map(
        (item, index) => ({ key: index, ...item })
    )

    return <SemanticList items={separatedItems} {...rest} />
}