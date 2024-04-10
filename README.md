# Backend Price Conversion

## Getting Started

1. Clone the repository:

    ```
    git clone https://github.com/your-username/Backend-PriceConversion.git
    ```

2. Navigate to the project directory:

    ```
    cd Backend-PriceConversion
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Create a `.env` file and add the following variables:

    ```
    API_KEY=your-coingecko-api-key
    PORT=3000
    MONGODB_URI=your-mongodb-uri
    ```

5. Start the server:

    ```
    npm start
    ```

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv (for environment variables)

## Task 1

The previous list is deleted every hour, and a new list is fetched in the background every hour and then inserted into the database.

## API Endpoints

### Task 2: `POST /api/price`

This endpoint allows users to convert the price of a cryptocurrency from one currency to another for a specific date.

#### Request Body

Note : Access to historical data via the Public API is restricted to the past 365 days only(mentioned in coingecko documentation).
```json
{
    "fromcurrency": "bitcoin",
    "tocurrency": "basic-attention-token",
    "date": "12-01-2024"
}

#### Response

{
    "price": 176558.73727068843
}



### Task3: `POST /list/companies`

This endpoint allows users to get list of companies that hold the specifiedcurrency 

#### Request Body

```json
{
	"currency": "bitcoin" // Possible values are only bitcoin or ethereum.
}

Response 

```json
[
    "MicroStrategy Inc.",
    "Galaxy Digital Holdings",
    "Marathon Digital Holdings",
    "Tesla, Inc.",
    "Hut 8 Mining Corp",
    "Coinbase Global, Inc",
    "Block Inc.",
    "Riot Platforms, Inc",
    "Hive Blockchain",
    "CleanSpark Inc.",
    "NEXON Co Ltd",
    "Exodus Movement Inc",
    "Meitu Inc",
    "Bit Digital, Inc",
    "Bitfarms Limited",
    "NFT Investments PLC",
    "Cipher Mining",
    "DMG Blockchain Solutions Inc.",
    "Neptune Digital Assets Corp.",
    "BIGG Digital Assets Inc.",
    "Advanced Bitcoin Technologies AG",
    "FRMO Corp.",
    "The Brooker Group",
    "DigitalX",
    "LQwD Technologies Corp",
    "Cypherpunk Holdings Inc",
    "Core Scientific",
    "Mogo Inc."
]
