import { getNewsByNewsId } from "@/lib/dataFetch";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaLongArrowAltLeft, FaStar } from "react-icons/fa";

const NewsDetailsPage = async ({ params }) => {
  const {id } = await params;
  // console.log("id",id);

  const news = await getNewsByNewsId(id);
  // console.log(news);
  
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="card bg-base-100 p-3 shadow-sm">
        {/* author info */}
        <div className="flex justify-between items-center bg-slate-200 px-2 py-3 ">
          <div className="flex items-center gap-2">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">
                {format(new Date(news.author?.published_date), "yyyy-MM-dd")}
              </p>
            </div>
          </div>
          <div className="flex text-3xl items-center gap-1">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>
        {/* title, image & description */}
        <div className="card-body">
          <h2 className="card-title text-2xl">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={600}
              height={600}
              className="w-full"
            />
          </figure>
          <p>{news.details}</p>

          {/* rating & total view */}
          <div className="flex justify-between items-center text-xl mt-4">
            <div className="flex items-center gap-3 ">
              <FaStar className="text-orange-500" />
              <p>{news.rating.number}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              <p className="ml-1">{news.total_view}</p>
            </div>
          </div>
        </div>
      </div>

      <Link href={`/news/${news.category_id}`}>
        <button className="btn btn-outline text-white bg-red-500 w-1/3">
          <FaLongArrowAltLeft />
          <p>All news in this category</p>
        </button>
      </Link>
    </div>
  );
}

export default NewsDetailsPage