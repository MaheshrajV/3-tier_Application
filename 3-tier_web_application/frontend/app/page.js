"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      setMessage(data.message || "Login successful");
    } catch (err) {
      console.error(err);
      setMessage("Error connecting to backend");
    }
    setLoading(false);
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Overlay for better contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(3px)",
        }}
      ></div>

      <form
        onSubmit={handleLogin}
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.15)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          width: "320px",
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          🔐 Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "none",
            borderRadius: "8px",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "none",
            borderRadius: "8px",
            outline: "none",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(90deg, #0070f3, #00b4d8)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #0051a2, #0088a9)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #0070f3, #00b4d8)")
          }
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p style={{ marginTop: "15px", color: "#fff" }}>{message}</p>
        )}
      </form>
    </main>
  );
}
