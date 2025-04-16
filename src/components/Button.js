const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-600 text-white rounded-xl ">
        {name}
      </button>
    </div>
  );
};

export default Button;
