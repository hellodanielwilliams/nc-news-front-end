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
                setIsVotingError(false);
            })
            .catch((err) => {
                setIsVotingError(true);
                setHasVoted(false);
                setVotesData(votes);
            });
    };

    return (
        <>
            <section className="Votes">
                <div className="Votes__buttonsBox">
                    <button disabled={hasVoted} onClick={() => handleVote(1)}>
                        🔼
                    </button>
                    <p>
                        {votesData} {votesData === 1 ? "Vote" : "Votes"}
                    </p>
                    <button disabled={hasVoted} onClick={() => handleVote(-1)}>
                        🔽
                    </button>
                </div>
            </section>
            <p
                className={
                    isVotingError ? "Votes__error-true" : "Votes__error-false"
                }
            >
                Voting error, please try again later
            </p>
        </>
    );
};

export default Votes;
<></>;
