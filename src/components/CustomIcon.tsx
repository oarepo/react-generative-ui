// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UILayoutConfig, UIFragmentContext } from "../types"
import {
    Icon as SemanticIcon,
    Image as SemanticImage,
    ImageProps,
    SemanticICONS,
    StrictImageProps
} from "semantic-ui-react"
import _times from 'lodash/times'


export interface CustomIconLayoutConfig extends UILayoutConfig {
    /** Mapping used to translate name prop to actual icon name/image source */
    nameMap?: { [key: string]: SemanticICONS | StrictImageProps }
    /** Icon name */
    name: string
    /** Any extra props passed to Icon element */
    [key: string]: any
}


/**
 * An Icon, that renders either as a custom
 * SVG graphic or as a built-in Semantic-UI Icon.
 */
export const CustomIcon: React.FC<UIFragmentContext> = ({
    config,
}) => {
    const { component, ...props } = config
    const { name, nameMap, ...rest } = props as CustomIconLayoutConfig

    const resolvedName = nameMap ? nameMap[name] : name

    if (resolvedName) {
        if (typeof resolvedName === 'string') {
            return <SemanticIcon name={resolvedName as SemanticICONS} {...rest} />
        } else {
            const { inline = true, size = 'tiny', ...imageProps } = resolvedName as ImageProps

            return <SemanticImage inline={inline} size={size} {...imageProps} />
        }
    }
    return (
        <div className="error">
            Unknown icon: {name}.
        </div>
    )

}