import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleVisiblity } from '../features/formvisible';

const Form = () => {
    const dispatch=useDispatch();

  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Product Updated Sucessfully');
    dispatch(handleVisiblity())
  };

  return (
    <div className={`flex justify-center items-center w-[1300px]`}>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-2xl w-1/5">
        <h2 className="text-lg font-semibold mb-3 text-center text-[#468585]">Edit Product</h2>

        <div className="mb-2">
          <label htmlFor="title" className="block text-xs font-semibold mb-1 text-[#468585]">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-[#468585] rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-[#468585] text-xs"
            required
          />
        </div>


        <div className="mb-2">
          <label htmlFor="quantity" className="block text-xs font-semibold mb-1 text-[#468585]">Qty</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-[#468585] rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-[#468585] text-xs"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="unit" className="block text-xs font-semibold mb-1 text-[#468585]">Unit</label>
          <select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border border-[#468585] rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-[#468585] text-xs"
            required
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="oz">oz</option>
          </select>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#468585] text-white px-3 py-1 rounded-sm hover:bg-[#367474] focus:outline-none focus:ring-2 focus:ring-[#468585] text-xs"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
