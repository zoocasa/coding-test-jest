import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App", () => {
  // This is an example test showing some basics of testing a React component with React Testing Library
  // More examples: https://testing-library.com/docs/react-testing-library/example-intro
  test("The app renders", async () => {
    render(<App />);

    const content = screen.getByTestId("content");

    await userEvent.click(content);

    expect(content).toBeInTheDocument();
  });
});
