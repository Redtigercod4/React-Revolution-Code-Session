import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackPage from "./feedbackPage";

describe("This is the testing for the feedback page", () => {
    it("Checks that the title is rendering on the page", () => {
        render(<FeedbackPage />);

        expect(screen.getByText(/React Revolution: Building the Web in React/i)).toBeInTheDocument();
        expect(screen.getByText(/Feedback Form/i)).toBeInTheDocument();
    });

    it("Checks the Team number entry renders on the page", () => {
        render(<FeedbackPage />);

        const teamNumberInput = screen.getByRole("textbox", { name: "Team Number" });

        expect(teamNumberInput).toBeInTheDocument();

        fireEvent.change(teamNumberInput, { target: { value: "2" } });

        expect(teamNumberInput).toHaveValue("2");
    });

    it("Checks the Positive entry renders on the page", () => {
        render(<FeedbackPage />);

        const positiveEntryInput = screen.getByRole("textbox", { name: "What did you most enjoy?" })

        expect(positiveEntryInput).toBeInTheDocument();

        fireEvent.change(positiveEntryInput, { target: { value: "This is a good workshop" } });

        expect(positiveEntryInput).toHaveValue("This is a good workshop");
    });

    it("Checks the Negative entry renders on the page", () => {
        render(<FeedbackPage />);

        const negativeEntryInput = screen.getByRole("textbox", { name: "What would you improve of the session?" });

        expect(negativeEntryInput).toBeInTheDocument();

        fireEvent.change(negativeEntryInput, { target: { value: "The information was wrong" } });

        expect(negativeEntryInput).toHaveValue("The information was wrong");
    });

    it("Checks the submit buttons renders on the page", () => {
        render(<FeedbackPage />);

        const submitButton = screen.getByRole("button", { name: "Submit" });

        expect(submitButton).toBeInTheDocument();
    })
})