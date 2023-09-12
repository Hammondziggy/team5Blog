import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import { useGlobalContext } from "./components/context";
import ArticlePost from "./pages/ArticlePost";
import Home from "./pages/Home";
import About from "./pages/about";
import SubArticles from "./components/body/subArticles";
import Profile from "./pages/profiles/Profile";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import CreateArticle from "./components/articlesPage/createPost";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { articlesData, name } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route
          path="/ArticlePost/:post"
          element={<ArticlePost articles={articlesData} />}
        />
        <Route path="/subArticles" element={<SubArticles />} />
        <Route path={`/@${name}`} element={<Profile />} />
        <Route path={`/admin/@${name}/new-post`} element={<CreateArticle />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
