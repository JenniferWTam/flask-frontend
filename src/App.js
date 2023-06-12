import './App.css';
import Animal from './components/Animals';

function App() {
  return (
<section className="Animal">
  <h1>The Sapphire Animal Adoption Agency</h1>
  <h2>Animal Listings</h2>
  <Animal></Animal>
  <Animal></Animal>
  <Animal></Animal>
  <Animal></Animal>
  </section>
  // {/* I want to list a bunch of animals... */}
  // {/* When react renders this JSX, it simply cannot/does not see these slashes as a comment. It will render this as if it wasnt commented */}
  );
}

export default App;
