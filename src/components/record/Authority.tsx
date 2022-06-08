// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { AuthorityIdentifierProps } from ".."
import { LayoutFragment } from "../../GeneratedLayout"
import { useResolvedData } from "../../hooks"
import { LayoutFragmentConfig, LayoutFragmentProps } from "../../types"


export enum AuthorityType {
    Personal = 'Personal',
    Organizational = 'Organizational'
}

export interface AuthorityLayoutConfig extends LayoutFragmentConfig {
    fullName?: string,
    role?: string,
    nameType?: AuthorityType,
    affiliations: string[],
    authorityIdentifiers?: AuthorityIdentifierProps[],
    wrapperComponent?: LayoutFragmentConfig
    fullNameComponent?: LayoutFragmentConfig
    identifierComponent?: LayoutFragmentConfig
    roleComponent?: LayoutFragmentConfig
}
/**
 * Displays either a personal or an organizational authority tag.
 */
export const Authority: React.FC<React.PropsWithChildren<LayoutFragmentProps>> = ({
    config,
    data,
    key
}) => {
    const {
        component,
        dataField,
        fullName,
        role,
        nameType,
        affiliations,
        authorityIdentifiers = [],
        wrapperComponent = { component: 'div' },
        fullNameComponent = { component: 'span' },
        identifierComponent = { component: 'authority-identifier' },
        roleComponent = { component: 'span' },
        ...rest
    } = config as AuthorityLayoutConfig

    const {
        authorityIdentifiers: resolvedIdentifiers = [],
        fullName: resolvedFullName,
        role: resolvedRole,
    } = dataField && data
            ? useResolvedData(data, dataField)
            : { fullName, authorityIdentifiers, role, ...rest }

    const Wrapper = (props: React.PropsWithChildren<{}>) => (
        LayoutFragment({
            config: {
                ...wrapperComponent,
                ...props
            },
            data,
            key: 'wrapper'
        })
    )

    const FullName = LayoutFragment({
        config: {
            ...fullNameComponent,
            children: resolvedFullName,
        },
        data,
        key: 'name'
    })

    const Identifiers = resolvedIdentifiers.map(
        (identifier: AuthorityIdentifierProps, index: number) => (
            LayoutFragment({
                config: {
                    ...identifierComponent, ...identifier,
                },
                data,
                key: `identifier-${index}`
            })
        ))

    const Role = LayoutFragment({
        config: {
            ...roleComponent,
            children: `(${resolvedRole})`
        },
        data,
        key: 'role'
    })

    return (
        <Wrapper key={key} {...rest}>
            {FullName}
            {resolvedIdentifiers && Identifiers}
            {resolvedRole && Role}
        </Wrapper>
    )
}