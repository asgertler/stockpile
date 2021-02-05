import React from "react"
import { Route } from "react-router-dom"

import { Collection } from '../collection/Collection'

export const DashboardViews = () => {
    return (
        <>
            <Route exact path='/collection/:collectionId(\d+)'>
                <Collection />
            </Route>
        </>
    )
}