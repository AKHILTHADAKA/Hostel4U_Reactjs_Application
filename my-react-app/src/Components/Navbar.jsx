import { useEffect } from "react";
import "./Navbar.css";
// In index.js or App.js


const Navbar = () => {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const navlist = document.getElementById("navlist");

    menuToggle.addEventListener("click", () => {
      navlist.classList.add("show");
    });

    menuClose.addEventListener("click", () => {
      navlist.classList.remove("show");
    });

    const handleClickOutside = (event) => {
      if (
        !menuToggle.contains(event.target) &&
        !navlist.contains(event.target)
      ) {
        navlist.classList.remove("show");
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove event listeners
    return () => {
      menuToggle.removeEventListener("click", () => {
        navlist.classList.add("show");
      });

      menuClose.removeEventListener("click", () => {
        navlist.classList.remove("show");
      });

      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navigateTo = (section) => {
    // Placeholder function for navigation; implement routing logic here
    console.log("Navigate to", section);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="main-container">
        <div className="logo">HOSTEL 4U</div>
        <div className="menu-toggle" id="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
        <div className="navlist" id="navlist">
          <a href="#home" onClick={() => navigateTo("/")}>
            Home
          </a>
          <a href="#about" onClick={() => navigateTo("about")}>
            About
          </a>
          <a href="#services" onClick={() => navigateTo("services")}>
            Service
          </a>
          {/* <a href="#projects" onClick={() => navigateTo("projects")}>
            Projects
          </a> */}
          <a href="#contact" onClick={() => navigateTo("contact")}>
            Contact Us
          </a>
          <div className="mylogin" id="">
          <a href="#Login">
            Login
          </a>
          </div>
          <div className="menu-close" id="menu-close">
            <i className="fas fa-times"></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
