// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC, Key } from "react"
import { List as SemanticList, ListListProps } from "semantic-ui-react"
import { useResolvedDataProps } from "../hooks"
import { UIFragmentConfig, UIFragmentContext, UIListFragmentProps } from "../types"

/**
 * Component putting its children items into a List.
 * See https://react.semantic-ui.com/elements/list for available props.
 */
export const List: FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { component, items, props, data } = config
    const { item, separator } = props || {} as UIListFragmentProps
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

    const resolvedProps = useResolvedDataProps(data)
    // @ts-ignore 2339
    const resolvedItems = items || (resolvedProps?.children?.map((c: any) => _childrenToFragment(c)) || []) as UIFragmentConfig[]
    const semanticProps = resolvedProps || {} as ListListProps
    if (component === 'horizontal-list') {
        semanticProps.horizontal = true
    }
    if (separator) {
        semanticProps.divided = true
    }

    return (
        <SemanticList {...semanticProps as ListListProps}>
            {resolvedItems?.map((item: UIFragmentConfig, index: Key) => (
                <SemanticList.Item key={index}>
                    {renderUIFragment(item)}
                </SemanticList.Item>
            ))}
        </SemanticList>
    )
}