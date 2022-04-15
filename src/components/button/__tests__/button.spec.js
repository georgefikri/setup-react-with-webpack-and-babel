import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "../buttons";

let onClick = jest.fn();

describe("testing button", () => {
  afterEach(cleanup);

  test("should button clicked successfully ", () => {
    const { getByTestId } = render(<Button data-testid="button" />);
    const linkElement = getByTestId("button");
    fireEvent.click(linkElement);
  });

  //   snapshot

  test("should do snapshot", () => {
    const ButtonComp = renderer.create(<Button type={""} />).toJSON();
    expect(ButtonComp).toMatchSnapshot();
  });
});
