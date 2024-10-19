import React, { useState } from 'react';
import '../../styles/discussionBoard.css';

// Sample posts data (replace this with fetched data later)
const postsData = [
    {
        id: 1,
        group: 'Digital Marketing & E-commerce',
        title: 'Best Tools for SEO',
        user: 'john_doe',
        comments: 12,
        content: 'SEO tools like Ahrefs, SEMrush, and Google Analytics are vital for boosting your digital marketing efforts. What are your favorite SEO tools?',
    },
    {
        id: 2,
        group: 'Project Management',
        title: 'Agile vs Waterfall',
        user: 'jane_doe',
        comments: 8,
        content: 'Which methodology do you prefer for project management, Agile or Waterfall? What are the pros and cons in your experience?',
    },
    {
        id: 3,
        group: 'UX Design',
        title: 'Prototyping Tools',
        user: 'designer_21',
        comments: 5,
        content: 'What prototyping tools do you use for UX design? I prefer Figma for its collaboration features, but Sketch also has some advantages.',
    },
    {
        id: 4,
        group: 'Cybersecurity',
        title: 'Top Cybersecurity Threats in 2024',
        user: 'cyber_guru',
        comments: 15,
        content: 'What are the major cybersecurity threats this year? I think ransomware is still a huge issue, but phishing is also evolving.',
    },
    {
        id: 5,
        group: 'IT Automation with Python',
        title: 'Automating Daily Tasks with Python',
        user: 'python_master',
        comments: 10,
        content: 'Python has been amazing for automating small, daily tasks at work. What libraries do you recommend for task automation?',
    },
    {
        id: 6,
        group: 'Advanced Data Analytics',
        title: 'Best Tools for Data Visualization',
        user: 'data_wizard',
        comments: 9,
        content: 'Tableau vs Power BI? Which one do you prefer for advanced data visualization? Or is there another tool you think is better?',
    },
    {
        id: 7,
        group: 'Business Intelligence',
        title: 'Key Metrics for BI Reports',
        user: 'bi_expert',
        comments: 7,
        content: 'What are the most important metrics you include in your BI reports? Do you focus on financial metrics or operational KPIs?',
    },
];

// Created with the 7 example Certificates for the groups
const groups = [
  'Digital Marketing & E-commerce',
  'Project Management',
  'UX Design',
  'Cybersecurity',
  'IT Automation with Python',
  'Advanced Data Analytics',
  'Business Intelligence',
];

const DiscussionBoard = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Default search to empty
  const [selectedGroup, setSelectedGroup] = useState(groups[0]); // Default to the first group

  // Function to filter posts based on selected group and search term
  const filteredPosts = postsData.filter(
    (post) => 
      post.group === selectedGroup && 
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="discussion-board mt-10">
        {/* Create Discussion */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Discussion Name:"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button>Create Post</button>
      </div>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="content-container grid grid-cols-2 gap-16">
        {/* Left-hand side: Certificate Groups */}
        <aside className="groups-sidebar w-1/2 bg-slate-100 rounded-2xl px-4 py-2">
          <h3>Certificate Groups</h3>
          <ul className='flex flex-col gap-2'>
            {groups.map((group) => (
              <li className='hover:bg-white hover:cursor-pointer rounded' key={group}>
                <button
                  className={group === selectedGroup ? 'active' : ''}
                  onClick={() => setSelectedGroup(group)}
                >
                  {group}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content: Posts */}
        <main className="posts-section">
          <h2>{selectedGroup} Discussions</h2>



          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="post-card" key={post.id}>
                <h3>{post.title}</h3>
                <p>Posted by: {post.user}</p>
                <p>Content: <br />{post.content}</p>
                <p>Comments: {post.comments}</p>
              </div>
            ))
          ) : (
            <p>No posts found in {selectedGroup}</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default DiscussionBoard;

        // id: 1,
        // group: 'Digital Marketing & E-commerce',
        // title: 'Best Tools for SEO',
        // user: 'john_doe',
        // comments: 12,
        // content: