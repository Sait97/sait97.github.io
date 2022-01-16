import React, { useState } from "react";
import Modal from "react-modal";

import ModalOneBlogContent from "./modal/ModalOneBlogContent";
import ModalTwoBlogContent from "./modal/ModalTwoBlogContent";
import ModalThreeBlogContent from "./modal/ModalThreeBlogContent";
import ModalFourBlogContent from "./modal/ModalFourBlogContent";
import ModalFiveBlogContent from "./modal/ModalFiveBlogContent";
import ModalSixBlogContent from "./modal/ModalSixBlogContent";

Modal.setAppElement("#root");

const Certificate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/certificates/reactJs.png"
                className="img-fluid "
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header ">
              <h3 className="d-flex justify-content-center m-3">ReactJS</h3>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalOneBlogContent */}
      </div>
     
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/certificates/web-developer.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 className="d-flex justify-content-center m-3">Web programming</h3>
            </div>
           
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalTwoBlogContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalTwoBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoBlogContent */}
      </div>
     
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/certificates/jsAdvanced.png"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 className="d-flex justify-content-center m-3">JS Advanced</h3>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalThreeBlogContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalThreeBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeBlogContent */}
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFour}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/certificates/jsApps.png"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 className="d-flex justify-content-center m-3">JS Applications</h3>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFourBlogContent */}
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFour}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFourBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFourBlogContent */}
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFive}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/certificates/internship.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 className="d-flex justify-content-center m-3">Internship</h3>
            </div>
            
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFiveBlogContent */}
        <Modal
          isOpen={isOpen5}
          onRequestClose={toggleModalFive}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFive}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFiveBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFiveBlogContent */}
      </div>
      
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalSix}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/certificates/jsBackEnd.png"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3 className="d-flex justify-content-center m-3">JS Back-End</h3>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalSixBlogContent */}
        <Modal
          isOpen={isOpen6}
          onRequestClose={toggleModalSix}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalSix}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalSixBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalSixBlogContent */}
      </div>
     
    </>
  );
};

export default Certificate;
