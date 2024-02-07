import { Link } from "react-router-dom";
import { IButton } from "./IButton";

const Button = (props: IButton) => {
  const { variant, href } = props;
  return (
    <div>
      <Link to={`${href}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          {variant}
        </button>
      </Link>
    </div>
  );
};

export default Button;
