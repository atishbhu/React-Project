import './App.css';
import DogTile from './DogTile';

function App() {
  return (
      <div>
        <h1>welcome to learning components</h1>
        <div className="puppy">
          <DogTile />
          <DogTile />
          <DogTile />
          <DogTile />
          <DogTile />
        </div>
    </div>

  );
}

export default App;
