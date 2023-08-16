import React from 'react'
import Navbar from '../Common/Navbar'
import Chat from "../Chat/Chat"


function Layout() {
    return (
        <div className='w-full max-w-[600px] mx-auto h-[100vh]'>
            <Navbar />
            <Chat />
        </div>
    )
}

export default Layout