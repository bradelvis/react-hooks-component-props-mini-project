import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog'; // Adjust the path if necessary

function App() {
  return (
    <div>
      <Header name="My Awesome Blog" />
      <About 
        image="https://via.placeholder.com/215" 
        about="This is a blog about awesome things!" 
      />
      <ArticleList articles={blogData} />
    </div>
  );
}

export default App;
