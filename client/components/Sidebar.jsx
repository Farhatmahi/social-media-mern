import Link from "next/link";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { UserContext } from "@/context/UserContext";

const Sidebar = () => {
  const [visible, setVisible] = useState(true);
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // const {firstName, lastName} = userInfo
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { firstName, lastName } = userInfo;

  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{ width: visible ? 256 : 80 }}
      className={`${
        visible ? "w-64" : "w-10"
      } h-screen text-white hidden md:flex flex-col border-r border-secondary lg:fixed`}
    >
      {" "}
      {/* // Button to toggle visibility of sidebar */}
      <div
        onClick={() => setVisible(!visible)}
        className="absolute top-10 -right-3 w-6 h-6 bg-secondary flex justify-center items-center rounded-full"
      >
        {visible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-black block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </div>
      {/* //Site Logo */}
      <div className="py-4 flex items-center h-[81px]">
        <Link
          href="/"
          className={`${
            visible ? "block" : "hidden"
          } text-3xl px-10 text-black`}
        >
          Socio
        </Link>
      </div>
      {/* // Menu Lists */}
      <div className="flex flex-col justify-between items-center gap-6 pt-4 text-black h-[calc(100vh-100px)]">
        <ul className="space-y-10">
          <li>
            <Link href="/" className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 ${visible ? "mr-3" : "mr-0"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>{" "}
              <p className={`${!visible ? "hidden" : "block"}`}>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/friend_requests" className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 ${visible ? "mr-3" : "mr-0"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>{" "}
              <p className={`${!visible ? "hidden" : "block"}`}>
                Friend Requests
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 ${visible ? "mr-3" : "mr-0"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>{" "}
              <p className={`${!visible ? "hidden" : "block"}`}>
                Notifications
              </p>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 ${visible ? "mr-3" : "mr-0"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p className={`${!visible ? "hidden" : "block"}`}>Settings</p>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <div className="dropdown dropdown-right dropdown-end border border-secondary p-4 rounded-full">
              <label tabIndex={0} className="">
                <div className="flex justify-normal items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" />
                    </div>
                  </div>
                  <p className={`${!visible ? "hidden" : "block"}`}>
                    {firstName} {lastName}
                  </p>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile/1">Profile</Link>
                </li>
                <li>
                  <a>Log out</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
