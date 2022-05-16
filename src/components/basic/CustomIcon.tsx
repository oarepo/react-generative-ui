// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UILayoutConfig, UIFragmentContext } from "../../types"
import {
    Icon as SemanticIcon,
    Image as SemanticImage,
    ImageProps,
    SemanticICONS,
    StrictImageProps
} from "semantic-ui-react"
import _times from 'lodash/times'
import { useResolvedData } from "../../hooks"
import { DataContext } from "../../context"


export interface CustomIconLayoutConfig extends UILayoutConfig {
    /** Mapping used to translate name prop to actual icon name/image source */
    iconSet?: { [key: string]: SemanticICONS | StrictImageProps }
    /** Icon name */
    name: string
    /** Any extra props passed to Icon element */
    [key: string]: any
}


/**
 * An Icon, that renders either as a custom
 * SVG graphic or as a built-in Semantic-UI Icon.
 */
export const CustomIcon: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
}) => {
    const { component, dataField, name, iconSet, ...rest } = config as CustomIconLayoutConfig

    const _getIcon = (name: string) => {
        return iconSet ? iconSet[name] : name
    }

    const resolvedName = dataField
        ? useResolvedData(React.useContext(DataContext), dataField)
        : name

    const iconData = _getIcon(resolvedName)

    if (iconData) {
        if (typeof iconData === 'string') {
            // @ts-ignore until Semantic-UI supports React 18
            return <SemanticIcon name={iconData as SemanticICONS} {...rest} />
        } else {
            const {
                inline = true,
                style = { objectFit: 'contain' },
                size = 'tiny',
                ...imageProps
            } = iconData as ImageProps

            return <SemanticImage style={style} inline={inline} size={size} {...imageProps} />
        }
    }
    return (
        <div className="error">
            Unknown icon: {name}.
        </div>
    )
}