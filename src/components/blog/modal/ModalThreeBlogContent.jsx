import React from "react";

const ModalThreeBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 30 June 2021
        </span>
        
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>JS Advanced</h1>
      <img src="img/certificates/JSAdvancedFull.jpeg" className="img-fluid" alt="Blog" />
     
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
