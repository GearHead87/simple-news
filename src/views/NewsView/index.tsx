const NewsView = ({articles}) => {
    return (
        <div>
            {
                articles.map((article)=>(
                    <div className="max-w-lg mx-auto space-y-10 border mt-10 p-10 rounded-lg">
                        <h2 className="text-2xl">{article.title}</h2>
                        <h2>{article.content}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default NewsView;