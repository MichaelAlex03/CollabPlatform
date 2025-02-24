import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }
    return (
        <main class="font-fam bg-gray-50">
            
            <Navbar />

            <div class="max-w-6xl mx-auto p-8">
               <section id="overview" class="mb-16 p-8 bg-white rounded-md">
                    <h1 class="text-[#501214] text-4xl font-bold mb-6 pb-2 border-b-2 border-gray-300">Student Research Collaboration Platform</h1>
                    <p class="mb-4 text-lg">Join a university-wide initiative that connects students with real-world faculty projects,
                        helping you gain valuable experience and boost your career prospects.
                    </p>
                    <ul class="list-none space-y-2 text-lg">
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Gain hands-on experience by working on real faculty projects.
                        </li>
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Develop technical and non-technical skills highly valued by employers.
                        </li>
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Enhance your resume with project-based learning and mentorship.
                        </li>
                    </ul>
                </section>

                <section class="text-center p-12 my-8 rounded-md" style={{ backgroundColor: '#501214' }}>
                    <h2 class="text-[#ffffff] font-bold text-3xl mb-4">Start Your Journey Today</h2>
                    <p class="mb-6 text-lg text-[#ffffff]">Sign up, showcase your skills, and get matched with exciting projects that align with your career goals.</p>
                    <button onClick={handleLoginClick} className="bg-white text-[#501214] text-x font-medium py-[15px] px-[25px] rounded-md">Join Now</button>
                </section>

                <section id="overview" class="mb-16 p-8 bg-white rounded-md">
                    <h1 class="text-[#501214] text-4xl font-bold mb-6 pb-2 border-b-2 border-gray-300">How It Works</h1>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="p-4 bg-gray-100 rounded-md lift-up">
                            <h2 class="text-lg font-bold mb-2">1.Create Your Profile</h2>
                            <p class="text-base">Sign up and complete your student profile, including details about your skills, interests, availability, and academic background.</p>
                        </div>
                        <div class="p-4 bg-gray-100 rounded-md lift-up">
                            <h2 class="text-lg font-bold mb-2">2.Interview & Skill Assessment</h2>
                            <p class="text-base">Participate in a one-on-one interview to discuss your skills in-depth and assess your readiness for projects.</p>
                        </div>
                        <div class="p-4 bg-gray-100 rounded-md lift-up">
                            <h2 class="text-lg font-bold mb-2">3.Gain Experience</h2>
                            <p class="text-base">If selected, work on real-world projects, develop new skills, collaborate with faculty, and build your resume for future opportunities.</p>
                        </div>
                    </div>
                </section>

                <section id="benefits" class="bg-white p-12 my-8">
                    <h2 class="text-[#501214] text-4xl font-bold mb-6 pb-2 border-b-2 border-gray-300">Is This Right for Me?</h2>
                    <div class="space-y-6">
                        <div class="mb-6 text-lg">
                            <h3 class="text-[#501214] font-semibold mb-2">This platform is designed for students at all levels who are looking for
                                real-world experience. It might be a great fit if:
                            </h3>
                            <ul class="list-none space-y-2">
                                <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                    You want to apply your skills in a practical setting and build a strong resume.
                                </li>
                                <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                    You are eager to collaborate with faculty on meaningful projects.
                                </li>
                                <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                    You are looking to develop new technical or soft skills through mentorship and experience.
                                </li>
                                <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                    You are interested in project-based learning and want to explore different disciplines.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="faq" class="max-w-[1200px] mx-auto bg-white p-8 mb-16 rounded-md">
                    <h2 class="text-[#501214] text-4xl font-bold mb-6 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>

                    <div class="space-y-6 text-lg">
                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">Who can join the platform?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>Any student from any discipline interested in gaining hands-on project experience can apply.</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">Do I need prior experience?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>No! We provide guidance and skill development opportunities for students at all levels.</p>
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">Is this a paid opportunity?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>Some projects offer stipends, while others provide valuable experience and mentorship.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}

export default LandingPage