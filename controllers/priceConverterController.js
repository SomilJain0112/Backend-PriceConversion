// Filename: controllers/priceController.js
import { calculatePrice } from "../services/priceService.js";

export const getPrice = async (req, res) => {
  try {
    const { fromCurrency, toCurrency, date } = req.body;
    const price = await calculatePrice(fromCurrency, toCurrency, date);
    res.json({ price });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
