import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api";
import TopicSelector from "./TopicSelector";

const TopicBar = ({ topic_name }) => {
    const [topicsData, setTopicsData] = useState([]);
    const [topicDesc, setTopicDesc] = useState("");

    useEffect(() => {
        fetchTopics().then(({ data: topics }) => {
            setTopicsData(topics);

            const currentTopic = topics.topics.find(
                (topic) => topic.slug === topic_name
            );
            if (currentTopic) {
                setTopicDesc(currentTopic.description);
            }
        });
    }, [topic_name]);

    return (
        <>
            {topic_name && (
                <>
                    <h2>{topic_name[0].toUpperCase() + topic_name.slice(1)}</h2>
                    <p>{topicDesc}</p>
                </>
            )}
            {<TopicSelector topicsData={topicsData}></TopicSelector>}
        </>
    );
};

export default TopicBar;
