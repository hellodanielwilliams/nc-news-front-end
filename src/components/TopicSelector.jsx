import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicSelector = () => {
    const [topicsData, setTopicsData] = useState([]);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTopics().then(({ data: { topics } }) => {
            setTopicsData(topics);
            setIsLoading(false);
        });
    }, []);

    const handleMenuToggle = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <>
            <section className="TopicSelector">
                <button onClick={handleMenuToggle}>Topics</button>
                {isMenuVisible && (
                    <div className="TopicSelector__dropdown">
                        {isLoading && <p>Loading...</p>}
                        {topicsData.map((topic, index) => {
                            return (
                                <p key={index} onClick={handleMenuToggle}>
                                    <Link to={`/topics/${topic.slug}`}>
                                        {topic.slug}
                                    </Link>
                                </p>
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
};

export default TopicSelector;
