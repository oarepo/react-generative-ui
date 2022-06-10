// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import { Label as SemanticLabel } from "semantic-ui-react"
import { useData } from "../../hooks"


export interface LabelLayoutConfig extends LayoutFragmentConfig { }

/**
 * A Semantic-UI Label.
 */
export const Label: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
}) => {
    const {
        component,
        dataField,
        content,
        ...rest
    } = config as LabelLayoutConfig

    const resolvedContent = dataField && data
        ? useData(data, dataField)
        : content

    // @ts-ignore until Semantic-UI supports React 18
    return <SemanticLabel content={resolvedContent} {...rest} />
}
