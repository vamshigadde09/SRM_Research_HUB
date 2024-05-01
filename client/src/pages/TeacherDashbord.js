import React, { useState } from "react";
import "../styles/TeacherDashbord.css";

const TeacherDashbord = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [papers, setPapers] = useState([]);
  const [newPaperTitle, setNewPaperTitle] = useState("");
  const [newPaperDescription, setNewPaperDescription] = useState("");
  const [teacherProfile, setTeacherProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "I am a teacher at SRM University",
  });

  const handleAddPaper = () => {
    // Add your logic here to handle adding a new paper
    console.log("Adding new paper...");
  };

  const handleAddNewPaper = () => {
    const newPaper = {
      id: Date.now(),
      title: newPaperTitle,
      description: newPaperDescription,
    };
    setPapers([...papers, newPaper]);
    setCurrentView("dashboard");
    setNewPaperTitle("");
    setNewPaperDescription("");
  };

  return (
    <div>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a
                  href="#dashboard"
                  className="dashboard-btn"
                  onClick={() => setCurrentView("dashboard")}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="research-papers-btn"
                  onClick={() => setCurrentView("researchPapers")}
                >
                  Recent uploaded
                </a>
              </li>
              <li>
                <a
                  href="#addPaper"
                  className="profile-btn"
                  onClick={() => setCurrentView("addPaper")}
                >
                  Add Paper
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="profile"
                  onClick={() => setCurrentView("profile")}
                >
                  Profile
                </a>
              </li>
            </ul>
            <div className="search-bar">
              <input type="text" placeholder="Search research papers" />
            </div>
          </nav>
          <div className="logo">
            <a href="link-to-your-homepage">
              <img src="client\src\pages\logo.png" alt="SRM RESEARCH PAPER" />
            </a>
          </div>
        </header>

        <main>
          {currentView === "dashboard" && (
            <section className="intro">
              <h1>WELCOME TEACHER</h1>
              <p>
                This is your personalized research paper dashboard, where you
                can access and manage your research papers, track your progress,
                and collaborate with others.
              </p>
            </section>
          )}
          {currentView === "researchPapers" && (
            <section className="research-papers">
              <h3>Latest Added Research Papers</h3>
              <ul>
                {papers.slice(0, 5).map((paper) => (
                  <li key={paper.id}>
                    <h4>{paper.title}</h4>
                    <p>{paper.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {currentView === "addPaper" && (
            <>
              <section className="add-paper-form">
                <h3>Add a new research paper</h3>
                <input
                  type="text"
                  placeholder="Title"
                  value={newPaperTitle}
                  onChange={(e) => setNewPaperTitle(e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  value={newPaperDescription}
                  onChange={(e) => setNewPaperDescription(e.target.value)}
                />
                <button onClick={handleAddNewPaper}>Add Paper</button>
              </section>
              <section className="sample-papers">
                <h3>Sample Research Papers</h3>
                <ul>
                  <li>
                    <h4>Sample Research Paper Title 1</h4>
                    <p>
                      This is a sample research paper description 1. It is a
                      long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English.
                    </p>
                  </li>
                  <li>
                    <h4>Sample Research Paper Title 2</h4>
                    <p>
                      This is a sample research paper description 2. It is a
                      long established fact that a reader will be distracted by
                      the readable contentof a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here, content here', making it look like
                      readable English.
                    </p>
                  </li>
                </ul>
              </section>
            </>
          )}
          {currentView === "profile" && (
            <section className="teacher-profile">
              <h3>Teacher Profile</h3>
              <ul>
                <li>
                  <h4>Name:</h4>
                  <p>{teacherProfile.name}</p>
                </li>
                <li>
                  <h4>Email:</h4>
                  <p>{teacherProfile.email}</p>
                </li>
                <li>
                  <h4>Bio:</h4>
                  <p>{teacherProfile.bio}</p>
                </li>
              </ul>
            </section>
          )}
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
    </div>
  );
};

export default TeacherDashbord;
