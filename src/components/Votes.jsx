import { useState } from "react";
import { patchVotesByArticleId } from "../utils/api";

const Votes = ({ id, votes }) => {
    const [votesData, setVotesData] = useState(votes);

    const handleVote = (inc) => {
        setVotesData((prevVotesData) => prevVotesData + inc);
        patchVotesByArticleId(id, { inc_votes: inc })
            .then(({ data: { article } }) => {
                const updatedVotes = article.votes;
                // setVotesData(updatedVotes);
                console.log("Votes updated");
            })
            .catch((err) => {
                console.log("error updating votes", err);
            });
    };

    return (
        <>
            <button onClick={() => handleVote(1)}>🔼</button>
            <p>{votesData} Votes</p>
            <button onClick={() => handleVote(-1)}>🔽</button>
        </>
    );
};

export default Votes;
<></>;
