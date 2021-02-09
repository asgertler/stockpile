import React from "react"
import { Route } from "react-router-dom"

import { Collection } from '../collection/Collection'
import { CollectionForm } from '../collection/CollectionForm'
import { GearForm } from '../gear/GearForm'

export const DashboardViews = () => {
    return (
        <>
            <Route exact path='/collection/:collectionId(\d+)'>
                <Collection />
            </Route>

            <Route exact path='/collection/new'>
                <CollectionForm />
            </Route>

            <Route exact path='/collection/:collectionId(\d+)/edit'>
                <CollectionForm />
            </Route>

            <Route exact path='collection/:collectionId(\d+)/:gearId(\d+)/edit'>
                <GearForm />
            </Route>
        </>
    )
}