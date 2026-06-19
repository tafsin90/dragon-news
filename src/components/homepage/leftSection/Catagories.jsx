import Link from 'next/link';
import React from 'react'

const Catagories = ({ catagories,activeId}) => {
  return (
    <div>
      <h1 className="mb-2 font-bold text-lg">All Categories</h1>
      <ul className="flex flex-col gap-2">
        {catagories.map((catagory, index) => {
          return (
            <li key={index} className={`${activeId === catagory.category_id && "bg-slate-200"} text-md font-semibold text-center bg-slate-100 rounded-md hover:cursor-pointer hover:bg-slate-50`}>
              <Link href={`/catagory/${catagory.category_id}`} className="p-2 block">
                {catagory.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Catagories