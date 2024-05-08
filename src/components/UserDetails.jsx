import { useEffect, useState } from "react";
import { fetchUserByUsername } from "../utils/api";

const UserDetails = ({ username }) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (username) {
            fetchUserByUsername(username)
                .then(({ data: { user } }) => {
                    setUserData(user);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err.response.data);
                });
        }
    }, [username]);

    return (
        <>
            <div className="UserDetails">
                <div className="UserDetails__avatar">
                    <img
                        src={
                            loading
                                ? "/default_avatar.webp"
                                : userData.avatar_url
                        }
                    ></img>
                </div>
                <div className="UserDetails__name">
                    <p>{loading ? "Loading user" : userData.name}</p>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
