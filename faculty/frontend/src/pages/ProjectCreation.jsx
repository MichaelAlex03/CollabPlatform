import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectCreation = () => {
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

    return (
        <main className="font-fam text-gray-800 bg-white">
            <Navbar />
            <div className="max-w-7xl mx-auto p-8">
                <section id="overview" className="mb-16 p-8 bg-white">
                    <h1 className="text-[#501214] text-4xl font-bold mb-6 pb-2 border-b-2 border-gray-300">Faculty Project Creation</h1>
                    <p className="mb-6">Welcome, faculty members! This form is exclusively for Texas State University faculty to submit research projects and collaborate with talented students. Please fill out all fields with detailed information to ensure we can match your project with the best student contributors, 
                        particularly in STEM fields such as computer science, mathematics, and beyond.</p>
        
                    <h4 className="font-bold text-xl mb-2">Project Title</h4>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter project title" />
                    <p className="text-sm mb-6">Enter a clear and concise title that encapsulates the main objective or focus of your research project (e.g., "Developing a Machine Learning Model for Climate Prediction"). Avoid vague titles like "Research Project."</p>

                    <h4 className="font-bold text-xl mb-2">Project Description</h4>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter project Description" />
                    <p className="text-sm mb-6">Provide a comprehensive overview of your project. Include the specific research question or problem you aim to address, the methodology or approach you plan to use, anticipated outcomes or deliverables, and any relevant background context or prior work. This helps students understand the scope and purpose of your work.</p>

                    <h4 className="font-bold text-xl mb-2">Project Type</h4>
                    <select className="w-full p-2 border border-gray-300 rounded" defaultValue="">
                        <option value="" disabled>Select project type</option>
                        {projectTypes.map((type, index) => (
                            <option key={index} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    <p className="text-sm mb-6">Select the category that most accurately represents the primary focus or discipline of your project. This helps us align your project with students who have relevant expertise or interest in the specified STEM field.</p>

                    <h4 className="font-bold text-xl mb-2">Funding Requirements</h4>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter funding requirements" />
                    <p className="text-sm mb-6">Detail any financial needs for your project, such as costs for equipment (e.g., sensors, computers), software licenses, travel for fieldwork or conferences, or stipends for student researchers. If no external funding is needed, explicitly state "No funding required" to clarify resource availability.</p>

                    <h4 className="font-bold text-xl mb-2">Required Technical Skills (comma-separated)</h4>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter technical skills requirements" />
                    <p className="text-sm mb-6">Detail any financial needs for your project, such as costs for equipment (e.g., sensors, computers), software licenses, travel for fieldwork or conferences, or stipends for student researchers. If no external funding is needed, explicitly state "No funding required" to clarify resource availability.</p>
                    
                    <h4 className="font-bold text-xl mb-2">Required Non-Technical Skills (comma-separated)</h4>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter non-technical skills requirements" />
                    <p className="text-sm mb-6">Specify any soft skills or non-technical abilities that would enhance student participation, such as scientific writing, public speaking, project management, collaboration, or critical thinking. These skills can be crucial for project success.</p>

                    <h4 className="font-bold text-xl mb-2">Project Timeline</h4>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Enter Project Timeline" />
                    <p className="text-sm mb-6">Specify any soft skills or non-technical abilities that would enhance student participation, such as scientific writing, public speaking, project management, collaboration, or critical thinking. These skills can be crucial for project success.</p>

                    <div className="mb-6">
                        <label htmlFor="milestones" className="block font-bold text-xl mb-2">
                            Milestones (one per line)
                        </label>
                        <textarea
                            id="milestones"
                            className="w-full p-2 border border-gray-300 rounded mb-2"
                            placeholder="Enter Project Milestones (e.g., 'Prototype completed by March 2025')"
                            rows="4"
                            aria-describedby="milestones-help"
                        ></textarea>
                        <p id="milestones-help" className="text-sm text-gray-600">
                            Outline the key milestones or deliverables of your project, along with their estimated completion dates (e.g., "Prototype completed by March 2025," "Final report submitted by November 2025"). This provides a clear roadmap for students and evaluators.
                        </p>
                    </div>
                    
                </section>
            </div>
            <Footer />
        </main>
    );
}

export default ProjectCreation;