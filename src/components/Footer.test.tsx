import { render } from "@testing-library/react";
import { getByText, Matcher } from "@testing-library/dom";
import Footer from "../components/Footer";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument: Matcher<R>;
    }
  }
}

describe("Footer", () => {
  it("displays the current year", () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(currentYear.toString())).toBeInTheDocument();
  });
});
