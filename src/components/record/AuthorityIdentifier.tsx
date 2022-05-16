// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { UIFragmentContext, UILayoutConfig } from "../../types"
import orcid from '../../assets/orcid-brands.svg'
import { Icon } from "semantic-ui-react"

export interface AuthorityIdentifierProps extends UILayoutConfig {
    identifier: string,
    scheme: string
}

/**
 * Renders a badge for a given authority identifier.
 */
export const AuthorityIdentifier: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
}) => {
    const {
        identifier,
        scheme,
        style = { 'margin': '0 0 0 .2em' },
        ...rest
    } = config as AuthorityIdentifierProps

    if (!scheme || !identifier) {
        return (<div className="error">
            Error rendering authority-identifier: missing value or scheme.
        </div>)
    }

    if (scheme.toLowerCase() === 'orcid') {
        let target = identifier
        try {
            new URL(identifier)
        } catch (err) {
            target = `https://orcid.org/${identifier}`
        }
        return (
            <a href={target} target="_blank" style={style} {...rest}>
                <img alt="ORCID iD" src={orcid} style={{ width: '16px', display: "inline-block" }} />
            </a>
        )
    }

    return (
        <a href={`${scheme}:${identifier}`} target="_blank" style={style} {...rest}>
            {/* @ts-ignore until Semantic-UI supports React 18 */}
            <Icon link name='id card' {...rest} />
        </a>
    )
}