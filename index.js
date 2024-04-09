import express, { urlencoded } from 'express';
import { updateCryptocurrencies } from './controllers/cryptoListController.js';
import cron from 'node-cron';
import connectDB from './db.js';
import dotenv from 'dotenv';
import priceRoutes from './routes/priceRoutes.js';
import bodyParser from 'body-parser';
import companyRoutes from './routes/companiesRoute.js'


dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

connectDB();

//Schedule cron job to update cryptocurrencies every hour
cron.schedule('0 * * * *', updateCryptocurrencies);

//cron.schedule('* * * * *', updateCryptocurrencies);


app.use(bodyParser.json());
app.use(express.json());

app.use('/list', companyRoutes);
app.use('/api', priceRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running `);
});


app.get("/", (req,res)=>{
  res.send("This is / page")
})