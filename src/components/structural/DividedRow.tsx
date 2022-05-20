// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UILayoutConfig, UIFragmentContext } from "../../types"
import _isString from 'lodash/isString';
import ReactDOMServer from 'react-dom/server'


export interface DividedRowLayoutConfig extends UILayoutConfig {
    items: UILayoutConfig[]
    separator: UILayoutConfig
}

/**
 * Component rendering its children items in a flexbox row.
 * Items can optionally be separated by a separator component.
 */
export const DividedRow: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
}) => {
    const {
        component,
        items,
        separator = { component: 'separator' },
        ...rest
    } = config as DividedRowLayoutConfig

    const renderedItems = items.flatMap(
        (item, index, array) => (
            index !== array.length - 1
                ? [renderUIFragment(item, index), renderUIFragment(separator, `separator-${index}`)]
                : renderUIFragment(item, index)
        ))

    return renderUIFragment({ component: 'row', children: renderedItems, ...rest })
}