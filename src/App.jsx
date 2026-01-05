import ProfileCard from "./components/ProfileCard";
function App() {
  return (
    <div>
      <h1>My first React App</h1>
      <ProfileCard 
      name = "firstname"
      role = "student"
      bio = "testtesttesttesttesttesttest"
      />

      <ProfileCard 
      name = "firstname2"
      role = "student"
      bio = "testtesttesttesttesttesttest2"
      />
    </div>
  );
}

export default App;
