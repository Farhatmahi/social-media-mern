import { UserContext } from "@/context/UserContext";
import Image from "next/image";
import { useContext } from "react";

const Banner = () => {
  const { user } = useContext(UserContext);
  const { picturePath } = user;
  console.log(picturePath)
  return (
    <div className="w-full h-[250px] relative mt-2 flex justify-center items-center">
      <Image
        width="1000"
        height="1000"
        src="https://images.pexels.com/photos/7919366/pexels-photo-7919366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Banner"
        className="object-cover h-[250px] rounded-xl"
      />
      <div className="avatar online absolute -bottom-16">
        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100">
          <img src={picturePath} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
