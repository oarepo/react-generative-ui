// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { useResolvedDataProps } from "../hooks"
import { UILayoutConfig, UIFragmentContext, UIFragmentProps } from "../types"

export interface AuthorityProps extends UIFragmentProps {
    authorityContainer: string
    fullNameComponent: string
    identifierComponent: string
    roleComponent: string
}

export interface AuthorityChildrenProps {
    authorityIdentifiers: any[],
    fullName: string,
    role: any
}

/**
 * Displays either a personal or an organizational authority tag.
 */
export const Authority: React.FC<UIFragmentContext> = ({
    config,
    renderUIFragment
}) => {
    const { data, props } = config
    const {
        fullNameComponent = 'span',
        identifierComponent = 'authority-identifier',
        roleComponent = 'span'
    } = props as AuthorityProps
    const resolvedProps = useResolvedDataProps(data, props)

    const {
        authorityIdentifiers = [],
        fullName,
        role = undefined
    } = resolvedProps?.children as AuthorityChildrenProps

    const fullNameComponentItem = {
        component: fullNameComponent,
        props: { ...resolvedProps, children: [fullName] }
    }

    const identifierComponentItem = (identifier: any): UILayoutConfig => {
        return {
            component: identifierComponent,
            // @ts-ignore 2332
            props: { ...resolvedProps, ...identifier }
        }
    }

    const roleComponentItem = {
        component: roleComponent,
        props: { ...resolvedProps, children: [`(${role})`] }
    }

    return (
        <>
            {renderUIFragment(fullNameComponentItem, 'name')}
            {authorityIdentifiers.map((ai: any, index: number) => {
                return renderUIFragment(identifierComponentItem(ai), `identifier-${index}`)
            })}
            {role && renderUIFragment(roleComponentItem, 'role')}
        </>
    )
}