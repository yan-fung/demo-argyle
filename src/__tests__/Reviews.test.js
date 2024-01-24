import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Reviews from "../components/Reviews";

describe("Reviews component", () => {
  it("render correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Reviews />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
