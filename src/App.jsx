// import ProfileCard from "./components/ProfileCard";
// function App() {
//   return (
//     <div>
//       <h1>My first React App</h1>
//       <ProfileCard 
//       name = "firstname"
//       role = "student"
//       bio = "testtesttesttesttesttesttest"
//       />

//       <ProfileCard 
//       name = "firstname2"
//       role = "student"
//       bio = "testtesttesttesttesttesttest2"
//       />
//     </div>
//   );
// }

// // export default App;
// import { useState, useEffect } from "react";
// import ProfileCard from "./components/ProfileCard";

// function App() {
//   const [githubData, setGithubData] = useState(null);
//   const username = "NitchakarnJ"; // ← เปลี่ยนเป็น GitHub ของคุณ

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setGithubData(data);
//       })
//       .catch((err) => console.error(err));
//   }, []); // [] = รันครั้งเดียวตอนโหลดหน้า

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>My First React App</h1>

//       {githubData ? (
//         <ProfileCard
//           name={githubData.name || githubData.login}
//           role="GitHub User"
//           bio={githubData.bio || "No bio available"}
//         />
//       ) : (
//         <p>Loading data from GitHub...</p>
//       )}
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  /* ================= GitHub API ================= */
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "NitchakarnJ"; // เปลี่ยนเป็นของคุณ

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  /* ================= Skills ================= */
  const [skills, setSkills] = useState(["React", "Git"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  /* ================= Dark Mode ================= */
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const bg = darkMode ? "#121212" : "#f4f6f8";
  const cardBg = darkMode ? "#1e1e1e" : "#ffffff";
  const text = darkMode ? "#ffffff" : "#000000";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: cardBg,
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Profile</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#333" : "#000",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* GitHub Section */}
        {loading && <p>Loading data from GitHub...</p>}

        {error && (
          <p style={{ color: "#e74c3c", fontWeight: "bold" }}>
            ❌ {error}
          </p>
        )}

        {githubData && !loading && (
          <ProfileCard
            name={githubData.name || githubData.login}
            role="GitHub User"
            bio={githubData.bio || "No bio available"}
          />
        )}

        <hr style={{ margin: "30px 0" }} />

        {/* Skills */}
        <h2>My Skills</h2>

        <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
          <input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={addSkill}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              background: "#3498db",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                background: darkMode ? "#333" : "#e0e0e0",
                fontSize: "14px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
