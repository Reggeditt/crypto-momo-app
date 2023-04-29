import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>Our Mission: Democratizing Cryptocurrency Access in Africa</h1>
        <p>At CryptoMomo Africa, we believe that everyone should have access to the world of digital currencies. Our platform is designed to address the specific challenges and opportunities of the African market, and our team is committed to providing a top-notch service that meets the highest standards of security, usability, and accessibility.</p>
      </div>
      <article className="about-mission">
        <img src="https://images.unsplash.com/photo-1642239817356-9dffb1bcc156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNyeXB0b2N1cnJlbmN5JTIwcGxhdGZvcm18ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="Mission" />
        <aside>
          <h2>Mission and Vision Statement</h2>
          <p>Our goal is to offer an open, easy-to-use, and safe platform that allows anyone to participate in the exciting world of cryptocurrencies.</p>
        </aside>
      </article>
      <div className="about-team">
        <h2>Team</h2>
        <div className="team-members">
          <div className="team-member-card">
            <img src="team-member-1.jpg" alt="Team Member 1" />
            <p>Name: John Doe</p>
            <p>Role: CEO</p>
            <p>Experience: 10+ years in the tech industry</p>
          </div>
          <div className="team-member-card">
            <img src="team-member-2.jpg" alt="Team Member 2" />
            <p>Name: Jane Doe</p>
            <p>Role: CTO</p>
            <p>Experience: 8+ years in the tech industry</p>
          </div>
        </div>
      </div>
      <div className="join-community">
        <h2>Community</h2>
        <p>Description of the importance of community in cryptocurrency.</p>
        <p>Invitation for feedback and recommendations.</p>
        <button>Download our app and join the CryptoMomo Africa community today!</button>
      </div>
    </section>
  );
};

export default AboutUs;
