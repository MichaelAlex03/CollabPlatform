import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <body class="font-sans text-gray-800 bg-white">
            <Navbar />

            <main class="max-w-6xl mx-auto p-8">
                <section id="overview" class="mb-16 p-8 bg-white">
                    <h1 class="text-[#501214] text-3xl mb-6 pb-2 border-b-2 border-gray-300">Faculty Project Collaboration
                        Platform</h1>
                    <p class="mb-4">A comprehensive solution addressing critical challenges in research project resource
                        allocation, technical expertise, and interdisciplinary collaboration.</p>
                    <ul class="list-none space-y-2">
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Overcome technical resource limitations across analytics, data science, and applied computer science
                        </li>
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Support faculty with limited technical background in identifying and applying advanced tools</li>
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Facilitate commercialization and applied research initiatives</li>
                        <li class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                            Provide structured project and resource management training</li>
                    </ul>
                </section>

                <section class="bg-gray-100 text-center p-12 my-8">
                    <h2 class="text-[#501214] text-3xl mb-4">Transform Your Research Today</h2>
                    <p class="mb-6">Bridge technical gaps, access diverse student talent, and accelerate your project's
                        potential.</p>
                    <a href="#"
                        class="inline-block px-6 py-3 bg-[#501214] text-white text-lg rounded-md hover:bg-[#3d0e0f] transition">Start
                        Your Research Project</a>
                </section>

                <section id="process" class="mb-16 p-8 bg-white">
                    <h2 class="text-[#501214] text-3xl mb-6 pb-2 border-b-2 border-gray-300">Project Submission and Engagement
                        Process</h2>
                    <div class="grid md:grid-cols-3 gap-8 mt-8">
                        <div class="bg-gray-100 p-6 rounded-md transition transform hover:translate-y-[-2px]">
                            <h3 class="text-lg font-semibold">1. Create an account on the platform and complete the project
                                information forms</h3>
                            <div class="my-4">
                                <ul class="list-none space-y-2">
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Project type (Research, Commercialization, Applied)</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Project details and goals</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Project timeline and milestones</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Funding requirements</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Technical and non-technical skill needs</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gray-100 p-6 rounded-md transition transform hover:translate-y-[-2px]">
                            <h3 class="text-lg font-semibold">2. Participate in discovery interview(s)</h3>
                            <div class="my-4">
                                <ul class="list-none space-y-2">
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Analysis of project and identify potential for assistance</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Identify gaps in faculty knowledge and skillsets</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Determine computational resource needs</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gray-100 p-6 rounded-md transition transform hover:translate-y-[-2px]">
                            <h3 class="text-lg font-semibold">3. Targeted Student Matching</h3>
                            <div class="my-4">
                                <ul class="list-none space-y-2">
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Identify students from talent pool and assign to project</li>
                                    <li
                                        class="relative pl-6 before:content-['•'] before:text-[#501214] before:absolute before:left-0">
                                        Develop properly scoped project work plan aligned with students’ capabilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="faq" class="max-w-[1200px] mx-auto p-8 mb-16">
                    <h2 class="text-[#501214] text-4xl mb-6 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>

                    <div class="space-y-6">
                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">Who can use the platform?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>Open to all faculty across disciplines, with special support for non-technical researchers
                                    seeking to
                                    integrate advanced analytics, AI, and data science tools.</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">How are student skills developed?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>Students undergo a comprehensive skill evaluation process:</p>
                                <ul class="mt-4 space-y-4">
                                    <li
                                        class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#501214]">
                                        Initial interview to assess current skills and project readiness</li>
                                    <li
                                        class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#501214]">
                                        Detailed skill gap analysis conducted by platform experts</li>
                                    <li
                                        class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#501214]">
                                        Personalized skill development recommendations</li>
                                    <li
                                        class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#501214]">
                                        Potential option to learn necessary skill and reapply after completing suggested
                                        training</li>
                                    <li
                                        class="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#501214]">
                                        Continuous support to bridge technical and non-technical skill gaps</li>
                                </ul>
                                <p class="mt-4">No student is turned away. If skills are insufficient, targeted guidance is
                                    provided to
                                    help students become project-ready.</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">My project is not technical. Can I still apply?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>Of course. You might not know how data and computer science can be applied to your project.
                                    In the
                                    end, you might not need our help but you also might be surprised.</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">I understand data science well so why should I engage
                                with
                                you?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>Having technical skills does not ensure good project and people management skills.
                                    Additionally, you
                                    might not be considering how a wide variety of other skillsets such as design, business
                                    development,
                                    or marketing could effect the quality of your project.</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">My project is only one semester long. Is that okay?
                            </h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>We are currently collaborating on projects of all lengths.</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">Will you management my project for me?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>We will not but we can assist you in effectively planning your project, scoping work, and
                                    help with
                                    managing the students working on your project</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-[#501214] font-semibold mb-2">Do I have to pay the students?</h3>
                            <div class="bg-gray-100 p-6 rounded">
                                <p>We believe that it is important to provide compensation to our hard working students since in
                                    the
                                    main they will not be receiving credit for working with you. Many of our students work too
                                    many
                                    hours to pay for their education and proper compensation allows an academic focus.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </body>
    )
}

export default LandingPage