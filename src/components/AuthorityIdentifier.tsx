// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UIFragmentContext } from "../types"
import orcid from '../assets/orcid-brands.svg'
import { Icon } from "semantic-ui-react"

export interface AuthorityIdentifierProps {
    identifier: string,
    scheme: string
}


/**
 * Renders a badge for a given authority identifier.
 */
export const AuthorityIdentifier: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
}) => {
    const { props } = config
    const { identifier, scheme, ...rest } = props as AuthorityIdentifierProps

    if (scheme.toLowerCase() === 'orcid') {
        const target = identifier.startsWith('https://orcid.org') ? identifier : `https://orcid.org/${identifier}`
        return (
            <a href={target} target="_blank" {...rest}>
                <img alt="ORCID iD" src={orcid} style={{ width: '16px', display: "inline-block" }} />
            </a>
        )
    }

    return (
        <a href={`${scheme}:${identifier}`} target="_blank" {...rest}>
            {/* @ts-ignore until Semantic-UI supports React 18 */}
            <Icon link name='id card' {...rest} />
        </a>
    )
}