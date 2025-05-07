import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import useAuth from "../../hooks/useAuth";

const FACULTY_URL = '/api/faculty'

const ProjectCreation = () => {

    const axiosPrivate = useAxiosPrivate();
    const { auth, setAuth } = useAuth();

    const projectTypes = [
        { value: "research", label: "Research" },
        { value: "commercialization", label: "Commercialization" },
        { value: "applied", label: "Applied" },
        { value: "applied", label: "Data Science" },
        { value: "applied", label: "Artificial Intelligence" },
        { value: "applied", label: "Machine Learning" },
        { value: "applied", label: "Cybersecurity" },
        { value: "applied", label: "Robotics" },
        { value: "applied", label: "Biotechnology" },
        { value: "applied", label: "Environmental Science" },
        { value: "applied", label: "Mathematics" },
        { value: "applied", label: "Applied Mathematics" },
        { value: "applied", label: "Statistics" },
        { value: "applied", label: "Physics" },
        { value: "applied", label: "Quantum Computing" },
        { value: "applied", label: "Chemistry" },
        { value: "applied", label: "Materials Science" },
        { value: "applied", label: "Engineering" },
        { value: "applied", label: "Software Engineering" },
        { value: "applied", label: "Network Security" },
        { value: "applied", label: "Bioinformatics" },
        { value: "applied", label: "Geospatial Analysis" },
        { value: "applied", label: "Computational Biology" },
        { value: "applied", label: "Signal Processing" },
        { value: "applied", label: "Computer Vision" },
        { value: "applied", label: "Numerical Analysis" },
        { value: "applied", label: "Systems" },
    ];

    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        type: '',
        cost: '',
        technicalSkills: '', // Will handle splitting comma seperated skills in backend
        nonTechnicalSkills: '',
        timeline: '',
        milestones: '' // Will handle splitting new line milestones in backend
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await axiosPrivate.post(FACULTY_URL, {
                projectData,
                id: auth.id
            });

            console.log("Hello33333");

            setAuth({
                ...auth,
                firstTime: false
            })

            setProjectData({
                title: '',
                description: '',
                type: '',
                cost: '',
                technicalSkills: '', 
                nonTechnicalSkills: '',
                timeline: '',
                milestones: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    console.log("Project", projectData)

    return (
        <main className="font-fam text-gray-800 bg-white">
            <Navbar />
            <form className="max-w-7xl mx-auto p-8" onSubmit={handleSubmit}>
                <section id="overview" className="mb-16 p-8 bg-white">
                    <h1 className="text-[#501214] text-4xl font-semibold mb-6 pb-2 border-b-2 border-gray-300">Faculty Project Creation</h1>
                    <p className="text-base mb-6">Welcome, faculty members! This form is exclusively for Texas State University faculty to submit research projects and collaborate with talented students. Please fill out all fields with detailed information to ensure we can match your project with the best student contributors,
                        particularly in STEM fields such as computer science, mathematics, and beyond.</p>

                    <h4 className="font-semibold text-xl mb-2">Project Title</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder="Enter Project Title"
                        name="title"
                        value={projectData.title}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <p className="text-sm mb-6">Enter a clear and concise title that encapsulates the main objective or focus of your research project (e.g., "Developing a Machine Learning Model for Climate Prediction"). Avoid vague titles like "Research Project."</p>

                    <h4 className="font-bold text-xl mb-2">Project Description</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder="Enter Project Description"
                        name="description"
                        value={projectData.description}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <p className="text-sm mb-6">Provide a comprehensive overview of your project. Include the specific research question or problem you aim to address, the methodology or approach you plan to use, anticipated outcomes or deliverables, and any relevant background context or prior work. This helps students understand the scope and purpose of your work.</p>

                    <h4 className="font-semibold text-xl mb-2">Project Type</h4>
                    <select className="w-full p-2 border border-gray-300 rounded" name="type" defaultValue={projectData.type} onChange={(e) => handleChange(e)}>
                        <option value="" disabled>Select Project Type</option>
                        {projectTypes.map((type, index) => (
                            <option key={index} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    <p className="text-sm mb-6">Select the category that most accurately represents the primary focus or discipline of your project. This helps us align your project with students who have relevant expertise or interest in the specified STEM field.</p>

                    <h4 className="font-semibold text-xl mb-2">Funding Requirements</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder="Enter Funding Requirements"
                        name="cost"
                        value={projectData.cost}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <p className="text-sm mb-6">Detail any financial needs for your project, such as costs for equipment (e.g., sensors, computers), software licenses, travel for fieldwork or conferences, or stipends for student researchers. If no external funding is needed, explicitly state "No funding required" to clarify resource availability.</p>

                    <h4 className="font-semibold text-xl mb-2">Required Technical Skills (comma-separated)</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder="Enter Technical Skills Requirements"
                        name="technicalSkills"
                        value={projectData.technicalSkills}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <p className="text-sm mb-6">Detail any financial needs for your project, such as costs for equipment (e.g., sensors, computers), software licenses, travel for fieldwork or conferences, or stipends for student researchers. If no external funding is needed, explicitly state "No funding required" to clarify resource availability.</p>

                    <h4 className="font-semibold text-xl mb-2">Required Non-Technical Skills (comma-separated)</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder="Enter Non-Technical Skills Requirements"
                        name="nonTechnicalSkills"
                        value={projectData.nonTechnicalSkills}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <p className="text-sm mb-6">Specify any soft skills or non-technical abilities that would enhance student participation, such as scientific writing, public speaking, project management, collaboration, or critical thinking. These skills can be crucial for project success.</p>

                    <h4 className="font-semibold text-xl mb-2">Project Timeline</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder="Enter Project Timeline"
                        name="timeline"
                        value={projectData.timeline}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <p className="text-sm mb-6">Specify any soft skills or non-technical abilities that would enhance student participation, such as scientific writing, public speaking, project management, collaboration, or critical thinking. These skills can be crucial for project success.</p>

                    <div className="mb-3">
                        <label htmlFor="milestones" className="block font-bold text-xl mb-2">
                            Milestones (one per line)
                        </label>
                        <textarea
                            id="milestones"
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            placeholder="Enter Project Milestones (e.g., 'Prototype completed by March 2025')"
                            name="milestones"
                            value={projectData.milestones}
                            onChange={(e) => handleChange(e)}
                            rows="4"
                            required
                        ></textarea>
                        <p id="milestones-help" className="text-sm text-gray-600">
                            Outline the key milestones or deliverables of your project, along with their estimated completion dates (e.g., "Prototype completed by March 2025," "Final report submitted by November 2025"). This provides a clear roadmap for students and evaluators.
                        </p>
                    </div>

                    <button className="bg-[#501214] text-white py-2 px-4 rounded hover:bg-[#BF8C35] mt-4 cursor-pointer" >Submit Project</button>

                    <section id="faq" className="mt-16">
                        <h2 className="text-[#501214] text-4xl font-semibold mb-6 pb-2 border-b-2 border-gray-300">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="mb-6">
                                <h3 className="text-[#501214] text-lg font-semibold mb-2">Who is eligible to submit a project?</h3>
                                <div className="bg-gray-100 p-6 rounded">
                                    <p>Only faculty members at Texas State University may submit research projects through this platform.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="mb-6">
                                <h3 className="text-[#501214] text-lg font-semibold mb-2">What kinds of projects can I submit?</h3>
                                <div className="bg-gray-100 p-6 rounded">
                                    <p>We accept a wide range of STEM-focused projects, including those in computer science, mathematics, engineering, natural sciences, and interdisciplinary fields like bioinformatics or quantum computing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="mb-6">
                                <h3 className="text-[#501214] text-lg font-semibold mb-2">How are students assigned to my project?</h3>
                                <div className="bg-gray-100 p-6 rounded">
                                    <p>Students are matched using a series of interviews that evaluate the technical and non-technical skills you specify, alongside their academic background, skills, and interests, ensuring a strong fit for your project’s needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[#501214] text-lg font-semibold mb-2">Am I allowed to submit more than one project?</h3>
                            <div className="bg-gray-100 p-6 rounded">
                                <p>Yes, faculty can submit multiple projects. Each will be processed and matched with students independently based on its requirements.</p>
                            </div>
                        </div>
                    </section>

                </section>
            </form>
            <Footer />
        </main>
    );
}

export default ProjectCreation;