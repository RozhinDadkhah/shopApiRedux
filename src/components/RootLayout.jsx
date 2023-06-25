import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import NavbarSection from './NavbarSection'
import store from '../store/store'


const RootLayout = () => {
    return (
        <>
            <Provider store={store}>
                <NavbarSection />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    )
}

export default RootLayout