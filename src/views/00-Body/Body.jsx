import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import { Home } from '../01-Home/Home'

export const Body = () => {
    return (
        <>
        <Routes>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/" element={<Home />}/>
        </Routes>
        </>
    )
}