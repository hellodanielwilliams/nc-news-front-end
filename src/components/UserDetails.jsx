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
            <img width="25px" src={userData.avatar_url}></img>
            <p>{userData.name}</p>
        </>
    );
};

export default UserDetails;