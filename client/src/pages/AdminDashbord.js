import React from "react";
import "../styles/AdminDashbord.css";

const AdminDashbord = ({ papers, setPapers }) => {
  return (
    <div>
      <header>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search research papers"
            className="search-input"
          />
          <img
            src="search-icon.png"
            alt="Search Icon"
            className="search-icon"
          />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#dashboard" className="dashboard-btn">
                {" "}
                Dashboard{" "}
              </a>
            </li>
            <li>
              <a href="#research-papers" className="research-papers-btn">
                {" "}
                Research Papers{" "}
              </a>
            </li>
            <li>
              <a href="#profile" className="profile-btn">
                {" "}
                Profile{" "}
              </a>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <a href="link-to-your-homepage">
            <img src="client\src\pages\logo.png" alt="SRM RESEARCH PAPER" />
          </a>
        </div>
      </header>

      <main>
        <section className="research-papers-list">
          <h2>Research Papers</h2>
          <div className="research-paper">
            <div>
              <h3>
                The Impact of Artificial Intelligence on Healthcare: A
                Comprehensive Review
              </h3>
              <p>
                This research paper provides a thorough examination of the
                impact of artificial intelligence (AI) on the healthcare
                industry. Drawing from an extensive review of existing
                literature, the paper explores various applications of AI in
                healthcare, including diagnosis, treatment planning, predictive
                analytics, and personalized medicine.
              </p>
              <div className="actions">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          </div>
          <div className="research-paper">
            <div>
              <h3>Research Paper 2 Title</h3>
              <p>
                This research paper covers the topic of Research Paper 2,
                providing valuable insights and findings.
              </p>
              <div className="actions">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          </div>
          {/* Add more research papers here */}
        </section>

        <section className="research-papers-list">
          <h2>Research Papers for Approval</h2>
          <div className="research-paper">
            <div>
              <h3>
                The Impact of Artificial Intelligence on Healthcare: A
                Comprehensive Review
              </h3>
              <p>
                This research paper provides a thorough examination of the
                impact of artificial intelligence (AI) on the healthcare
                industry. Drawing from an extensive review of existing
                literature, the paper explores various applications of AI in
                healthcare, including diagnosis, treatment planning, predictive
                analytics, and personalized medicine.
              </p>
              <div className="actions">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          </div>
          {/* Add more research papers here */}
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

export default AdminDashbord;
