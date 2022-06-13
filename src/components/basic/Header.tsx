// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { Header as SemanticHeader } from "semantic-ui-react"
import { useDataContext } from "../../hooks"


export interface HeaderLayoutConfig extends LayoutFragmentConfig { }

/**
 * A Semantic-UI header.
 */
export const Header: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        dataField,
        content,
        ...rest
    } = config as HeaderLayoutConfig

    const resolvedContent = dataField && data
        ? useDataContext(data, dataField)
        : content

    // @ts-ignore until Semantic-UI supports React 18
    return <SemanticHeader content={resolvedContent} {...rest} />
}
