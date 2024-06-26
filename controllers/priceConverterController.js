import { calculatePrice } from "../services/priceConvertingService.js";

export const getPrice = async (req, res) => {
  try {
    const { fromCurrency, toCurrency, date } = req.body;
    
    const price = await calculatePrice(fromCurrency, toCurrency, date);
    res.status(200).json({ price });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
