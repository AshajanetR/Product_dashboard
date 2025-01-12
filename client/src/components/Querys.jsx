import React, { useState } from 'react';
import { BsPen } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { dutyfreedata } from '../initialdata';
import Form from './form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleVisiblity } from '../features/formvisible';

const Querys = () => {
    const dispatch=useDispatch();
    const isVisible=useSelector((state)=>state.form.value);
    

  return (
    <div className={``}>
      {dutyfreedata.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col space-y-4 border-4 p-3 rounded-md mr-10 mb-4 ${isVisible ? 'blur-md' : 'none'}`}
        >
          <h2 className="underline font-semibold text-geryblack">
            {item.title}
          </h2>
          <div className="flex justify-between">
            <div className="flex space-x-[200px] text-base">
              <p className="w-[200px] text-geryblack">{item.location}</p>
              <div className="flex space-x-[100px]">
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
            </div>

            <div className="flex space-x-16">
              <div className="flex space-x-[40px]">
                <button
                  className="text-green"
                  onClick={() => {
                    dispatch(handleVisiblity())
                  }}
                >
                  <BsPen />
                </button>
                <button className="text-green">
                  <ImBin />
                </button>
              </div>
              <div className="flex space-x-4 items-center">
  <p>Complaint</p>
  <input 
    type="checkbox" 
    className="peer appearance-none w-4 h-4 border-2 border-gray-400  checked:bg-green accent-green" 
  />
</div>

            </div>
          </div>
        </div>
      ))}

      {isVisible && (
            <div className="fixed inset-0 z-50 m-[190px]  ">
                <Form />
            </div>
)}
    </div>
  );
};

export default Querys;
