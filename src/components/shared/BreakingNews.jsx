import React from 'react'
import Marquee from 'react-fast-marquee'

const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 container mx-auto'>
        <button className='btn bg-red-500 text-white'>Breaking news</button>
        <Marquee>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate quas commodi fuga nesciunt sunt saepe officiis, aperiam necessitatibus nihil.
        </Marquee>
    </div>
  )
}

export default BreakingNews