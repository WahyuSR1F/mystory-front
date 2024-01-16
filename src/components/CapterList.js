import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CapterList() {
    const navgate = useNavigate();
    return (
        <div className='p-2 relative ml-56 bg-slate-400 pb-10'>
            <div className='flex justify-between'>
                <h1 className='ml-20 text-2xl font-bold text-white'>List Capter</h1>
                <div className='flex'>
                    <button type='button' className='mx-1 p-2 text-xl bg-green-500 rounded-lg shadow-lg hover:bg-green-600' onClick={() => { navgate('/add-capter') }} >Add Capter</button>
                </div>
            </div>
            <div className='ml-20 pt-6 w-auto h-auto'>
                <table className="w-full border-collapse border-4 border-slate-200 text-white text-left">
                    <thead>
                        <tr>
                            <th className="p-2 w-1/6  border-4 border-slate-200 font-bold ">Title</th>
                            <th className="p-2 w-1/6  border-4 border-slate-200 font-bold ">Writes</th>
                            <th className="p-2 w-1/6  border-4 border-slate-200 font bold ">Category</th>
                            <th className="p-2 w-1/6  border-4 border-slate-200 font-bold ">Tags</th>
                            <th className="p-2 w-1/6  border-4 border-slate-200 font-bold ">Status</th>
                            <th className="p-2 w-1/6  border-4 border-slate-200 font-bold ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border border-slate-200 ">Indiana</td>
                            <td className="p-2 border border-slate-200 ">Indianapolis</td>
                            <td className="p-2 border border-slate-200 ">Indianapolis</td>
                            <td className="p-2 border border-slate-200 ">Indianapolis</td>
                            <td className="p-2 border border-slate-200 ">Indianapolis</td>
                            <td className="p-2 border border-slate-200 ">Indianapolis</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 ">Ohio</td>
                            <td className="border border-slate-200 ">Columbus</td>
                            <td className="border border-slate-200 ">Columbus</td>
                            <td className="border border-slate-200 ">Columbus</td>
                            <td className="border border-slate-200 ">Columbus</td>
                            <td className="border border-slate-200 ">Columbus</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-200 ">Michigan</td>
                            <td className="border border-slate-200 ">Detroit</td>
                            <td className="border border-slate-200 ">Detroit</td>
                            <td className="border border-slate-200 ">Detroit</td>
                            <td className="border border-slate-200 ">Detroit</td>
                            <td className="border border-slate-200 ">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
