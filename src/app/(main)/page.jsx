import Catagories from "@/components/homepage/leftSection/Catagories";
import RightSection from "@/components/homepage/rightSection/RightSection";

const getcatagories = async () =>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}

const getNewsByCatagoruId = async(catagory_Id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catagory_Id}`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const catagories = await getcatagories();
  // console.log(catagories);

  const newsByCatagories = await getNewsByCatagoruId("04");
  // console.log(newsByCatagories);
  
  return (
    <div className="w-10/12 mx-auto grid grid-cols-4 gap-4 my-12">
      {/* all-catagoriess */}
      <div className="col-span-1">
        <Catagories catagories={catagories} activeId={null} />
      </div>
      <div className="col-span-2">
        <h1 className="mb-2 font-bold text-lg">Dragon News Home</h1>
        {newsByCatagories.map((news) => {
          return (
            <div key={news._id}>
              <h1>{news.title}</h1>
            </div>
          );
        })}
      </div>
      <div className="col-span-1">
        <RightSection />
      </div>
    </div>
  );
}
