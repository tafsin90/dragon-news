import Catagories from '@/components/homepage/leftSection/Catagories';
import RightSection from '@/components/homepage/rightSection/RightSection';
import React from 'react'



const CatagoryNewsPage = async ({params}) => {
  const {id} = await params
  // console.log(id);
  

  const getcatagories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data.news_category;
  };

  const getNewsByCatagoruId = async (catagory_Id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catagory_Id}`);
    const data = await res.json();
    return data.data;
  };

  const catagories = await getcatagories();
  const newsByCatagories = await getNewsByCatagoruId(id);


  return (
    <div className="w-10/12 mx-auto grid grid-cols-4 gap-4 my-12">
      {/* all-catagoriess */}
      <div className="col-span-1">
        <Catagories catagories={catagories} activeId={id} />
      </div>
      <div className="col-span-2">
        <h1 className="mb-2 font-bold text-lg">Dragon News Home</h1>
        {newsByCatagories.length>0? newsByCatagories.map((news) => {
          return (
            <div key={news._id}>
              <h1>{news.title}</h1>
            </div>
          );
        }):<h1 className="text-xl font-bold">No news found</h1>}
      </div>
      <div className="col-span-1">
        <RightSection />
      </div>
    </div>
  );
}

export default CatagoryNewsPage