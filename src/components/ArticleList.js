import React from "react"
import Article from "../components/Article"

function ArticleList({posts}){
    return(
        <main>
            {posts.map((post, index) => (
            <Article key={index} {...post} />
            ))}
        </main>
    )
}

export default ArticleList;