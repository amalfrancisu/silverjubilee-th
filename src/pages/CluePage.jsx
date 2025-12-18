import { useParams, Link } from 'react-router-dom';
import { clues } from '../clues'; // Import the clue data
import './CluePage.css';

function CluePage() {
  // Get the 'cluePath' from the URL (e.g., '/clue/jalebi' -> cluePath is 'jalebi')
  const { cluePath } = useParams();
  
  // Find the clue data that matches the pathId from the URL.
  const clue = clues.find(c => c.pathId === cluePath);

  // Style for the background image, dynamically set
  const backgroundStyle = {
    backgroundImage: `url(${clue?.backgroundImage})`,
  };

  // If no clue is found for the given ID, show an error message.
  if (!clue) {
    return (
      <div className="app-container" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div className="content-overlay">
          <h1 className="page-title">Clue Not Found</h1>
          <p className="clue-text">
            Sorry, there is no clue at this address.
            <br /><br />
            <Link to="/clue/jalebi" style={{ color: '#fff' }}>Return to the first clue</Link>
          </p>
        </div>
      </div>
    );
  }

  // If the clue is found, render the page
  return (
    <div className="app-container" style={backgroundStyle}>
      <main className="content-overlay">
        <h1 className="page-title">Kampus Kwest</h1>
        <h2 className="subheading">{clue.subheading}</h2>
        <p className="clue-text">{clue.text}</p>
      </main>
    </div>
  );
}

export default CluePage;
