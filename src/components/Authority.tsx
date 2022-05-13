// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { AuthorityIdentifierProps } from "."
import { DataContext } from "../context"
import { useResolvedData } from "../hooks"
import { UIFragmentContext, UILayoutConfig } from "../types"

export interface AuthorityLayoutConfig extends UILayoutConfig {
    fullName?: string,
    role?: string,
    authorityIdentifiers?: AuthorityIdentifierProps[],
    authorityContainer?: string
    fullNameComponent?: string
    identifierComponent?: string
    roleComponent?: string
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
        authorityIdentifiers = [],
        authorityContainer,
        fullNameComponent = 'span',
        identifierComponent = 'authority-identifier',
        roleComponent = 'span',
        ...rest
    } = config as AuthorityLayoutConfig

    const {
        authorityIdentifiers: resolvedIdentifiers = [],
        fullName: resolvedFullName,
        role: resolvedRole,
    } = dataField
            ? useResolvedData(React.useContext(DataContext), dataField)
            : { fullName, authorityIdentifiers, role, ...rest }

    const FullName = renderUIFragment({
        component: fullNameComponent,
        children: resolvedFullName,
    }, 'name')

    const Identifiers = resolvedIdentifiers.map(
        (identifier: AuthorityIdentifierProps, index: number) => (
            renderUIFragment(
                { ...identifier, component: identifierComponent },
                `identifier-${index}`
            )
        ))

    const Role = renderUIFragment({
        component: roleComponent,
        children: `(${resolvedRole})`
    }, 'role')

    console.log(resolvedIdentifiers, Identifiers)

    return (
        <>
            {FullName}
            {resolvedIdentifiers && Identifiers}
            {resolvedRole && Role}
        </>
    )
}