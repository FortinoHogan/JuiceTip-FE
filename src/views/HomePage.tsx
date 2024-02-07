import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const HomePage = () => {
  return (
    <div className="container bg-black mx-auto min-h-screen">
      <Button variant="Login">
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
};

export default HomePage;
