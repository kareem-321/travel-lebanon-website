import { useState } from "react";
import { cities } from "../data/cities";
import "../styles/more.css";

function More() {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [cityOption, setCityOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const selectedCity =
      data.get("citySelect") === "other"
        ? data.get("cityOther")
        : data.get("citySelect");

    const newSuggestion = {
      id: Date.now(),
      name: data.get("name"),
      city: selectedCity,
      place: data.get("place"),
      maps: data.get("maps"),
      description: data.get("description"),
    };

    setSuggestions((prev) => [...prev, newSuggestion]);
    e.target.reset();
    setCityOption("");
  };

  // ✨ NEW remove function
  const removeSuggestion = (id) => {
    setSuggestions((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="more-page">
      <section className="app-section-card">

        <div className="more-suggest-header mb-3">
          <div>
            <h2 className="mb-1">Suggest a place</h2>
            <p className="text-muted mb-0">
              Share a city or place in Lebanon that you think should be added in future versions.
            </p>
          </div>

          <button
            className="btn btn-outline-primary btn-sm more-toggle-btn"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? "Hide" : "Show"}
          </button>
        </div>

        {isOpen && (
          <>
            {/* ---------- FORM ---------- */}
            <form className="more-form" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input name="name" className="form-control" required />
              </div>

              <div className="mb-2">
                <label className="form-label">City</label>
                <select
                  name="citySelect"
                  className="form-select"
                  required
                  value={cityOption}
                  onChange={(e) => setCityOption(e.target.value)}
                >
                  <option value="">Choose a city…</option>
                  {cities.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="other">Other city</option>
                </select>
              </div>

              {cityOption === "other" && (
                <div className="mb-2">
                  <label className="form-label">Other city name</label>
                  <input
                    name="cityOther"
                    className="form-control"
                    placeholder="Type the city name"
                    required
                  />
                </div>
              )}

              <div className="mb-2">
                <label className="form-label">Place</label>
                <input name="place" className="form-control" required />
              </div>

              <div className="mb-2">
                <label className="form-label">Maps link</label>
                <input name="maps" className="form-control" />
              </div>

              <div className="mb-2">
                <label className="form-label">Description</label>
                <textarea name="description" className="form-control" rows="2" />
              </div>

              <button type="submit" className="btn btn-primary">
                Send suggestion
              </button>
            </form>

            {/* ---------- TABLE ---------- */}
            {suggestions.length > 0 && (
              <div className="more-table-wrapper mt-4">
                <h3 className="more-table-title">Your suggestions</h3>

                <div className="table-responsive">
                  <table className="table more-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Place</th>
                        <th>Maps</th>
                        <th>Description</th>
                        <th>Remove</th> {/* NEW COLUMN */}
                      </tr>
                    </thead>

                    <tbody>
                      {suggestions.map((s, index) => (
                        <tr key={s.id}>
                          <td>{index + 1}</td>
                          <td>{s.name}</td>
                          <td>{s.city}</td>
                          <td>{s.place}</td>

                          <td className="more-table-link">
                            {s.maps ? (
                              <a
                                href={s.maps}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Open
                              </a>
                            ) : (
                              "—"
                            )}
                          </td>

                          <td>{s.description || "—"}</td>

                          {/* DELETE BUTTON */}
                          <td>
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => removeSuggestion(s.id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default More;
