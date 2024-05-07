import { useEffect, useState } from "react";
import { fetchUserByUsername } from "../utils/api";

const UserDetails = ({ username }) => {
    const [userData, setUserData] = useState({});
    console.log(username, "<<<< username in userDetails");

    useEffect(() => {
        fetchUserByUsername(username)
            .then(({ data: { user } }) => {
                setUserData(user);
            })
            .catch((err) => {
                console.log(err.response.data.msg);
            });
    }, []);

    return (
        <>
            <img width="25px" src={userData.avatar_url}></img>
            <p>{userData.name}</p>
        </>
    );
};

export default UserDetails;
