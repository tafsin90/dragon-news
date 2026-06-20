import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  // console.log(news);

  const countRating = (rating) =>{
    const fullStars = Math.floor(rating);
    const halfstar = rating - fullStars >= 0.5;

    return (
      <div className="flex items-center gap-1 text-yellow-400">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} />
          ))}
        {halfstar && <FaStarHalfAlt />}
      </div>
    );
  }

  return (
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
        <p className="line-clamp-3">{news.details}</p>
        <Link href={`/news/${news._id}`}>
          <button className="btn btn-outline text-orange-500 w-30">
            Read More
          </button>
        </Link>

        {/* rating & total view */}
        <div className="flex justify-between items-center text-xl mt-4">
          <div className="flex items-center gap-3">
            <div>{countRating(news.rating.number)}</div>
            <p>{news.rating.number}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaEye />
            <p className="ml-1">{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
