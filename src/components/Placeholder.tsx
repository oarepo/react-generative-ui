// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UILayoutConfig, UIFragmentContext } from "../types"
import { Placeholder as SemanticPlaceholder } from "semantic-ui-react"
import _times from 'lodash/times'

export enum PlaceholderType {
    Paragraph = 'paragraph',
    ImageHeader = 'image-header',
    Image = 'image',
}


export interface PlaceholderLayoutConfig extends UILayoutConfig {
    /** Placeholder representation type */
    type?: PlaceholderType
    /** Number of placeholder content lines */
    lines?: number
    /** Any extra props passed down to Placeholder inner components */
    [key: string]: any
}

export interface PlaceholderProps {
    square?: boolean,
    /** Any extra props passed directly to Placeholder component */
    [key: string]: any
}

/**
 * A placeholder used to reserve space for content that soon will appear in a layout.
 */
export const Placeholder: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { component, ...props } = config
    const { type = 'paragraph', lines = 1, fluid = true, ...restInnerProps } = props as PlaceholderLayoutConfig
    const { square, ...rest } = restInnerProps as PlaceholderProps

    const ParagraphPlaceholder = (
        <SemanticPlaceholder.Paragraph>
            {_times(lines || 1, (num) => (
                <SemanticPlaceholder.Line {...restInnerProps} key={num.toString()} />)
            )}
        </SemanticPlaceholder.Paragraph>
    )

    const ImageHeaderPlaceholder = (
        <SemanticPlaceholder.Header image>
            {_times(lines || 1, (num) => (
                <SemanticPlaceholder.Line {...restInnerProps} key={num.toString()} />
            ))}
        </SemanticPlaceholder.Header>
    )

    const ImagePlaceholder = (
        <SemanticPlaceholder.Image {...restInnerProps} />
    )

    const placeholderRepresentation = (type: string) => {
        switch (type) {
            case PlaceholderType.Paragraph:
                return ParagraphPlaceholder
            case PlaceholderType.ImageHeader:
                return ImageHeaderPlaceholder
            case PlaceholderType.Image:
                return ImagePlaceholder
            default:
                return ParagraphPlaceholder
        }
    }

    return (
        <SemanticPlaceholder {...rest}>
            {placeholderRepresentation(type)}
        </SemanticPlaceholder>
    )
}