export const getcatagories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
};

export const getNewsByCatagoruId = async (catagory_Id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catagory_Id}`);
  const data = await res.json();
  return data.data;
};
export const getNewsByNewsId = async (news_Id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/news/${news_Id}`,
  );
  const data = await res.json();
  return data.data[0];
};
