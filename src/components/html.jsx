import React from "react";
import PropTypes from "prop-types";

const HTML = (props) => {
  return (
    <html>
      <head>
        <title>Chapter 2 - Recipes</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />

        <link rel="stylesheet" href="/assets/style.css" />
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
