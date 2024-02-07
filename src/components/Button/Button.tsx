import { IButton } from "./IButton";

const Button = (props: IButton) => {
  const { variant, children } = props;
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
        {children}
      </button>
    </div>
  );
};

export default Button;
