// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FC } from "react"
import { Header as SemanticHeader, HeaderProps } from "semantic-ui-react"
import { UIFragmentContext, UIFragmentProps } from "../types"

export const Header: FC<UIFragmentContext> = ({
    config,
}) => {
    const { props } = config
    const { data } = props as UIFragmentProps
    return (
        <SemanticHeader {...config?.props as HeaderProps}>
            {data}
        </SemanticHeader>
    )
}