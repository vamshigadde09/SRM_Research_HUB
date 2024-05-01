import React, { useState, useContext } from "react";
import "../styles/StudentDashbord.css";

const StudentDashbord = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#dashboard" className="dashboard-btn">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#research-papers" className="research-papers-btn">
                Research Papers
              </a>
            </li>
            <li>
              <a href="#profile" className="profile-btn">
                Profile
              </a>
            </li>
          </ul>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search research papers"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </nav>
        <div className="logo">
          <a href="link-to-your-homepage">
            <img src="client\src\pages\logo.png" alt="SRM RESEARCH PAPER" />
          </a>
        </div>
      </header>
      <main>
        <section className="intro">
          <h1>WELCOME STUDENT</h1>
          <p>
            This is your personalized research paper dashboard, where you can
            access and manage your research papers, track your progress, and
            collaborate with others.
          </p>
        </section>

        <section className="sample-papers">
          <h3>Sample Research Papers</h3>
          <ul>
            <li>
              <h4>Sample Research Paper Title 1</h4>
              <p>
                This is a sample research paper description 1. It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
            </li>
            <li>
              <h4>Sample Research Paper Title 2</h4>
              <p>
                This is a sample research paper description 2. It is a long
                established fact that a reader will be distracted by the
                readable contentof a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
            </li>
          </ul>
        </section>

        <section className="featured-research-papers">
          <h2>Featured Research Papers</h2>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: info@researchrepository.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: 123 Research Street, City, Country</p>
          </div>
          <div className="social-links">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://twitter.com/researchrepo">Twitter</a>
              </li>
              <li>
                <a href="https://www.facebook.com/researchrepository">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/researchrepository">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/researchrepo">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Research Repository. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default StudentDashbord;
