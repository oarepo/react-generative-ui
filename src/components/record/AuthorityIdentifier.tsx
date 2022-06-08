// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"
import orcid from '../../assets/orcid-brands.svg'
import { Icon } from "semantic-ui-react"
import { ErrorMessage } from ".."

export interface AuthorityIdentifierProps extends LayoutFragmentConfig {
    identifier: string,
    scheme: string
}

/**
 * Renders a badge for a given authority identifier.
 */
export const AuthorityIdentifier: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    key
}) => {
    const {
        identifier,
        scheme,
        ...rest
    } = config as AuthorityIdentifierProps

    if (!scheme || !identifier) {
        return <ErrorMessage component='authority-identifier'>
            Missing value or scheme.
        </ErrorMessage>
    }

    if (scheme.toLowerCase() === 'orcid') {
        let target = identifier
        try {
            new URL(identifier)
        } catch (err) {
            target = `https://orcid.org/${identifier}`
        }
        return (
            <a href={target} target="_blank" rel="noopener" key={key} {...rest}>
                <img alt="ORCID iD" src={orcid} style={{ width: '16px', display: "inline-block" }} />
            </a>
        )
    }

    return (
        <a href={`${scheme}:${identifier}`} target="_blank" rel="noopener" key={key} {...rest}>
            {/* @ts-ignore until Semantic-UI supports React 18 */}
            <Icon link name='id card' {...rest} />
        </a>
    )
}