import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to={"/"}>
                <h1>Good News</h1>
            </Link>
        </div>
    );
};

export default Header;
