import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSection = () => {
  return (
    <div>
      <div>
        <h1 className="mb-2 font-bold text-lg">Login With</h1>
        <div className='flex flex-col gap-4'>
          <button className='btn border-blue-500 text-blue-500 font-normal'>
            <FaGoogle />
            Login with Google
          </button>
          <button className='btn border-black'>
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSection