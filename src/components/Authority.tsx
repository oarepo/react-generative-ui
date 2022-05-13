// Copyright (c) 2022 CESNET
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from "react"
import { DataContext } from "../context"
import { useResolvedData } from "../hooks"
import { UIFragmentContext, UIFragmentProps } from "../types"

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
export const Authority: React.FC<React.PropsWithChildren<UIFragmentContext>> = ({
    config,
    // renderUIFragment
}) => {
    const { dataField, ...props } = config
    const {
        // fullNameComponent = 'span',
        // identifierComponent = 'authority-identifier',
        // roleComponent = 'span',
    } = props

    const {
        // authorityIdentifiers = [],
        // fullName,
        // role = undefined,
        // // ...rest
    } = dataField
            ? useResolvedData(React.useContext(DataContext), dataField)
            : props

    // const fullNameComponentItem = {
    //     component: fullNameComponent,
    //     ...rest,
    //     children: [fullName]
    // }

    // const identifierComponentItem = (identifier: any): UILayoutConfig => {
    //     return {
    //         component: identifierComponent,
    //         ...rest,
    //         ...identifier
    //     }
    // }

    // const roleComponentItem = {
    //     component: roleComponent,
    //     ...rest,
    //     children: [`(${role})`]
    // }

    return (
        <>
            {/* {renderUIFragment(fullNameComponentItem, 'name')}
            {authorityIdentifiers.map((ai: any, index: number) => {
                return renderUIFragment(identifierComponentItem(ai), `identifier-${index}`)
            })}
            {role && renderUIFragment(roleComponentItem, 'role')} */}
        </>
    )
}