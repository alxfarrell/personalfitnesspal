import React, { useState } from "react";

export default function WorkoutSearch() {
  const [muscleGroup, setMuscleGroup] = useState("");
  const [level, setLevel] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ muscleGroup, level, num: 100 });
      const res = await fetch(`/api/random-workout?${params.toString()}`);
      if (!res.ok) {
        const { error: errMsg = "Workout not found" } = await res
          .json()
          .catch(() => ({}));
        throw new Error(errMsg);
      }
      const data = await res.json();
      setResults(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const renderCard = (w, i) => (
    <div
      key={i}
      className="workout-card"
      style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8, marginBottom: 15 }}
    >
      <h3 style={{ marginTop: 0 }}>{w.Exercise || "Unnamed Exercise"}</h3>
      <p>
        <strong>Level:</strong> {w.Level || "—"}
      </p>
      <p>
        <strong>Muscle Group:</strong> {w.MuscleGroup || "—"}
      </p>
      <p>
        <strong>Movement:</strong> {w["P / P"] || "—"}
      </p>
      <p>
        <strong>Region (U/L/C):</strong> {w["U/L/C"] || "—"}
      </p>
      <p>
        <strong>Modality:</strong> {w.Modality || "—"}
      </p>
      <p>
        <strong>Joint:</strong> {w.Joint || "—"}
      </p>
    </div>
  );

  return (
    <div className="container" style={{ padding: 20 }}>
      <h2>Workout Finder</h2>

      <form onSubmit={handleSearch} style={{ marginBottom: "1em" }}>
        <input
          type="text"
          placeholder="Muscle group (e.g. Chest)"
          value={muscleGroup}
          onChange={(e) => setMuscleGroup(e.target.value)}
          required
          style={{ marginRight: 10 }}
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          style={{ marginRight: 10 }}
        >
          <option value="">Any level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {loading && <p>Loading workouts…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ maxHeight: "70vh", overflowY: "auto", paddingRight: 6 }}>
        {results.length === 0 && !loading && !error && (
          <p style={{ fontStyle: "italic" }}></p>
        )}
        {results.map(renderCard)}
      </div>
    </div>
  );
}
