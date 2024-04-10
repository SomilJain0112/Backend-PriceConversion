import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const companyListFetcher = async (currency) => {
  try {
    const apiKey = process.env.API_KEY;

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

    return companyNames
  } catch (error) {
    console.error("Error fetching list of companies :", error.message);
    throw new Error("Error fetching list of companies");

  }
};
