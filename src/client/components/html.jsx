import React from "react";
import PropTypes from "prop-types";

const HTML = (props) => {
  const metatagsArray = [];

  props.metatags.forEach((item, index) => {
    metatagsArray.push(<meta key={`meta-${index}`} {...item} />);
  });

  return (
    <html>
      <head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {metatagsArray}
        {Object.keys(props.assets.chunks().styles).map((key) => {
          return (
            <link
              key={key}
              rel="stylesheet"
              href={props.assets.chunks().styles[key]}
            />
          );
        })}
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
