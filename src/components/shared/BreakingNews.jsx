import React from 'react'
import Marquee from 'react-fast-marquee'

const BreakingNews = () => {
  const news = [
    {
      id: 1,
      title: "New Technology Released Today",
    },
    {
      id: 2,
      title: "Scientists Discover New Planet",
    },
    {
      id: 3,
      title: "Local Team Wins Championship",
    },
    {
      id: 4,
      title: "City Council Approves New Budget",
    },
  ];

  
  return (
    <div className="flex justify-between gap-4 w-10/12 mx-auto bg-gray-200 py-2 px-1 rounded-md">
      <button className="btn bg-red-500 text-white">Breaking news</button>
      <Marquee pauseOnHover speed={80} className='hover:cursor-pointer'>
        {news.map((newsItem) => (
          <span key={newsItem.id} className="mx-4">
            {newsItem.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default BreakingNews