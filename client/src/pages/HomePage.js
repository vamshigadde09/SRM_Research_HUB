import React from "react";
import "../styles/HomePage.css";
import "../pages/Login.js";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home" class="home-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#research" class="research-btn">
                Research Papers
              </a>
            </li>
            <li>
              <a href="Login" class="login-btn">
                Login
              </a>
            </li>
            <li>
              <a href="Register" class="signup-btn">
                Sign up
              </a>
            </li>
          </ul>
        </nav>
        <div class="logo">
          <a href="link-to-your-homepage">
            <img src="client\src\pages\logo.png" alt="SRM RESEARCH PAPER" />
          </a>
        </div>
      </header>

      <main>
        <section className="intro">
          <h1>Welcome to SRM RESEARCH HUB </h1>
          <p>
            "Welcome to our Research Paper Repository" is a warm greeting
            inviting users to explore a collection of research papers. It
            signifies that the platform is a centralized hub for accessing
            academic and scholarly content. Users can expect to find a diverse
            range of research papers spanning various disciplines, subjects, and
            topics. The repository may offer valuable resources for students,
            academics, researchers, and anyone interested in accessing
            authoritative information and staying updated with the latest
            developments in their respective fields. Additionally, the phrase
            conveys a sense of inclusivity, inviting individuals to engage with
            the repository's content and contribute to the exchange of knowledge
            and ideas.
          </p>
        </section>
        <br></br>
        <section className="featured-researchers">
          <h2>Featured Researchers</h2>
          <div className="researcher">
            <h3>
              The Impact of Artificial Intelligence on Healthcare: A
              Comprehensive Review
            </h3>
            <p>
              This research paper provides a thorough examination of the impact
              of artificial intelligence (AI) on the healthcare industry.
              Drawing from an extensive review of existing literature, the paper
              explores various applications of AI in healthcare, including
              diagnosis, treatment planning, predictive analytics, and
              personalized medicine. It evaluates the benefits and challenges
              associated with integrating AI technologies into healthcare
              systems, considering factors such as accuracy, efficiency,
              privacy, and ethical considerations. Furthermore, the paper
              discusses potential future trends and implications for healthcare
              delivery and patient outcomes. This comprehensive review serves as
              a valuable resource for healthcare professionals, policymakers,
              researchers, and stakeholders interested in understanding the
              evolving role of AI in shaping the future of healthcare.
            </p>
          </div>
          <div className="researcher">
            <h3>Climate Change and Biodiversity Loss: A Global Assessment</h3>
            <p>
              This research paper presents a global assessment of the
              interconnected issues of climate change and biodiversity loss.
              Through an interdisciplinary approach, the paper investigates the
              complex relationship between climate change and its impact on
              biodiversity across various ecosystems and species. It examines
              the ecological, economic, and social consequences of biodiversity
              loss, including implications for ecosystem services, food
              security, and human well-being. Furthermore, the paper evaluates
              current mitigation and adaptation strategies aimed at addressing
              climate change and conserving biodiversity, highlighting both
              successes and challenges. By synthesizing current scientific
              knowledge and evidence, this assessment aims to inform
              policymakers, conservation practitioners, and the general public
              about the urgent need for coordinated action to mitigate climate
              change and protect biodiversity on a global scale.
            </p>
          </div>
          {/* Add more researchers here */}
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

export default HomePage;
