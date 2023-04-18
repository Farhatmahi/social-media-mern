import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "@/redux";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useRouter();
  // const user = useSelector((state) => state.user);

  return (
    <div className="flex justify-between items-center pt-4">
      {/* first half */}
      <div className=""></div>
      {/* search bar  */}
      <div className="">
        <div class="relative mr-4">
          <input
            type="text"
            className="w-96 rounded-2xl bg-secondary border-gray-300 py-2 pl-4 focus:outline-none placeholder:text-sm"
            placeholder="Search..."
          />
          <div class="absolute inset-y-0 right-0 pl-3 flex items-center">
            <button
              type="submit"
              className=" text-black font-bold py-2 px-4"
            >
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
