//IMPORTS PACKAGES  // 
import 'dotenv/config'
import express from 'express';
import 'colors'
import cors from 'cors'
import morgan from 'morgan';
// IMPORT FILE  //
import connectdb from './src/config/db.js';
import routes from './src/routes/userRoutes.js';
import errorMiddleware from './src/middleware/errorMiddleware.js';

//rest object  //
const app = express();


// mongoDB connection 
connectdb();

// routes   //

 
//middleWare  // 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',routes);
app.use(cors());
app.use(morgan('dev'));

//error middle ware  // 
app.use(errorMiddleware)

//listen  // 
const port = process.env.PORT || 5000
app.listen(port,() =>{
console.log(`server is connected and listning at port ${port}`.bgMagenta.bold);
});
