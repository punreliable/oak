import React from "react";
import { render } from "@testing-library/react";
import { vi, describe, expect, it, beforeEach, afterEach } from "vitest";
import { getByText } from "@testing-library/dom";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("displays the current year", () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      getByText(
        currentYear.toString()
      )
    ).toReturn;
  });
});
