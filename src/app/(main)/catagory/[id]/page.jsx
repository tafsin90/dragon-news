import Catagories from "@/components/homepage/leftSection/Catagories";
import NewsCard from "@/components/homepage/NewsCard";
import RightSection from "@/components/homepage/rightSection/RightSection";
import { getcatagories, getNewsByCatagoruId } from "@/lib/dataFetch";

const CatagoryNewsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  const catagories = await getcatagories();
  const newsByCatagories = await getNewsByCatagoruId(id);

  return (
    <div className="w-10/12 mx-auto grid grid-cols-4 gap-4 my-12">
      {/* left section */}
      <div className="col-span-1">
        <Catagories catagories={catagories} activeId={id} />
      </div>

      {/* middle section */}
      <div className="col-span-2">
        <h1 className="mb-2 font-bold text-lg">Dragon News Home</h1>
        {newsByCatagories.length > 0 ? (
          newsByCatagories.map((news) => {
            return <NewsCard key={news._id} news={news} />;
          })
        ) : (
          <h1 className="text-xl font-bold">No news found</h1>
        )}
      </div>

      {/* right section */}
      <div className="col-span-1">
        <RightSection />
      </div>
    </div>
  );
};

export default CatagoryNewsPage;
