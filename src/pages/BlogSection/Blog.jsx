import React from 'react';
import './blog.css';
const blogPosts = [
  {
    title: 'The Ultimate Guide to Costume Selection',
    description: 'Discover how to choose the perfect costume for any event, from historical reenactments to fantasy gatherings.',
    date: 'July 22, 2024',
    link: '#post1'
  },
  {
    title: 'Top 10 Costume Trends for 2024',
    description: 'Explore the latest trends in costumes and find out what’s hot this year in the world of fancy dress.',
    date: 'July 15, 2024',
    link: '#post2'
  },
  {
    title: 'How to Accessorize Your Costume',
    description: 'Learn the art of accessorizing to complete your costume and make sure you stand out at any event.',
    date: 'July 8, 2024',
    link: '#post3'
  },
  {
    title: 'How to Accessorize Your Costume',
    description: 'Learn the art of accessorizing to complete your costume and make sure you stand out at any event.',
    date: 'July 8, 2024',
    link: '#post3'
  },
  {
    title: 'How to Accessorize Your Costume',
    description: 'Learn the art of accessorizing to complete your costume and make sure you stand out at any event.',
    date: 'July 8, 2024',
    link: '#post3'
  },
  {
    title: 'Behind the Scenes: Creating Custom Costumes',
    description: 'Get an inside look at the process of designing and creating custom costumes for unique occasions.',
    date: 'July 1, 2024',
    link: '#post4'
  }
];

const Blog = () => {
  return (
    <section className="blog">
      <h2>Our Blog</h2>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-description">{post.description}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
