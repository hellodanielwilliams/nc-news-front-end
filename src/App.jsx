import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import ArticleDisplay from "./components/ArticleDisplay";
import { UserProvider } from "./contexts/User";
import TopicSelector from "./components/TopicSelector";

const App = () => {
    return (
        <UserProvider>
            <div className="HeaderWrapper">
                <Header />
                <TopicSelector />
            </div>
            <Routes>
                <Route path="/" element={<ArticlesList />}></Route>
                <Route path="/articles" element={<ArticlesList />}></Route>
                <Route
                    path="/articles/:article_id"
                    element={<ArticleDisplay />}
                ></Route>
                <Route
                    path="/topics/:topic_name"
                    element={<ArticlesList />}
                ></Route>
            </Routes>
        </UserProvider>
    );
};

export default App;
