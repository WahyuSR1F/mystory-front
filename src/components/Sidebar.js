import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="fixed  inset-x-0 z-10 flex flex-col flex-shrink-0 h-screen w-64 pt-16 bg-gray-500">
            <ul className="flex flex-col mt-4 p-3">
                <li className="">
                    <button className="text-white font-semibold text-blue-500 hover:underline" onClick={() => { navigate('/') }}>Home</button>
                </li>
                <li className="">
                    <button className=" text-white font-semibold text-blue-500 hover:underline" onClick={() => { navigate('/story') }}>Manajement Story</button>
                </li>
            </ul>
        </div>
    )
}
