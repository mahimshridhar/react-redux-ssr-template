import React from "react";
// import { expect } from "chai";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./app";

const mockStore = configureMockStore();
const store = mockStore({});

describe("App Component", () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = shallow(
      //   <Provider store={store}>
      <App />
      //   </Provider>
    );
  });

  afterEach(() => {
    wrappedComponent = null;
  });

  it("Uses Link Components", () => {
    wrappedComponent.setProps({ props: {} });

    expect(wrappedComponent.find(Link).length).toEqual(3);
  });
});
