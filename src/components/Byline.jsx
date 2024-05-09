import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";

const Byline = ({ username, date, topic }) => {
    return (
        <>
            <div className="Byline">
                <div className="Byline-left">
                    <UserDetails username={username} />
                    <p>{new Date(date).toLocaleDateString()}</p>
                </div>
                {topic && (
                    <div className="Byline-right">
                        <div className="Byline__topic">
                            <p>
                                <Link to={`/topics/${topic}`}>{topic}</Link>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Byline;
