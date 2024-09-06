import { BsCheckSquare, BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

export const SingleTodo = () => {
  return (
    <div className="capitalize w-2/5  flex justify-between mx-auto bg-yellow-200 p-2 box-border rounded items-center ">
      <p>todo name</p>
      <div className="flex capitalize justify-between gap-2">
        <BsCheckSquare className="cursor-pointer text-green-700" size={20} />
        <FaEdit className="cursor-pointer text-red-700" size={20} />
        <BsTrashFill className="cursor-pointer text-orange-700" size={20} />
      </div>
    </div>
  );
};
