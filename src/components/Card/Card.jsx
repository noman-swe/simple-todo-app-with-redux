import { Header } from "../Header/Header";
import { TodoInputFIeld } from "../TodoInpuField/TodoInputFIeld";
import { SingleTodo } from "../SingleTodo/SingleTodo";

export const Card = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6/12 h-4/5 bg-orange-300 my-24 ">
        <Header />

        <div className="flex justify-center my-8">
          <TodoInputFIeld>add</TodoInputFIeld>
          {/* <TodoInputFIeld>update</TodoInputFIeld> */}
        </div>

        <div className="single-todo mb-6">
          <SingleTodo />
        </div>
      </div>
    </div>
  );
};
