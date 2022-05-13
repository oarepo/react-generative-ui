// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { useResolvedData } from "../hooks"
import { UIFragmentContext, UIFragmentProps, UILayoutConfig } from "../types"
import TextTruncate from 'react-text-truncate'
import { Button } from "semantic-ui-react"
import { DataContext } from "../context"

export interface TruncatedTextLayoutConfig extends UILayoutConfig {
    /** Number of lines displayed in truncated state */
    lines: number,
    /** Ellipsis character (default: `…`) */
    ellipsis: string,
    /** Text to be rendered truncated */
    text: string,
    /** Props passed to 'Show more|less' toggle button */
    expandToggle: UIFragmentProps
}

/**
 * Longer text that will be displayed truncated, with an option to show more.
 */
export const TruncatedText: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
}) => {
    const {
        component,
        dataField,
        text,
        lines = 1,
        ellipsis = "…",
        expandToggle = { basic: true, size: 'mini' },
        ...rest
    } = config as TruncatedTextLayoutConfig

    const resolvedText = dataField
        ? useResolvedData(React.useContext(DataContext), dataField)
        : text?.toString()

    const [expanded, setExpanded] = React.useState(false)

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
            {...rest}
        />
    )
}