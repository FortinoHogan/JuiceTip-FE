import { Link } from "react-router-dom";
import { IButton } from "./IButton";

const Button = (props: IButton) => {
  const { variant, href, className } = props;
  return (
    <div>
      <Link to={`${href}`}>
        <button className={`${className} bg-10b981 text-white font-bold py-2 px-4 rounded m-4`}>
          {variant}
        </button>
      </Link>
    </div>
  );
};

export default Button;
