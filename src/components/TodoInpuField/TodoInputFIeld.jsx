export const TodoInputFIeld = ({ children }) => {
  return (
    <div>
      <input
        type="text"
        className="px-2 py-1 rounded-l capitalize"
        placeholder={`${children === "add" ? "add" : "update"} Todo`}
      />
      <button
        className={`${
          children === "add" ? "bg-blue-600" : "bg-orange-600"
        } px-4 py-1 rounded-e text-white capitalize`}
      >
        {`${children === "add" ? "add" : "update"}`}
      </button>
    </div>
  );
};
