import React from "react";

import Article from "./Article";


function ArticleList({posts}) {
 
    return (
        <main >
         {posts.map((posts) =>  <Article 
         key={posts.id} 
         title={posts.title}
         date={posts.date}
         preview={posts.preview}
         minutes={posts.minutes} /> )}
        </main>
    )
}

export default ArticleList;