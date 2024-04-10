import mongoose from 'mongoose';

const CryptocurrencySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});
const Cryptocurrency = mongoose.model('Cryptocurrency', CryptocurrencySchema);

export default Cryptocurrency;
