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

// export default App;
import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [githubData, setGithubData] = useState(null);
  const username = "NitchakarnJ"; // ← เปลี่ยนเป็น GitHub ของคุณ

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
      })
      .catch((err) => console.error(err));
  }, []); // [] = รันครั้งเดียวตอนโหลดหน้า

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My First React App</h1>

      {githubData ? (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
        />
      ) : (
        <p>Loading data from GitHub...</p>
      )}
    </div>
  );
}

export default App;
