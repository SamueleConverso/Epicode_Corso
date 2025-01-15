import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <footer className="container-fluid d-flex flex-column flex-md-row justify-content-between opacity-50">
        <div className="container-fluid p-0">
          <div className="d-flex gap-2 gap-md-3">
            <i className="bi bi-facebook footIcon"></i>
            <i className="bi bi-instagram footIcon"></i>
            <i className="bi bi-twitter footIcon"></i>
            <i className="bi bi-youtube footIcon"></i>
          </div>
          <div className="container-fluid p-0">
            <p>
              <a href="#">Audio and Subtitles</a>
            </p>
            <p>
              <a href="#">Media Center</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
            <p className="mb-4">
              <a href="#">Contact Us</a>
            </p>
            <p className="serviceBtn mb-4">
              <a href="#">Service Code</a>
            </p>

            <p>
              <a href="#">&copy; 1997-2021 Netflix Inc</a>
            </p>
          </div>
        </div>

        <div className="container-fluid p-0">
          <p>
            <a href="#">Audio Description</a>
          </p>
          <p>
            <a href="#">Investor Relations</a>
          </p>
          <p>
            <a href="#">Legal Notices</a>
          </p>
        </div>

        <div className="container-fluid p-0">
          <p>
            <a href="#">Help Center</a>
          </p>
          <p>
            <a href="#">Jobs</a>
          </p>
          <p>
            <a href="#">Cookie Preferences</a>
          </p>
        </div>

        <div className="container-fluid p-0">
          <p>
            <a href="#">Gift Cards</a>
          </p>
          <p>
            <a href="#">Terms Of Use</a>
          </p>
          <p>
            <a href="#">Corporate Information</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default MyFooter;
