import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const coffeeCups = Math.ceil(minutesToRead / 5);
  const bentoBoxes = Math.ceil(minutesToRead / 10);
  
  const readIndicator = minutesToRead < 30 
    ? "☕️".repeat(coffeeCups) + ` ${minutesToRead} min read`
    : "🍱".repeat(bentoBoxes) + ` ${minutesToRead} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{readIndicator}</p>
    </article>
  );
}

export default Article;
