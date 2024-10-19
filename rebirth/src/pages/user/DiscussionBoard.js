import React, { useState } from 'react';
import '../../styles/discussionBoard.css';

// Sample posts data (replace this with fetched data later)
const postsData = [
    {
      "id": 1,
      "group": "Digital Marketing & E-commerce",
      "title": "Best Tools for SEO",
      "user": "john_doe",
      "comments": 12,
      "content": "SEO tools like Ahrefs, SEMrush, and Google Analytics are vital for boosting your digital marketing efforts. What are your favorite SEO tools?"
    },
    {
      "id": 2,
      "group": "Digital Marketing & E-commerce",
      "title": "Email Marketing Strategies",
      "user": "marketing_guru",
      "comments": 9,
      "content": "What email marketing strategies have you found to be most effective? I'm particularly interested in automation tools."
    },
    {
      "id": 3,
      "group": "Digital Marketing & E-commerce",
      "title": "Social Media Platforms for E-commerce",
      "user": "alice_marketer",
      "comments": 15,
      "content": "Which social media platforms do you think are best for promoting e-commerce products? I'm torn between Instagram and TikTok."
    },
    {
      "id": 4,
      "group": "Project Management",
      "title": "Agile vs Waterfall",
      "user": "jane_doe",
      "comments": 8,
      "content": "Which methodology do you prefer for project management, Agile or Waterfall? What are the pros and cons in your experience?"
    },
    {
      "id": 5,
      "group": "Project Management",
      "title": "Managing Remote Teams",
      "user": "pm_leader",
      "comments": 5,
      "content": "What tools and strategies do you use for managing remote teams? I've found Slack and Trello to be useful, but I'm curious about alternatives."
    },
    {
      "id": 6,
      "group": "Project Management",
      "title": "Project Risk Management Techniques",
      "user": "risk_manager",
      "comments": 3,
      "content": "How do you approach risk management in your projects? Do you have any favorite frameworks or methodologies for handling risks?"
    },
    {
      "id": 7,
      "group": "UX Design",
      "title": "Prototyping Tools",
      "user": "designer_21",
      "comments": 5,
      "content": "What prototyping tools do you use for UX design? I prefer Figma for its collaboration features, but Sketch also has some advantages."
    },
    {
      "id": 8,
      "group": "UX Design",
      "title": "User Research Methods",
      "user": "ux_master",
      "comments": 7,
      "content": "What are your go-to methods for conducting user research? Do you rely more on qualitative or quantitative data?"
    },
    {
      "id": 9,
      "group": "UX Design",
      "title": "Mobile vs Desktop Design",
      "user": "frontend_dev",
      "comments": 6,
      "content": "What are the biggest differences you consider when designing for mobile vs desktop? Any tips for creating a seamless experience across devices?"
    },
    {
      "id": 10,
      "group": "Cybersecurity",
      "title": "Top Cybersecurity Threats in 2024",
      "user": "cyber_guru",
      "comments": 15,
      "content": "What are the major cybersecurity threats this year? I think ransomware is still a huge issue, but phishing is also evolving."
    },
    {
      "id": 11,
      "group": "Cybersecurity",
      "title": "Best Practices for Securing APIs",
      "user": "api_security",
      "comments": 10,
      "content": "What are your best practices for securing APIs? I've been implementing OAuth 2.0 and rate limiting, but I'm looking for more tips."
    },
    {
      "id": 12,
      "group": "Cybersecurity",
      "title": "Penetration Testing Tools",
      "user": "ethical_hacker",
      "comments": 8,
      "content": "What tools do you use for penetration testing? I usually rely on Metasploit and Burp Suite, but I'd love to hear about other tools."
    },
    {
      "id": 13,
      "group": "IT Automation with Python",
      "title": "Automating Daily Tasks with Python",
      "user": "python_master",
      "comments": 10,
      "content": "Python has been amazing for automating small, daily tasks at work. What libraries do you recommend for task automation?"
    },
    {
      "id": 14,
      "group": "IT Automation with Python",
      "title": "Best Python Libraries for Web Scraping",
      "user": "data_scraper",
      "comments": 6,
      "content": "What Python libraries do you use for web scraping? I've found BeautifulSoup to be great, but I’ve heard Scrapy might be better for larger projects."
    },
    {
      "id": 15,
      "group": "IT Automation with Python",
      "title": "Automating Report Generation",
      "user": "python_automation",
      "comments": 4,
      "content": "I’ve been automating report generation using Python’s Pandas library. Anyone else have tips or tools for making the process smoother?"
    },
    {
      "id": 16,
      "group": "Advanced Data Analytics",
      "title": "Best Tools for Data Visualization",
      "user": "data_wizard",
      "comments": 9,
      "content": "Tableau vs Power BI? Which one do you prefer for advanced data visualization? Or is there another tool you think is better?"
    },
    {
      "id": 17,
      "group": "Advanced Data Analytics",
      "title": "Machine Learning for Data Analytics",
      "user": "ml_expert",
      "comments": 11,
      "content": "How do you use machine learning in your data analytics processes? I’m starting with regression models, but curious about more advanced techniques."
    },
    {
      "id": 18,
      "group": "Advanced Data Analytics",
      "title": "Predictive Analytics vs Descriptive Analytics",
      "user": "analytics_pro",
      "comments": 8,
      "content": "Do you rely more on predictive or descriptive analytics in your work? I'm trying to find the balance in how we report and forecast data."
    },
    {
      "id": 19,
      "group": "Business Intelligence",
      "title": "Key Metrics for BI Reports",
      "user": "bi_expert",
      "comments": 7,
      "content": "What are the most important metrics you include in your BI reports? Do you focus on financial metrics or operational KPIs?"
    },
    {
      "id": 20,
      "group": "Business Intelligence",
      "title": "Integrating BI Tools with ERP Systems",
      "user": "integration_guru",
      "comments": 6,
      "content": "How do you integrate your BI tools with ERP systems? I’m currently using SAP, and it’s been a challenge to synchronize the data."
    },
    {
      "id": 21,
      "group": "Business Intelligence",
      "title": "Using AI in Business Intelligence",
      "user": "ai_bi",
      "comments": 5,
      "content": "How are you incorporating AI into your BI processes? I’ve started using AI for pattern recognition, but looking for more use cases."
    }
]

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

      <div className="content-container grid grid-cols-10 gap-16">
        {/* Left-hand side: Certificate Groups */}
        <aside className="groups-sidebar bg-slate-100 rounded-2xl px-4 py-2 col-span-3">
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
        <main className="posts-section col-span-6">
          <h2>{selectedGroup} Discussions</h2>



          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="post-card bg-slate-100 rounded-lg px-8 py-4 mb-4" key={post.id}>
                <h3>{post.title}</h3>
                <p className='t3'>Posted by: {post.user}</p>
                <p className='t4'>Content: <br />{post.content}</p>
                <p className='t3 ml-auto'>Comments: {post.comments}</p>
              </div>
            ))
          ) : (
            <p className='t3'>No posts found in {selectedGroup}</p>
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