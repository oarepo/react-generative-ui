// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { useResolvedData } from "../../hooks"
import { LayoutFragmentProps } from "../../types"
import { Container as SemanticContainer } from "semantic-ui-react"

/**
 * A Semantic-UI container
 */
export const Container: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, dataField, children, ...rest } = config

    const resolvedChildren = dataField && data
        ? useResolvedData(data, dataField)
        : children

    return (
        <SemanticContainer {...rest}>
            {resolvedChildren}
        </SemanticContainer>
    )
}