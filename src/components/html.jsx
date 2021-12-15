import React from "react";
import PropTypes from "prop-types";

const HTML = (props) => {
  // const metatagsArray = [];

  // props.metatags.forEach((item) => {
  //   metatagsArray.push(<meta {...item} />);
  // });
  return (
    <html>
      <head>
        <title>Chapter 2 - Recipes</title>
        {/* {metatagsArray} */}
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        /> */}

        <link rel="stylesheet" href="assets/style.css" />
      </head>
      <body>
        <div
          id="react-content"
          dangerouslySetInnerHTML={{
            __html: props.renderedToStringComponents,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})`,
          }}
        />
        <script type="application/javascript" src="browser.js" />{" "}
      </body>
    </html>
  );
};

HTML.propTypes = {
  renderedToStringComponents: PropTypes.string,
};

export default HTML;
