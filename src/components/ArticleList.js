import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    
    const articles = posts.map(({ title, date, preview, minutes }, i) => {
        return <Article key={i} title={title} minutes={minutes} date={date} preview={preview} />
    })
    
    return (
        <main>
            {articles}
        </main>
    );
}

export default ArticleList;