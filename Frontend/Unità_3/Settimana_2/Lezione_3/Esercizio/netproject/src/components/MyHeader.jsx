import { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class MyHeader extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <header className="mb-5">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img
                  id="imgLogo"
                  src="../../public/assets/img/netflix_logo.png"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/my-gallery"
                      className="nav-link"
                      aria-current="page"
                    >
                      Tv Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Movies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Recently Added
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      My List
                    </a>
                  </li>
                </ul>
                {/* <!-- <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul> -->
              <!-- <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> --> */}
                <div>
                  <div className="d-flex justify-content-lg-center gap-3">
                    <Icon.Search className="align-self-center" />
                    {/* <i className="bi bi-search align-self-center"></i> */}
                    <p className="pKids align-self-center">KIDS</p>
                    <Icon.BellFill className="align-self-center" />
                    {/* <i className="bi bi-bell-fill align-self-center"></i> */}
                    <img
                      src="../../public/assets/img/avatar.png"
                      className="navAvatarImg align-self-center"
                    />
                    <div className="btn-group dropdown">
                      <button
                        type="button"
                        className="btn btn-secondary bg-transparent dropdown-toggle bg-dark border-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Icon.CaretDownFill />
                        <i className="bi bi-caret-down-fill"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark bg-dark text-white">
                        <li>
                          <a className="dropdown-item" href="profile.html">
                            <img
                              src="../../public/assets/img/avatar.png"
                              className="navAvatarImg"
                            />
                            &nbsp; &nbsp; Utente #1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="profile.html">
                            Manage profiles
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="settings.html">
                            Account
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="settings.html">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Signout Netflix
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div
              id="header2"
              className="container-fluid d-flex justify-content-between"
            >
              <div id="tvTitleAndSelect" className="d-flex gap-3 w-100">
                <h2 className="align-self-center">TV Shows</h2>
                <select
                  id="headSelect"
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option className="genresOption" defaultValue>
                    Genres
                  </option>
                  <option value="1">Scifi</option>
                  <option value="2">Reality</option>
                  <option value="3">Thriller</option>
                </select>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                id="headBtns"
              >
                <Icon.TextLeft className="text-white" />
                {/* <i className="bi bi-text-left"></i> */}
                <Icon.BorderAll />
                {/* <i className="bi bi-border-all"></i> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default MyHeader;
