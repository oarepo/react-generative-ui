// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _isString from "lodash/isString"
import * as React from "react"
import { Item as SemanticItem } from "semantic-ui-react"
import { UILayoutConfig, UIFragmentContext } from "../types"

export interface ItemLayoutConfig extends UILayoutConfig {
    children?: UILayoutConfig[],
    content?: UILayoutConfig
    description?: UILayoutConfig
    extra?: UILayoutConfig
    header?: ItemSectionProps
    image?: UILayoutConfig
    meta?: UILayoutConfig
}

export interface ItemSectionProps extends UILayoutConfig {
    as?: string | Function
    children?: UILayoutConfig[]
    className?: string
    content?: string | UILayoutConfig
    renderUIFragment: Function
}

const ItemHeader: React.FC<ItemSectionProps> = (props) => {
    console.log(props)
    const { children, content, renderUIFragment, ...rest } = props
    return (
        <SemanticItem.Header
            {...rest}
            {...(content && { content: _isString(content) ? content : renderUIFragment(content) })} >
            {children?.map((child, index) => renderUIFragment(child, index))}
        </SemanticItem.Header>)
}

/**
 * An item view presents related collection of content for display.
 * See https://react.semantic-ui.com/views/item for available props.
 */
export const Item: React.FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { component, ...props } = config
    const {
        children,
        content,
        description,
        extra,
        header,
        image,
        meta,
        ...rest
    } = props as ItemLayoutConfig

    return (
        <SemanticItem {...rest}>
            {header && (<ItemHeader {...header} renderUIFragment={renderUIFragment} />)}
            {children?.map((child, index) => renderUIFragment(child, index))}
        </SemanticItem>
    )
}