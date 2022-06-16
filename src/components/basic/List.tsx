// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import clsx from "clsx"
import * as React from "react"
import { List as SemanticList } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { useDataContext, useItems, useSeparator } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import _isString from 'lodash/isString'

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

    const listItems = useItems(itemsData, item)?.flatMap(
        (listItem: LayoutFragmentConfig, index: number) => (
            index > 0 && separator ? [useSeparator(separator), listItem] : listItem
        )) as LayoutFragmentConfig[]

    const ListItems = listItems?.map(
        (listItem: LayoutFragmentConfig, index: number) => (
            <SemanticList.Item
                className={clsx(
                    'oarepo',
                    {
                        'oarepo-separated': separator,
                        'oarepo-separated-text': _isString(separator)
                    })}
                key={index}>
                {LayoutFragment({ config: listItem })}
            </SemanticList.Item>
        ))

    return <SemanticList {...rest}>
        {ListItems}
    </SemanticList>
}
