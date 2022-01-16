import React from "react";

const ModalSixBlogContent = () => {
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
          <i className="fa fa-calendar"></i> 8 November 2021
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>JS Back-End</h1>
      <img src="img/certificates/JSBack-EndFull.jpeg" className="img-fluid" alt="Blog" />
     
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalSixBlogContent;
