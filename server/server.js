import express from 'express';
import cors from  'cors';
import bodyParser from "body-parser";

// routes from db (this comment and accompanying line of code from Kimberly)
import db from './db/db-connection.js';
import sightingsRouter from "./routes/sightings.js"
import individualsRouter from "./routes/individuals.js"
//***I DID NOT NOTICE THE AUTOCOMPLETE DROPPED THE FILE EXTENSION AND BROKE MY CODE */
//import individualsRouter from "./routes/individuals"
import speciesRouter from "./routes/species.js"

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/species', speciesRouter);
app.use('/individuals', individualsRouter);
app.use('/sightings', sightingsRouter);



// router.get("/", function (req, res) {
//   res.send("Hello");
// });



// creates an endpoint for the route /api (this comment and next few lines of code from Kimberly)
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});


app.listen(PORT, () => console.log(`Ruthie, you've done it again on port ${PORT}`));