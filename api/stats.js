export default function handler(req, res) {
  // CORS isn't strictly needed for Vercel if frontend and backend are on the same domain,
  // but it's safe to add just in case.
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

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

  res.status(200).json({
    fazendas: currentFarms,
    estados: activeStates
  });
}
