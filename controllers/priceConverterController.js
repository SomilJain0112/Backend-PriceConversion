import { calculatePrice } from "../services/priceConvertingService.js";

export const getPrice = async (req, res) => {
  try {
    const { fromcurrency, tocurrency, date } = req.body;
    const price = await calculatePrice(fromcurrency, tocurrency, date);
    res.status(200).json({ price });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
