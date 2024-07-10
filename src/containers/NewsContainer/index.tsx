import { getAllArticles } from "../../lib/utils/newsStorage";
import NewsView from "../../views/NewsView";

const NewsContainer = () => {
    const articles = getAllArticles();
    
    return (
        <div>
           <NewsView articles={articles}/>
        </div>
    );
};

export default NewsContainer;