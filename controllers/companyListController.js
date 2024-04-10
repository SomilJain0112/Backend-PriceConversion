import { companyListFetcher } from "../services/companyListService.js";

export const getCompanyList = async (req, res) => {
  try {
    
    const { currency } = req.body;

    if (currency !== "bitcoin" && currency !== "ethereum") {
      return res.status(400).json({
        error: "Invalid currency. Only bitcoin or ethereum are supported.",
      });
    }
    const companyNames= await companyListFetcher(currency);

    res.status(200).json(companyNames);
  } catch (error) {

    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });

  }
};
