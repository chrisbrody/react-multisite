import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Cover</h3>
              <Navbar />
            </div>
          </div>

          <div className="inner cover">
            <h1 className="cover-heading">Contact Page.</h1>
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
                <a href="https://getbootstrap.com">Bootstrap</a>, by
                {" Chris Brody"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
