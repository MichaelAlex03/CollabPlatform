import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <main class="font-fam text-gray-800 bg-white">
            
            <Navbar />

            <div class="max-w-6xl mx-auto p-8">
                <section id="overview" class="mb-16 p-8 bg-white">
                    <h1 class="text-[#501214] text-3xl mb-6 pb-2 border-b-2 border-gray-300">Student Project Collaboration
                        Platform</h1>
                </section>

            </div>

            <Footer />
        </main>
    )
}

export default LandingPage