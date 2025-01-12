import React from 'react';
import { FaFile } from "react-icons/fa";
import { TfiTag } from "react-icons/tfi";
import { MdInsertChart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { handleClick } from '../features/menustate';

const Menu = () => {
    const dispatch=useDispatch();

  return (
    <div className="flex flex-col justify-between items-center ">

      <div className="space-y-0 mt-10">
        <div className="flex items-center space-x-2 hover:bg-hovergreen p-4 rounded-md w-[200px]"> 
          <MdInsertChart />
          <h2 className='text-base'>Users</h2>
        </div> 
        <div className="flex items-center space-x-2  hover:bg-hovergreen p-4 rounded-md mt-0">
          <FaFile />
          <button type="button" onClick={()=>{
           dispatch(handleClick())
          }}><h2  className='text-base'>DF Products</h2></button>
        </div>   
        <div className="flex items-center space-x-2  hover:bg-hovergreen p-4 rounded-md">
          <TfiTag />
          <h2  className='text-base'>FNB Products</h2>
        </div>    
      </div>
      
    </div>
  );
};

export default Menu;
