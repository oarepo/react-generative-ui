// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { useData } from "../../hooks"
import { LayoutFragmentProps } from "../../types"

/**
 * A span HTML element
 */
export const Span: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, dataField, children, ...rest } = config

    const resolvedChildren = dataField && data
        ? useData(data, dataField)
        : children

    return (
        <span {...rest}>
            {resolvedChildren}
        </span>
    )
}