import React, { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTMl =
      Home.createTitle(props);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTMl =
      Home.createTitle(props);
  }, [props]);

  return (
    <div>
      <p>Home!</p>
    </div>
  );
};

Home.createMetatags = (params) => {
  const tags = [];

  tags.push({
    name: "description",
    content: "Home conent",
  });
  tags.push({
    property: "og:description",
    content: "Home description",
  });
  tags.push({
    property: "og:title",
    content: "Home title",
  });
  tags.push({
    property: "og:url",
    content: `http://localhost:8000`,
  });
  tags.push({
    property: "og:image",
    content: "Home image",
  });

  return tags;
};

Home.createTitle = (props) => {
  return `Home`;
};

export default Home;
