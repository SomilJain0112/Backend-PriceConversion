import axios from 'axios';
import Cryptocurrency from '../models/Cryptocurrency.js';


export const updateCryptocurrencies = async () => {
  try {
    // Delete previous list of cryptocurrencies
    await Cryptocurrency.deleteMany({});
    
    // Fetch cryptocurrency data from Coingecko API
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    const cryptocurrencies = response.data;

    const formattedCryptocurrencies = cryptocurrencies.map(crypto => ({
      id: crypto.id,
      name: crypto.name
    }));
    await Cryptocurrency.insertMany(formattedCryptocurrencies);

  } catch (error) {
    console.error('Error updating cryptocurrencies:', error);
  }
};