import Image from "next/image";

const Banner = () => {
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
            <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" />
          </div>
        </div>
      </div>
    );
}

export default Banner;