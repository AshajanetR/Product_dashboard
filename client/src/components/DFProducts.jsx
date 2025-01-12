import React from 'react'
import { BiCategory } from "react-icons/bi";
import { BsTag } from "react-icons/bs";
import { MdOutlinePushPin } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import Querys from './Querys';
import { useSelector } from 'react-redux';

const DFProducts = () => {
    const isVisible=useSelector((state)=>state.form.value);
  return (
    <div >
            <div className={`flex justify-between ${isVisible ? 'blur-md' : 'none'}`}>
                    <div className='mx-8 mb-5'>
                        <h2 className='text-lg font-semibold'>DF Products</h2>
                        <p className='text-xs text-geryblack'>View and manage your products here</p>
                    </div>
                    <div className='mr-10 flex items-center space-x-2 mb-[50px]'>
    <div className="relative">
        <input 
            type="text" 
            placeholder="Title" 
            className="border border-black rounded-md  h-[20px] placeholder:text-xs pl-2 pr-8 pt-1 pb-2 w-[144px]" 
        />
        <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-500" />
    </div>
</div>
             </div>
            <div className={`flex justify-between ${isVisible ? 'blur-md' : 'none'} `}>
            <div className='flex '> 
                <div className='ml-9'>
                    <div className='flex items-center space-x-1'>
                            <label className="block mb-0 font-semibold text-xs">Category</label>
                            <BiCategory />
                    </div>
                    <select className="border border-black rounded-md w-[100px] text-xs bg-lightgreen">
                        <option value="" className="text-xs" selected >All</option>
                        <option value="option1">Beauty</option>
                        <option value="option2">Liquor</option>
                    </select>
                </div>

                <div className='ml-9'>
                    <div className='flex items-center space-x-1'>
                            <label className="block mb-0 font-semibold text-xs">Brand</label>
                            <BsTag />
                    </div>
                    <select className="border border-black rounded-md w-[100px] text-xs  bg-lightgreen">
                        <option value="" className="text-xs" selected >All</option>
                        <option value="option1">nars</option>
                        <option value="option2">smirnoff</option>
                        <option value="option3">baileys</option>
                        <option value="option4">burberry</option>
                    </select>
                </div>

                <div className='ml-9'>
                    <div className='flex items-center '>
                            <label className="block mb-0 font-semibold text-xs">Location</label>
                            <MdOutlinePushPin />
                    </div>
                    <select className="border border-black rounded-md w-[100px] text-xs  bg-lightgreen">
                        <option value="" className="text-xs" selected >All</option>
                        <option value="option1">Aelia Auckland</option>
                        <option value="option2">Heinemann Sydney</option>
                        <option value="option3">Lotte Brisbane</option>
                    </select>
                </div>

                <div className='ml-9'>
                    <div className='flex items-center space-x-1'>
                        <label className="block mb-0 font-semibold text-xs">Price Rank</label>
                        <SlBadge />
                    </div>
                    <select className="border border-black rounded-md w-[100px] text-xs  bg-lightgreen">
                        <option value="" className="text-xs" selected >All</option>
                        <option value="option1">1</option>
                        <option value="option2">2</option>
                        <option value="option3">3</option>
                        <option value="option4">4</option>
                        <option value="option5">5</option>
                        <option value="option6">6</option>
                        <option value="option7">7</option>
                        <option value="option8">8</option>
                        <option value="option9">9</option>
                    </select>
                </div>   
            </div>
            
            <div>
            </div>
                    <div className='ml-9 mr-10'>
                        <div className='flex items-center space-x-1'>
                                <label className="block mb-0 font-semibold text-xs">Sort By</label>
                                <CiFilter />
                        </div>
                        <select className="border border-black rounded-md w-[144px] h-[20px] text-xs  bg-lightgreen">
                            <option value="" selected className="text-xs">None</option>
                            <option value="option1">Price - Low to High</option>
                            <option value="option2">Price - High to Low</option>
                            <option value="option3">Price Rank - Low to High</option>
                            <option value="option4">Price Rank - High to Low</option>
                        </select>
                    </div>
            </div>
            <div className='mt-8 ml-9'>
            <Querys />
            </div>  
        

    </div>
  );
}

export default DFProducts;
