import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Enable CORS so the frontend can access the API
app.use(cors());
app.use(express.json());

// Endpoint to provide statistics
app.get('/api/stats', (req, res) => {
  // Mock data representing properties in the system
  const possibleStates = ['RS', 'SC', 'PR', 'SP', 'MG', 'MS', 'MT', 'GO', 'BA', 'TO', 'PA'];
  
  // Random variation of farms
  const baseFarms = 59;
  const variation = Math.floor(Math.random() * 5) - 2; // -2 to +2
  const currentFarms = baseFarms + variation;

  // Pick a random number of states between 4 and 7 to simulate where these farms are
  const numStates = Math.floor(Math.random() * 4) + 4; // 4 to 7
  
  // Shuffle possible states and pick the first `numStates`
  const shuffled = possibleStates.sort(() => 0.5 - Math.random());
  const activeStates = shuffled.slice(0, numStates);

  res.json({
    fazendas: currentFarms,
    estados: activeStates
  });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
