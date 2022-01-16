import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>Details</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Sait
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 31 March 2020
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Web programming - HTML, CSS, JS</h1>
      <img src="img/certificates/web-developer.jpg" className="img-fluid" alt="Blog" />
     
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
