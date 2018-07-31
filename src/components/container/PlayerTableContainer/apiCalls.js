import playerData from './playerData';
import adpData from './adpData';

// The positions we want to have in our app
const validPositions = ['QB', 'RB', 'WR', 'TE'];

// Simulate a relatively slow API call
const fetchPlayersPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(playerData);
  }, 1000);
});

export const fetchPlayers = async () => {
  const rawPlayers = await fetchPlayersPromise;
  return rawPlayers.filter(player => (
    validPositions.includes(player.position) &&
    player.team !== 'FA'
  ));
}

// Simulate a relatively slow API call
const fetchADPPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(adpData);
  }, 1000);
});

export const fetchADP = async () => {
  return await fetchADPPromise;
}
