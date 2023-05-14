import PostBox from "@/components/Homepage_components/PostBox";
import PostCard from "@/components/Homepage_components/PostCard";
import Banner from "@/components/Profile-Page/Banner";
import UserData from "@/components/Profile-Page/UserData";
import React from "react";

const dummyData = [
  {
    id: 2,
    username: "Farhat Mahi",
    time_posted: "1d ago",
    profile_picture:
      "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
    image:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    username: "Jhankar Mahbub",
    time_posted: "2d ago",
    profile_picture:
      "https://static1.squarespace.com/static/59dce1fa80bd5e67177b5efe/t/59e8d54eedaed82b728ea70d/1508431323095/11138647_10152658520856891_2718987297397745986_n.jpg?format=1000w",
    image: "https://m.media-amazon.com/images/I/51CsDxe7mKL.jpg",
  },
];

const ImageCrop = () => {
  return (
    <>
      <Banner />
      <UserData />
      <div className="mt-8">
        <PostBox />
      </div>
      {dummyData.map((data) => (
        <PostCard key={data.id} data={data} />
      ))}
    </>
  );
};

export default ImageCrop;
