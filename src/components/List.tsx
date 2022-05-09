// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { List as SemanticList, ListListProps } from "semantic-ui-react"
import { DataContext } from "../context"
import { useResolvedData } from "../hooks"
import { UILayoutConfig, UIFragmentContext, UIFragmentProps } from "../types"


export interface ListLayoutConfig extends UILayoutConfig {
}


/**
 * Component putting its children items into a List.
 * See https://react.semantic-ui.com/elements/list for available props.
 */
export const List: React.FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { items, dataField, ...props } = config
    const { item, ...rest } = props || {} as UIFragmentProps
    const _childrenToFragment = (children: any) => {
        return {
            ...item,
            ...{
                props: {
                    ...item?.props || {},
                    children: children
                }
            }
        }
    }

    const resolvedChildren = dataField
        ? useResolvedData(React.useContext(DataContext), dataField)
        : props.children

    const resolvedItems = items || (resolvedChildren.map((c: any) => _childrenToFragment(c)) || []) as UILayoutConfig[]
    const semanticProps = rest || {} as ListListProps

    return (
        <SemanticList {...semanticProps as ListListProps}>
            {resolvedItems?.map((item: UILayoutConfig, index: React.Key) => (
                <SemanticList.Item key={index}>
                    {renderUIFragment(item)}
                </SemanticList.Item>
            ))}
        </SemanticList>
    )
}