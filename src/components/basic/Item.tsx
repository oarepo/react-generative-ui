// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _isString from "lodash/isString"
import * as React from "react"
import { Item as SemanticItem } from "semantic-ui-react"
import { LayoutFragment } from "../../GeneratedLayout"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"

export interface ItemLayoutConfig extends LayoutFragmentConfig {
    children?: LayoutFragmentConfig[],
    content?: LayoutFragmentConfig
    description?: LayoutFragmentConfig
    extra?: LayoutFragmentConfig
    header?: ItemSectionProps
    image?: LayoutFragmentConfig
    meta?: LayoutFragmentConfig
}

export interface ItemSectionProps extends LayoutFragmentConfig {
    as?: string | Function
    children?: LayoutFragmentConfig[]
    className?: string
    content?: string | LayoutFragmentConfig
    renderUIFragment: Function
}

const ItemHeader: React.FC<React.PropsWithChildren<ItemSectionProps>> = (props) => {
    const { component, children, content, renderUIFragment, ...rest } = props
    return (
        <SemanticItem.Header
            {...rest}
            {...(content && { content: _isString(content) ? content : renderUIFragment(content) })} >
            {children?.map((child, index) => renderUIFragment(child, index))}
        </SemanticItem.Header>)
}

/**
 * TODO: WIP
 * An item view presents related collection of content for display.
 * See https://react.semantic-ui.com/views/item for available props.
 */
export const Item: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
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
            {header && (<ItemHeader {...header} />)}
            {children?.map((child, index) => LayoutFragment({ config: { key: index, ...child }, data }))}
        </SemanticItem>
    )
}