// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { Label, SemanticCOLORS } from "semantic-ui-react"
import clsx from 'clsx'

export interface SeparatorLayoutConfig extends LayoutFragmentConfig {
    double?: boolean,
    color: SemanticCOLORS
}

/**
 * Longer text that will be displayed truncated, with an option to show more.
 */
export const Separator: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
}) => {
    const {
        component,
        className,
        color,
        double,
        ...rest
    } = config as SeparatorLayoutConfig

    // @ts-ignore until Semantic-UI fully supports newest React
    return <Label
        basic
        className={clsx(color, className)}
        {...rest}>
        {double ? '‖' : '❙'}
    </Label>
}