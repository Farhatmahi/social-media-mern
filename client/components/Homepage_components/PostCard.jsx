import Image from "next/image";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PostCard = ({ data }) => {
  const { username, profile_picture, time_posted, image } = data;
  const [liked, setLiked] = useState(true);
  return (
    <div className="border border-[#f9f9f9] rounded-xl flex flex-col justify-between items-center w-full p-4">
      {/* header  */}
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <Image
                width="300"
                height="300"
                src={profile_picture}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center text-left pl-4">
            <h1 className="font-bold">{username}</h1>
            <p className="text-sm text-gray-400">{time_posted}</p>
          </div>
        </div>
        {/* option  */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>View Profile</a>
            </li>
            <li>
              <a>Hide Post</a>
            </li>
          </ul>
        </div>
      </div>
      {/* image */}
      <div className="w-full pt-4">
        <Image
          className="rounded-xl"
          width="800"
          height="800"
          src={image}
        />
      </div>
      {/* reacts and comments */}
      <div className="flex justify-between items-center pt-4 w-full">
        <div className="flex justify-start items-center gap-4">
          <button>
            {liked ? (
              <AiFillHeart className="text-2xl text-red-500" />
            ) : (
              <AiOutlineHeart className="text-2xl" />
            )}
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
