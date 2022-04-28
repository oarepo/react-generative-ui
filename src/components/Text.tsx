// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { useResolvedDataProps } from "../hooks"
import { UIFragmentContext, UIFragmentProps } from "../types"


interface TextProps extends UIFragmentProps {
    truncate?: boolean | number
}

/**
 * Component rendering its children items in a single row separated by a given separator.
 * Separator prop could be either a string or a registered component key.
 * See https://react.semantic-ui.com/collections/grid/#Grid.Row for available props.
 */
export const Text: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { props, data } = config
    const resolvedProps = useResolvedDataProps(data, props)

    const { truncate } = props as TextProps

    return (
        <p>{resolvedProps}</p>
    )
}