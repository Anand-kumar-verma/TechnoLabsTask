import React, { useEffect, useState } from "react";
import hill_image from "../../assets/hill_image.png";
import axios from "axios";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const Home = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const getDataFromAPI = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/posts");
      setData(data?.data?.posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  console.log(data);
  return (
    <div className="w-full h-screen ">
      <img className="h-[65%] w-full" src={hill_image} />
      <div className="!w-full !absolute !flex !justify-center ">
        <div className="flex justify-center flex-col absolute lg:mt-[-12%] mt-[-45%] items-center  font-bold lg:w-[50%] w-[60%] text-center">
          <img
            className="!h-32 !w-32 rounded-full"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div className="lg:text-[30px] text-[20px] mt-4 text-neutral-50 ">
            LEARN MORE
            <p className="flex justify-center items-center gap-2 dark:text-neutral-50 text-neutral-900">
              <div className="flex flex-col">
              <BiSolidLike />
              <span className="!text-sm rounded-full text-center  p-1">
                  {data?.[index]?.reactions?.likes}
                </span>
              </div>
              <div className="flex flex-col">
              <BiSolidDislike />
              <span className="!text-sm rounded-full text-center  p-1">
                  {data?.[index]?.reactions?.dislikes}
                </span>
              </div>
            </p>
          </div>
          <p className="dark:text-neutral-50 text-neutral-900 mt-5">
            {data?.[index]?.body}
          </p>
          <p className="!mt-4">{data?.[index]?.title}</p>
          <div className="flex gap-3 !text-[15px]">
            <button
              onClick={() => {
                setIndex(index > 0 ? index - 1 : 0);
              }}
              className="!bg-purple-700 text-white !rounded-md !px-2 !py-1"
            >
              <FaAngleDoubleLeft />
            </button>
            <button
              onClick={() => {
                setIndex(index < data?.length ? index + 1 : index);
              }}
              className="!bg-green-700 text-white !rounded-md !px-2 !py-1"
            >
              <FaAnglesRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
