// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { AuthorityIdentifierProps } from ".."
import { LayoutFragment } from "../../GeneratedLayout"
import { useData } from "../../hooks"
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
}) => {
    const {
        component,
        dataField,
        fullName,
        role,
        nameType,
        affiliations,
        authorityIdentifiers = [],
        wrapperComponent = { component: 'segment', basic: true },
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
            ? useData(data, dataField)
            : { fullName, authorityIdentifiers, role, ...rest }

    const Wrapper = (props: React.PropsWithChildren<{}>) => (
        LayoutFragment({
            config: {
                key: 'wrapper',
                ...wrapperComponent,
                ...props
            },
            data,
        })
    )

    const FullName = LayoutFragment({
        config: {
            key: 'name',
            ...fullNameComponent,
            children: resolvedFullName,
        },
        data,
    })

    const Identifiers = resolvedIdentifiers.map(
        (identifier: AuthorityIdentifierProps, index: number) => (
            LayoutFragment({
                config: {
                    key: `identifier-${index}`,
                    ...identifierComponent,
                    ...identifier,
                },
                data,
            })
        ))

    const Role = LayoutFragment({
        config: {
            key: 'role',
            ...roleComponent,
            children: `(${resolvedRole})`,
        },
        data,
    })

    return (
        <Wrapper {...rest}>
            {FullName}
            {resolvedIdentifiers && Identifiers}
            {resolvedRole && Role}
        </Wrapper>
    )
}