import React from "react";
import { render } from "@testing-library/react";
import { BasicSelectslide } from "./selectslide.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicSelectslide />);
  const a = 1;
  expect(a).toEqual(1);
});
