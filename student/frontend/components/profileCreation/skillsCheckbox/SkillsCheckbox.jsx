import { useState } from 'react'

const SkillsCheckbox = () => {

    const [javaScript, setJavascript] = useState(false)

    return (
        <div className='flex flex-col items-center w-full'>

            <div>
                <h2>Select the following skills that you have:</h2>
            </div>

            <div className='flex flex-col gap-4 mt-4'>
                <label className='flex flex-row gap-4'>
                    <input type='Checkbox' />
                    <p>AI - Neural Networks</p>
                </label>

                <label className='flex flex-row gap-4'>
                    <input type='Checkbox' />
                    <p>AI - LLMS</p>
                </label>

                <label className='flex flex-row gap-4'>
                    <input type='Checkbox' />
                    <p>Data Analysis</p>
                </label>

                <label className='flex flex-row gap-4'>
                    <input type='Checkbox' />
                    <p>MERN Stack</p>
                </label>

                <label className='flex flex-row gap-4'>
                    <input type='Checkbox' />
                    <p>Web Designer</p>
                </label>
            </div>

        </div>
    )
}

export default SkillsCheckbox