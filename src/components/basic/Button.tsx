// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { useData } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { Button as SemanticButton } from 'semantic-ui-react'

export interface ButtonLayoutConfig extends LayoutFragmentConfig { }

/**
 * A Semantic-UI button element
 */
export const Button: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, dataField, children, ...rest } = config

    const resolvedChildren = dataField && data
        ? useData(data, dataField)
        : children

    return (
        // @ts-ignore until Semantic-UI supports React 18
        <SemanticButton {...rest}>
            {resolvedChildren}
        </SemanticButton>
    )
}