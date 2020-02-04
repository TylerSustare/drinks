import React from "react";
import { fireEvent, render, wait } from "@testing-library/react-native";
import Thing from "../src/Example";

test("examples of some things", async () => {
  const { getByTestId, getByText, queryByTestId, baseElement } = render(
    <Thing />
  );
  const famousWomanInHistory = "Ada Lovelace";

  const input = getByTestId("input");
  fireEvent.changeText(input, famousWomanInHistory);

  const button = getByText("Print Username");
  fireEvent.press(button);

  await wait(() => expect(queryByTestId("printed-username")).toBeTruthy());

  expect(getByTestId("printed-username").props.children).toBe(
    famousWomanInHistory
  );
  expect(baseElement).toMatchSnapshot();
});
