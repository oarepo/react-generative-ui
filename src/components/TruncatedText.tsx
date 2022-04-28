// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { useResolvedDataProps } from "../hooks"
import { UIFragmentContext, UIFragmentProps } from "../types"
import TextTruncate from 'react-text-truncate'
import { Button } from "semantic-ui-react"

export interface TruncatedTextProps extends UIFragmentProps {
    lines: number,
    element: string,
    ellipsis: string,
    text: string,
    expandToggle: UIFragmentProps
}

/**
 * Longer text that will be displayed truncated, with an option to show more.
 */
export const TruncatedText: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { data, props } = config
    const resolvedProps = useResolvedDataProps(data, props)
    const resolvedText = resolvedProps?.children?.toString()

    const [expanded, setExpanded] = React.useState(false)

    const {
        lines = 1,
        ellipsis = "…",
        expandToggle = { basic: true, size: 'mini' }
    } = resolvedProps as TruncatedTextProps

    const toggleExpanded: React.MouseEventHandler<HTMLButtonElement> = () => {
        setExpanded(!expanded)
    }

    const ExpandToggle =
        // @ts-ignore 2769
        <Button onClick={toggleExpanded} {...expandToggle}>
            Show {expanded ? 'less' : 'more'}
        </Button >

    return (
        expanded && <p>{resolvedText}{ExpandToggle}</p> ||
        <TextTruncate
            line={lines}
            truncateText={ellipsis}
            text={resolvedText}
            textTruncateChild={ExpandToggle}
        />
    )
}