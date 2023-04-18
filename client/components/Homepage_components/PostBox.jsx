import Add_Video from "./Add_Video";
import Input_Photo from "./Input_Photo";

const PostBox = () => {
  return (
    <div className="bg-secondary px-6 py-4 rounded-xl mb-10">
      <form>
        <input
          type="text"
          className="w-full rounded-2xl bg-secondary border-gray-300 py-2 pl-4 pb-4 focus:outline-none placeholder:text-sm"
          placeholder="What's on your mind?"
        />
        <hr />
        <div className="flex justify-between items-center pt-4">
          <div className="flex justify-center items-center gap-8">
            <Input_Photo />
            <Add_Video />
          </div>
          <button className="btn btn-primary btn-sm border-black hover:border-primary hover:bg-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostBox;
