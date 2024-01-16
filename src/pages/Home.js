import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ContentHome from '../components/ContentHome';
import AddCapter from '../components/AddCapter';
import CreateStory from './CreateStory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManajemenStory from './ManajemenStory';

export default function Home() {
    return (
        <Router>
            <>
                <Navbar />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<ContentHome />} />
                    <Route path="/story" element={<ManajemenStory />} />
                    <Route path="/add-story" element={<CreateStory />} />
                    <Route path="/add-capter" element={<AddCapter />} />
                </Routes>
            </>
        </Router>
    );
}