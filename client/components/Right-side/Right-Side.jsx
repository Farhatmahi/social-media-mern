import Image from "next/image";
import Friend from "./Friend";

const friends = [
  {
    id: 1,
    name: "Sana Zain Rahman",
    profile_picture:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTtNUl-u4mFxplbQHgqWoygrVyEPl105dP3uhkbdpqcSHjO2DiXdH6MSlMyT7x07pzanwFKjpz5WzhR75IHJihArSmJ8VLgLdaUwDl7UfY8AyEMcFqgaI0QsTg8eKDztB4ZT-sIvvI4QFkqWFyVl-7iMeaS4fMKCkyI0UwP0dDC4OmH4eY2IVPkU8bYg/s554/images%20(1).jpeg",
  },
  {
    id: 2,
    name: "Jhankar Mahbub",
    profile_picture:
      "https://static1.squarespace.com/static/59dce1fa80bd5e67177b5efe/t/59e8d54eedaed82b728ea70d/1508431323095/11138647_10152658520856891_2718987297397745986_n.jpg?format=1000w",
  },
];

const Right_side = () => {
  return (
    <div className="min-h-screen fixed right-10 w-72">
      <div class="relative mr-4 mt-6">
        <input
          type="text"
          className="w-full rounded-2xl bg-secondary border-gray-300 py-2 pl-4 focus:outline-none placeholder:text-sm"
          placeholder="Search..."
        />
        <div class="absolute inset-y-0 right-0 pl-3 flex items-center">
          <button type="submit" className=" text-black font-bold py-2 px-4">
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
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold">Friends</h1>
      </div>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <div className="">
        <h1 className="font-bold pt-8">Suggestions</h1>
        <div className="mt-3">
          <Image
            src="https://islamic-relief.org.my/wp-content/uploads/2021/06/RS23528_QT3A1566-scaled.jpg"
            width="1000"
            height="1000"
            className="rounded-xl object-cover relative"
          />
          <p className="">Donate for Syria</p>
          <progress
            className="progress progress-primary w-56 block"
            value="40"
            max="100"
          ></progress>
          <small>BDT 400,502 raised of 100,000,00</small>
        </div>
      </div>
    </div>
  );
};

export default Right_side;
