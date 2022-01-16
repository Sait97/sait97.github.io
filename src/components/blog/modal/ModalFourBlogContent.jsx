import React from "react";

const ModalFourBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 10 August 2021
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>JS Applications </h1>
      <img src="img/certificates/JSApplicationsFull.jpeg" className="img-fluid" alt="Blog" />
      
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFourBlogContent;
