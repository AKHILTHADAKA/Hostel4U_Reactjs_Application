
import Navbar from "./Navbar";
import pan from "../assets/pan.png";
import beg from "../assets/beg.jpg";import am from "../assets/am.jpeg";import sr from "../assets/sr.jpg"
import el from "../assets/el.jpg"; import cl from "../assets/cl.avif"; import pe from "../assets/pe.jpg";
import wr from "../assets/wr.jpg";
import "./Homepage.css";
// In index.js or App.js



function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <Introduction />
      <About />
      <Services/>
      <ContactUs />
      <FooterBar />
    </div>
  );
}

function Introduction() {
  return (
    <div className="banner" id="home">
      <div className="search-container">
  <input type="text" className="search-input" placeholder="Search for products, brands and more..." />
  <button className="search-button">Search</button>
</div>
<div className="hyd">

</div>2
<div className="hyda">
  
</div>
    </div>
  );
}

function About() {
  return (
    <div className="cards" id="about">
  <div className="card-location">
    <h1 className="card-text1">Location HYDERABAD</h1>
    <div className="card-container">
      <div className="card">
        <img src={sr} alt="Location" />
        <div className="card-info">
          <h3>Location: Sr Nagar</h3>
          <h3>Hostel List</h3>
          <a href="#learmore" className="learn-more">Learn More <span>&#8594;</span></a>
        </div>
      </div>

      <div className="card">
        <img src={am}alt="Location" />
        <div className="card-info">
          <h3>Location:Ameerpet</h3>
          <h3>Hostel List</h3>
          <a href="#learn-more" className="learn-more">Learn More <span>&#8594;</span></a>
        </div>
      </div>

      <div className="card" >
        <img src={beg} alt="Location" />
        <div className="card-info">
          <h3>Location: Begumpet</h3>
          <h3>Hostel List</h3>
          <a href="#learn-more" className="learn-more">Learn More <span>&#8594;</span></a>
        </div>
      </div>

      <div className="card">
        <img src={pan} alt="Location" />
        <div className="card-info">
          <h3>Location: Panjagutta</h3>
          <h3>Hostel List</h3>
          <a href="#learn-more" className="learn-more1">Learn More <span>&#8594;</span></a>
        </div>
      </div>
      
    </div>
    <div className="learn-more">
        <button className="read">Read More</button>
        </div>
  </div>
 
</div>


      
  );
}

function Services() {
  return (
    <div className="services-section" id="services">
      <div className="services-header">
        <h1>Future Services</h1>
      </div>
      <div className="services-content">
        <div className="service-cards">
          <div className="service-card">
            <h3>Elctrition</h3>
            <img src={el} alt="Service 1" />
          </div>
          <div className="service-card">
            <h3>Cleaning</h3>
            <img src={cl} alt="Service 2" />
          </div>
          <div className="service-card">
            <h3>Painting</h3>
            <img src={pe} alt="Service 3" />
          </div>
          <div className="service-card">
            <h3>Painting</h3>
            <img src={wr} alt="Service 3" />
          </div>
        </div>
      </div>
    </div>
  );
}


// Contact-us

const ContactUs = () => {
  return (
    <div className="mycontact" id="contact">
    <form action="#" method="post">
      <h1>Contact Us</h1>
      <p>Please take a moment to get in touch, we will get back to you shortly.</p>

      <div className="column">
        <label htmlFor="the-name">Your Name</label>
        <input type="text" name="name" id="the-name" />

        <label htmlFor="the-email">Email Address</label>
        <input type="email" name="email" id="the-email" />

        <label htmlFor="the-phone">Phone Number</label>
        <input type="tel" name="phone" id="the-phone" />

        <label htmlFor="the-reason">How can we help you?</label>
        <select name="reason" id="the-reason">
          <option value="">Choose one</option>
          <option value="web">I need web design services</option>
          <option value="video">I need you to produce a video</option>
          <option value="3d">I need 3D polygon things</option>
        </select>
      </div>

      <div className="column">
        <label htmlFor="the-message">Message</label>
        <textarea name="message" id="the-message"></textarea>

        <label>
          <input type="checkbox" name="newsletter" value="yes" /> Join our mailing list?
        </label>
        <input type="submit" value="Send Message" />
      </div>
    </form>
    </div>
  );
};

const FooterBar = () => {
  return (
    <footer>
  <div className="footer-container">
    <div className="footer-section about">
      <h3>About Us</h3>
      <p>We are committed to delivering the best service and customer satisfaction.</p>
    </div>
    <div className="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: contact@company.com</p>
      <p>Phone: +91 1234567890</p>
    </div>
    <div className="footer-section social">
      <h3>Follow Us</h3>
      <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="#twitter"><i className="fab fa-twitter"></i></a>
      <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </div>
</footer>

  );
};





export default Homepage;
