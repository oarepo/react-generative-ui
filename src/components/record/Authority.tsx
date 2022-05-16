// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { AuthorityIdentifierProps } from ".."
import { DataContext } from "../../context"
import { useResolvedData } from "../../hooks"
import { UIFragmentContext, UILayoutConfig } from "../../types"


export enum AuthorityType {
    Personal = 'Personal',
    Organizational = 'Organizational'
}

export interface AuthorityLayoutConfig extends UILayoutConfig {
    fullName?: string,
    role?: string,
    nameType?: AuthorityType,
    affiliations: string[],
    authorityIdentifiers?: AuthorityIdentifierProps[],
    wrapperComponent?: UILayoutConfig
    fullNameComponent?: UILayoutConfig
    identifierComponent?: UILayoutConfig
    roleComponent?: UILayoutConfig
}
/**
 * Displays either a personal or an organizational authority tag.
 */
export const Authority: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    renderUIFragment
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
    } = dataField
            ? useResolvedData(React.useContext(DataContext), dataField)
            : { fullName, authorityIdentifiers, role, ...rest }

    const Wrapper = (props: React.PropsWithChildren<{}>) => (
        renderUIFragment({
            ...wrapperComponent,
            ...props
        }, 'wrapper')
    )

    const FullName = renderUIFragment({
        ...fullNameComponent,
        children: resolvedFullName,
    }, 'name')

    const Identifiers = resolvedIdentifiers.map(
        (identifier: AuthorityIdentifierProps, index: number) => (
            renderUIFragment(
                { ...identifierComponent, ...identifier },
                `identifier-${index}`
            )
        ))

    const Role = renderUIFragment({
        ...roleComponent,
        children: `(${resolvedRole})`
    }, 'role')

    return (
        <Wrapper {...rest}>
            {FullName}
            {resolvedIdentifiers && Identifiers}
            {resolvedRole && Role}
        </Wrapper>
    )
}