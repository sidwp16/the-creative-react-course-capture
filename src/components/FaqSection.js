import React from "react";
import { Faq } from "../style";

const FaqSection = () => {
  return (
    <>
      <Faq>
        <h2>
          Any questions? <span>FAQ</span>
        </h2>
        <div className="question">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              Necessitatibus, neque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Daily Schedule?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              Necessitatibus, neque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Diferrent Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              Necessitatibus, neque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What product do you offer.</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              Necessitatibus, neque.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Faq>
    </>
  );
};

export default FaqSection;
