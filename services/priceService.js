// File name: services/priceService.js
import axios from "axios";


const converterFunction = async (fromCurrency, tocurrency, date) => {
  try {
    const apiKey = process.env.API_KEY
    const response1 = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}&localization=false`,
      {
        headers: {
        'Authorization':`Bearer ${apiKey}`
        }
      }
    );

    const firstCurrInUsd= response1.data.market_data.current_price.usd;
    const response2 = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${tocurrency}/history?date=${date}&localization=false`,
      {
        headers: {
        'Authorization':`Bearer ${apiKey}`
        }
      }
    );

    const secondCurrInUsd= response2.data.market_data.current_price.usd;
    const convertedValue= firstCurrInUsd/secondCurrInUsd
    return convertedValue;
    
  } catch (error) {
    console.error("Error fetching historical price data:", error.message);
    throw new Error("Error fetching historical price data");
  }
};

export const calculatePrice = async (fromCurrency, toCurrency, date) => {
  return await converterFunction(fromCurrency,toCurrency, date);
};
