import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "../BookingForm/BookingForm.js";

describe("BookingForm", () => {
  const mockProps = {
    availableTimes: ["17:00", "18:00", "19:00"],
    updateTimes: jest.fn(),
    submitForm: jest.fn(),
  };

  test("date input has correct attributes", () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min", expect.any(String));
    expect(dateInput).toHaveAttribute("max", expect.any(String));
  });

  test("time select has correct attributes", () => {
    render(<BookingForm {...mockProps} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
    expect(timeSelect).toHaveAttribute("id", "res-time");
  });

  test("guests input has correct attributes", () => {
    render(<BookingForm {...mockProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("step", "1");
  });

  test("occasion select has correct attributes", () => {
    render(<BookingForm {...mockProps} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("id", "occasion");
  });

  test("submit button has correct attributes", () => {
    render(<BookingForm {...mockProps} />);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });
    expect(submitButton).toHaveAttribute("type", "submit");
  });

  describe("Form Validation", () => {
    test("should show error when date is not selected", async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: "" } });

      await waitFor(() => {
        expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
      });
    });

    test("should not show error when valid date is selected", async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      const validDate = new Date().toISOString().split("T")[0]; // Today's date
      fireEvent.change(dateInput, { target: { value: validDate } });

      await waitFor(() => {
        expect(screen.queryByText(/please select a date/i)).not.toBeInTheDocument();
      });
    });

    test("should show error when time is not selected", async () => {
      render(<BookingForm {...mockProps} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      fireEvent.change(timeSelect, { target: { value: "" } });

      await waitFor(() => {
        expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
      });
    });

    test("should not show error when valid time is selected", async () => {
      render(<BookingForm {...mockProps} />);
      const timeSelect = screen.getByLabelText(/choose time/i);
      fireEvent.change(timeSelect, { target: { value: "17:00" } });

      await waitFor(() => {
        expect(screen.queryByText(/please select a time/i)).not.toBeInTheDocument();
      });
    });

    test("should show error when guests number is invalid", async () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: "0" } });

      await waitFor(() => {
        expect(screen.getByText(/please enter a number between 1 and 10/i)).toBeInTheDocument();
      });
    });

    test("should not show error when guests number is valid", async () => {
      render(<BookingForm {...mockProps} />);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: "5" } });

      await waitFor(() => {
        expect(screen.queryByText(/please enter a number between 1 and 10/i)).not.toBeInTheDocument();
      });
    });

    test("submit button should be disabled when form is invalid", async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: "" } });

      await waitFor(() => {
        expect(screen.getByRole("button", { name: /make your reservation/i })).toBeDisabled();
      });
    });

    test("submit button should be enabled when form is valid", async () => {
      render(<BookingForm {...mockProps} />);
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);

      fireEvent.change(dateInput, { target: { value: new Date().toISOString().split("T")[0] } });
      fireEvent.change(timeSelect, { target: { value: "17:00" } });
      fireEvent.change(guestsInput, { target: { value: "5" } });

      await waitFor(() => {
        expect(screen.getByRole("button", { name: /make your reservation/i })).toBeEnabled();
      });
    });
  });
});
