import React from 'react';


export default function Navbar() {
    return (
        <nav className="bg-gray-600 fixed top-0 w-full z-20">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="https://clipground.com/images/gambar-buku-clipart-5.png" alt="Logo" className="w-10 h-10 mr-4" />
                    <strong className="text-2xl font-bold text-white">StoryKu</strong>
                </div>
                <ul className="flex space-x-4">

                </ul>
            </div>
        </nav>
    )
}
