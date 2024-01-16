
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCapter() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(event.target);
        const inputValues = Array.from(formData.entries())
            .map(([name, value]) => ({ name, value }));

        console.log(inputValues); // Log the array of input values
    };


    return (
        <div className='p-2 ml-56 bg-slate-400 pt-16 pb-9'>
            <div className='ml-20 w-full h-full'>
                <button className="text-white hover:underline" onClick={() => { navigate('/add-story') }}>List Capter</button>
                <h1 className='py-3 text-2xl font-bold text-white'>Add Story</h1>
            </div>
            <div className='ml-20 py-3 bg-slate-200 rounded-lg'>
                <form action='' className='p-2' method='POST' onSubmit={handleSubmit}>
                    <div className='p-0'>
                        <p className='text-sm ml-3 w-full font-bold'>Title</p>
                        <input type='text' name='title' className='w-full mx-1 p-2 rounded-md' placeholder='Title' />
                    </div>

                    <div className='p-0'>
                        <p className='text-sm ml-3 w-full font-bold'>Story</p>
                        <textarea name='story'
                            className='w-full h-48 mx-1 p-2 rounded-md'
                            placeholder='Tulis cerita Anda di sini...'
                        />
                    </div>
                    <div className='py-2 flex justify-end'>
                        <button
                            className="px-4 py-2 rounded-md text-red-600 bg-white hover:bg-red-200"
                            type="button"
                            onClick={() => navigate('/add-story')}
                        >
                            Cancle
                        </button>
                        <button
                            className="px-4 mx-2 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
