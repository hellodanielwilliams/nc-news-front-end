import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicSelector = ({ topicsData }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <>
            <section className="TopicSelector">
                <button onClick={handleMenuToggle}>Topics</button>
                {isMenuVisible && (
                    <div className="TopicSelector__dropdown">
                        {topicsData.topics.map((topic, index) => {
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
