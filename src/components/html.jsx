import React from "react";
import PropTypes from "prop-types";

// export default class HTML extends React.Component {
//   render() {
//     return (
//       <html>
//         <head>
//           <title>Chapter 2 - Recipes</title>
//           <link
//             rel="stylesheet"
//             href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css"
//           />
//         </head>
//         <body>
//           <div
//             id="react-content"
//             dangerouslySetInnerHTML={{
//               __html: this.props.renderedToStringComponents,
//             }}
//           />
//           {/* <script dangerouslySetInnerHTML={{ __html: this.props.data }} /> */}
//           <script src="/browser.js" />
//         </body>
//       </html>
//     );
//   }
// }

const HTML = (props) => {
  return (
    <html>
      <head>
        <title>Chapter 2 - Recipes</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/semantic-ui/2.2.2/semantic.min.css"
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
        {/* <script dangerouslySetInnerHTML={{ __html: this.props.data }} /> */}
        <script src="/browser.js" />
      </body>
    </html>
  );
};

HTML.propTypes = {
  renderedToStringComponents: PropTypes.string,
};

export default HTML;
