// src/context/BookingContext.js
import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  // all bookings made from the Events page
  const [bookings, setBookings] = useState([]);

  // favourite events
  const [favorites, setFavorites] = useState([]);

  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  // ❌ NEW: remove booking by its index in the list
  const removeBooking = (index) => {
    setBookings((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleFavorite = (event) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === event.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== event.id);
      }
      return [...prev, event];
    });
  };

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, removeBooking, favorites, toggleFavorite }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}
