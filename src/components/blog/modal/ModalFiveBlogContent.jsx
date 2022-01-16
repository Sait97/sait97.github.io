import React from "react";

const ModalFiveBlogContent = () => {
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
          <i className="fa fa-calendar">16 July 2020 </i> 
        </span>
       
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Internship</h1>
      <img src="img/certificates/internship.jpg" className="img-fluid" alt="Blog" />
     
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFiveBlogContent;
