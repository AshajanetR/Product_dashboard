import React from 'react';
import Menu from '../../components/Menu';
import { BsPatchMinus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import DFProducts from '../../components/DFProducts';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const dutyfreemenu = useSelector((state) => state.duty?.value);
  const isVisible = useSelector((state) => state.form.value);

  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
     
      <div
        className={`fixed top-0 left-0 w-1/6 h-full bg-green text-white text-xl flex flex-col ${
          isVisible ? 'blur-md' : ''
        } rounded-tr-xl rounded-br-xl`}
      >
        <div className="font-semibold px-[40px] py-12">
          <p>LOGO</p>
        </div>

        <Menu />

        <div className="flex items-center space-x-2 mt-auto mb-10 px-[40px]">
          <BsPatchMinus />
          <button onClick={() => navigate("/")}>
            <h2 className="text-base">Log Out</h2>
          </button>
        </div>
      </div>

      
      <div className="ml-[16.67%] flex-1">
        <div
          className={`text-2xl font-semibold mx-8 my-9 ${
            isVisible ? 'blur-md' : ''
          }`}
        >
          <p>Welcome Admin</p>
          <hr className="my-5 border-t-4"></hr>
        </div>
        <div>
          {dutyfreemenu ? (
            <DFProducts />
          ) : (
            <p>Click DF Products menu to view data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
