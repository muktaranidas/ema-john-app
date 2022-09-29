import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="how-does-react-work">
        <p>
          <span className="how-does-react-work-span">How does React work:</span>{" "}
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser’s DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it’s worth
          keeping a DOM tree in it to speed up its manipulation. Although React
          was conceived to be used in the browser, because of its design it can
          also be used in the server with Node.js.
        </p>
      </div>

      <div className="state-props">
        <div className="state">
          <span className="state-span">State</span>
          <p>
            1/React state is multiple and its value can be changed as per
            requirement.
          </p>
          <br />
          <p>2/Set by parent component.</p>
          <p>
            <br />
            3/State is local to a component and cannot be used in other
            components.
          </p>
        </div>
        <div className="props">
          <span className="props-span">Props</span>
          <p>
            1/React state is multiple and its value can be changed as per
            requirement.
          </p>
          <br />
          <p>2/Set by parent component.</p>
          <br />
          <p>
            3/Props allows child components to read values from parent
            components.
          </p>
        </div>
      </div>

      <div className="useeffect-dataload">
        <p>
          <span className="useeffect-dataload-span">useEffect DataLoaded:</span>
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers.
        </p>
      </div>
    </div>
  );
};

export default Footer;
