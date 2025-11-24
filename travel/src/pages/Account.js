// src/pages/Account.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useBookings } from "../context/BookingContext";

function Account() {
  const { user } = useAuth();
  const { favorites, bookings, removeBooking } = useBookings();

  return (
    <div className="account-page">
      {/* Basic info */}
      <section className="app-section-card mb-3">
        <h1 className="mb-2">My account</h1>
        <p className="mb-1">
          Signed in as: <strong>{user?.username}</strong>
        </p>
        <p className="text-muted mb-0">
          In this phase, favourites and bookings are stored only on the
          frontend (no real backend or database yet).
        </p>
      </section>

      {/* Favourite events */}
      <section className="app-section-card mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="mb-1">Favourite events</h2>
            <p className="text-muted mb-0">
              Events you marked with the heart icon on the Events page.
            </p>
          </div>
        </div>

        {favorites.length === 0 ? (
          <p className="text-muted mt-2">
            You haven&apos;t added any favourite events yet.
          </p>
        ) : (
          <div className="row g-3 mt-3">
            {favorites.map((event) => (
              <div key={event.id} className="col-12 col-md-6 col-lg-4">
                <article className="event-card">
                  <div className="event-image-wrap">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="event-image"
                    />
                    <span className="event-season-pill">
                      {event.season}
                    </span>
                  </div>
                  <div className="event-body">
                    <h3 className="event-title">{event.name}</h3>
                    <p className="event-place">{event.place}</p>
                    <p className="event-description">
                      {event.description}
                    </p>
                    <span className="event-type-pill">{event.type}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Event bookings table */}
      <section className="app-section-card">
        <div className="d-flex justify-content-between align-items-center">
          <div className="section-heading mb-2">
            <h2 className="mb-1">Event bookings</h2>
            <p className="text-muted mb-0">
              Booking requests you sent from the Events page.
            </p>
          </div>
        </div>

        {bookings.length === 0 ? (
          <p className="text-muted mt-2">No bookings yet.</p>
        ) : (
          <div className="table-responsive mt-3">
            <table className="table more-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Remove</th> {/* NEW column */}
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{b.eventName}</td>
                    <td>{b.name}</td>
                    <td>{b.phone}</td>
                    <td>{b.email}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeBooking(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default Account;
