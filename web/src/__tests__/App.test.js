import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import App from "../App";

const wait = (amount = 0) => {
  return new Promise((resolve) => setTimeout(resolve, amount));
};

const actWait = async (amount = 0) => {
  await act(async () => {
    await wait(amount);
  });
};

describe("App component", () => {
  it("should be able to calculate the value of the phone connection", async () => {
    const { getByText, getByTestId } = render(<App />);

    await actWait();

    fireEvent.click(getByText("Custo da ligação"));

    await actWait();

    // expect(getByTestId("falemais-form")).toContainElement(
    //   getByText("A promoção FaleMais não cobre as regiões informadas!")
    // );
  });

});
