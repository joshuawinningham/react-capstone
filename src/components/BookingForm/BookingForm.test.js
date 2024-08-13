import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm/BookingForm.js";

describe("BookingForm", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  const renderBookingForm = () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders BookingForm correctly", () => {
    renderBookingForm();

    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Make Your reservation" })).toBeInTheDocument();
  });

  test("displays available times", () => {
    renderBookingForm();

    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect.children.length).toBe(mockAvailableTimes.length + 1); // +1 for default option
    mockAvailableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test("calls updateTimes when date is changed", () => {
    renderBookingForm();

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2023-06-20" } });

    expect(mockUpdateTimes).toHaveBeenCalledWith("2023-06-20");
  });

  test("calls submitForm with form data when form is submitted", () => {
    renderBookingForm();

    fireEvent.change(screen.getByLabelText("Choose date"), { target: { value: "2023-06-20" } });
    fireEvent.change(screen.getByLabelText("Choose time"), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByRole("button", { name: "Make Your reservation" }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2023-06-20",
      time: "18:00",
      guests: 4, // Changed from string to number
      occasion: "Birthday",
    });
  });

  test("form is submitted with default values if fields are empty", () => {
    renderBookingForm();

    fireEvent.click(screen.getByRole("button", { name: "Make Your reservation" }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: expect.any(String),
      time: "",
      guests: 1,
      occasion: "Birthday",
    });
  });
});
