import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddStory() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [coverImage, setCoverImage] = useState(null);
    const [imageError, setImageError] = useState(null);

    const handleTagChange = (value) => {
        const newTags = value.split(",").map((tag) => tag.trim());
        setTags(newTags);
    };

    const handleTagRemove = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            setCoverImage(file);
            setImageError(null);
        } else {
            setImageError('Please select an image file.');
            setCoverImage(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        // Get all text input values
        const data = Object.fromEntries(formData.entries());

        // Separate file input into a dedicated array
        const files = [formData.get('coverImage')];

        // Combine data and files into a single array
        const combinedData = [data, files];

        // Console log the combined data
        console.log(combinedData);

        // You can now send this combinedData to your server or process it further
    };

    return (
        <div className='p-2 ml-56 bg-slate-400 pt-16 pb-9'>
            <div className='ml-20 w-full h-full'>
                <button className="text-white hover:underline" onClick={() => { navigate('/story') }}>List Story</button>
                <h1 className='py-3 text-2xl font-bold text-white'>Add Story</h1>
            </div>
            <div className='ml-20 py-3 bg-slate-200 rounded-lg'>
                <form action='' className='p-2' method='POST' onSubmit={handleSubmit}>
                    <div className='flex justify-around'>
                        <p className='text-sm ml-3 w-full font-bold'>Title</p>
                        <p className='text-sm w-full font-bold'>Writer Name</p>
                    </div>
                    <div className='pt-2 flex justify-around'>
                        <input type='text' className='w-full mx-1 p-2 rounded-md' placeholder='Title' />
                        <input type='text' className='w-full mx-1 p-2 rounded-md' placeholder='Writer Name' />
                    </div>
                    <div className='py-2'>
                        <p className='text-sm ml-3 font-bold pb-2'>Synopsis</p>
                        <textarea className='mx-1 p-2 w-full h-16 rounded-md' name="" id="" placeholder='Synopsis...'></textarea>
                    </div>
                    <div className='py-2 flex justify-around'>
                        <div className='relative w-full '>
                            <p className='text-sm ml-3 font-bold'>Category</p>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className=" mx-1 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value=''>Category</option>
                                <option value='Financial'>Financial</option>
                                <option value='Technology'>Technology</option>
                                <option value='Health'>Health</option>
                            </select>
                        </div>

                        <div className='relative w-full'>
                            <p className='text-sm ml-3 font-bold'>Category</p>
                            <input
                                type="text"
                                className=" mx-1 p-2 w-full bg-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Masukkan tag..."
                                onChange={(e) => handleTagChange(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleTagChange(e.target.value);
                                    }
                                }}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-4 pointer-events-none">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-3 py-1 mr-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full"
                                    >
                                        {tag}
                                        <button
                                            className="ml-2 inline-flex items-center justify-center h-4 w-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            onClick={() => handleTagRemove(tag)}
                                        >x</button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <p className='text-sm ml-3 w-full font-bold'>Cover Image</p>
                        <p className='text-sm w-full font-bold'>Status</p>
                    </div>
                    <div className='pt-2 flex justify-around'>
                        <input type='file' className='w-full mx-1 p-2 rounded-md' placeholder='image cover...' onChange={handleImageChange} />
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className=" mx-1 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option value=''>Status</option>
                            <option value='Public'>Public</option>
                            <option value='Draft'>Draft</option>

                        </select>
                    </div>
                    <div className='py-2 flex justify-end'>
                        <button
                            className="px-4 py-2 rounded-md text-red-600 bg-white hover:bg-red-200"
                            type="button"
                            onClick={() => navigate('/story')}
                        >
                            Cancle
                        </button>
                        <button
                            className=" mx-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700"
                            type="submit"
                        >
                            Submit
                        </button>



                    </div>
                </form>
            </div>
        </div>
    );
}