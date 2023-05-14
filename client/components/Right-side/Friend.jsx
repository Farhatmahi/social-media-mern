const Friend = ({friend}) => {
    const {name, profile_picture} = friend
  return (
    <div className="flex justify-start items-center gap-3 pb-3 cursor-pointer">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={profile_picture} />
        </div>
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Friend;
