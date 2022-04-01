// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { Label as SemanticLabel, LabelProps } from "semantic-ui-react"
import { UIFragmentContext, UIFragmentProps } from "../UIGenerator/types"

export const Label: FC<UIFragmentContext> = ({
    config,
}) => {
    const { props } = config
    const { data } = props as UIFragmentProps
    return (
        <SemanticLabel {...config?.props as LabelProps}>
            {data}
        </SemanticLabel>
    )
}