// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { useDataContext } from "../../hooks"
import { LayoutFragmentProps } from "../../types"
import { Segment as SemanticSegment } from "semantic-ui-react"

/**
 * A Semantic-UI segment
 */
export const Segment: FC<React.PropsWithChildren<LayoutFragmentProps>> = ({ config, data }) => {
    const { component, dataField, children, ...rest } = config

    const resolvedChildren = dataField && data
        ? useDataContext(data, dataField)
        : children

    return (
        <SemanticSegment {...rest}>
            {resolvedChildren}
        </SemanticSegment>
    )
}