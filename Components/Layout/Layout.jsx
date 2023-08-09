import React from 'react'
import Navbar from '../Common/Navbar'
import Chat from "../Chat/Chat"


function Layout() {
    return (
        <div className='w-full max-w-3xl mx-auto h-screen'>
            <Navbar />
            <Chat />
        </div>
    )
}

export default Layout