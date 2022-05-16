// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UIFragmentContext, UILayoutConfig } from "../../types"
import { SemanticCOLORS } from "semantic-ui-react"

export interface SeparatorLayoutConfig extends UILayoutConfig {
    double?: boolean,
    color: SemanticCOLORS
}

/**
 * Longer text that will be displayed truncated, with an option to show more.
 */
export const Separator: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
}) => {
    const {
        component,
        double = true,
        color = '#5EE08A',
        style = {
            display: 'inline-block',
            transform: 'scaleY(1.2)',
            fontSize: '1.2em',
            padding: '0.3em',
        },
        ...rest
    } = config as SeparatorLayoutConfig

    return <span style={{ ...style, color }} {...rest}>{double ? '||' : '|'}</span>
}