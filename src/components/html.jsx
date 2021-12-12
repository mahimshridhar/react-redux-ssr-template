import React from "react";
import PropTypes from "prop-types";

const HTML = (props) => {
  // const metatagsArray = [];

  // props.metatags.forEach((item) => {
  //   metatagsArray.push(<meta {...item} />);
  // });

  // console.log(
  //   "assets",
  //   props.assets.chunks().javascript.main,
  //   Object.keys(props.assets.chunks().javascript).length
  // );
  return (
    <html>
      <head>
        <title>React SSR Template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* {metatagsArray} */}

        {/* <link rel="stylesheet" href="assets/style.css" /> */}
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

        {Object.keys(props.assets.chunks().javascript).map((key) => {
          return (
            <script
              key={key}
              type="application/javascript"
              src={props.assets.chunks().javascript[key]}
            />
          );
        })}
      </body>
    </html>
  );
};

HTML.propTypes = {
  renderedToStringComponents: PropTypes.string,
};

export default HTML;
