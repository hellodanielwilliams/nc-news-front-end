import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import ArticleDisplay from "./components/ArticleDisplay";
import { UserProvider } from "./contexts/User";

const App = () => {
    return (
        <UserProvider>
            <Header />
            <Routes>
                <Route path="/" element={<ArticlesList />}></Route>
                <Route path="/articles" element={<ArticlesList />}></Route>
                <Route
                    path="/articles/:article_id"
                    element={<ArticleDisplay />}
                ></Route>
            </Routes>
        </UserProvider>
    );
};

export default App;
