import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

export const getCompanyList = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY
    const { currency } = req.body;

    if (currency !== "bitcoin" && currency !== "ethereum") {
      return res.status(400).json({
        error: "Invalid currency. Only bitcoin or ethereum are supported.",
      });
    }

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const companyList = response.data.companies;
    const companyNames = companyList.map((company) => company.name);

    res.json(companyNames);
  } catch (error) {

    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });

  }
};
