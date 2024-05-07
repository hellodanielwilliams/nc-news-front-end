import { useEffect, useState } from "react";
import { fetchUserByUsername } from "../utils/api";

const UserDetails = ({ username }) => {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        if (username) {
            fetchUserByUsername(username)
                .then(({ data: { user } }) => {
                    setUserData(user);
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
                    <img src={userData.avatar_url}></img>
                </div>
                <div className="UserDetails__name">
                    <p>{userData.name}</p>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
