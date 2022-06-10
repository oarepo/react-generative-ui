// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { List as SemanticList } from "semantic-ui-react"
import { useItems, useSeparatedItems } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"


export interface ListLayoutConfig extends LayoutFragmentConfig {
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
        item = { component: 'span' },
        separator,
        ...rest
    } = config as ListLayoutConfig

    const separatedItems = useSeparatedItems(useItems(items, item, data, dataField), separator)
    console.log(separatedItems)
    return <SemanticList {...rest}>
        {separatedItems?.map((listItem, index) => (
            <SemanticList.Item key={index}>{listItem}</SemanticList.Item>))}
    </SemanticList>
}