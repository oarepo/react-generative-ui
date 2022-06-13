// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { List as SemanticList } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { useDataContext, useSeparatedItems } from "../../hooks"
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

    const dataContext = useDataContext(data, dataField)
    const itemsData = dataField && dataContext != null
        ? dataContext
        : items
    const separatedItems = useSeparatedItems(
        itemsData.map((itemData: LayoutFragmentConfig) => ({ config: item, data: itemData })),
        separator
    ) as LayoutFragmentProps[]

    return <SemanticList {...rest}>
        {separatedItems?.map((listItem: LayoutFragmentProps, index: number) => (
            <SemanticList.Item key={index}>{LayoutFragment({ ...listItem })}</SemanticList.Item>))}
    </SemanticList>
}
