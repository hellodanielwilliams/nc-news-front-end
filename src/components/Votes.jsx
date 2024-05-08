import { useState } from "react";
import { patchVotesByArticleId } from "../utils/api";

const Votes = ({ id, votes }) => {
    const [votesData, setVotesData] = useState(votes);
    const [hasVoted, setHasVoted] = useState(false);
    const [isVotingError, setIsVotingError] = useState(false);

    const handleVote = (inc) => {
        setVotesData((prevVotesData) => prevVotesData + inc);
        setHasVoted(true);
        patchVotesByArticleId(id, { inc_votes: inc })
            .then(() => {
                console.log("Votes updated");
            })
            .catch((err) => {
                setIsVotingError(true);
                setHasVoted(false);
                setVotesData(votes);
                console.log("error updating votes", err);
            });
    };

    return (
        <>
            <section className="Votes">
                <p
                    className={
                        isVotingError
                            ? "Votes__error-true"
                            : "Votes__error-false"
                    }
                >
                    Voting error, please try again later
                </p>

                <button disabled={hasVoted} onClick={() => handleVote(1)}>
                    🔼
                </button>
                <p>
                    {votesData} {votesData === 1 ? "Vote" : "Votes"}
                </p>
                <button disabled={hasVoted} onClick={() => handleVote(-1)}>
                    🔽
                </button>
            </section>
        </>
    );
};

export default Votes;
<></>;
