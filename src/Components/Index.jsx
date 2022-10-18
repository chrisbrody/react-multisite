import React from "react";

function Index() {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Cover</h3>
              <nav className="nav nav-masthead">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
                <a className="nav-link" href="about.html">
                  About
                </a>
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <h1 className="cover-heading">Cover your home page.</h1>
            <p className="lead">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead">
              <a href="/" className="btn btn-lg btn-secondary">
                Learn more
              </a>
            </p>
          </div>

          <div className="mastfoot">
            <div className="inner">
              <p>
                Cover template for{" "}
                <a href="https://getbootstrap.com">Bootstrap</a>, by{" "}
                <a href="https://twitter.com/mdo">@mdo</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
