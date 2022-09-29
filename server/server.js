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

//got this post working, moving it back to species now
// app.post('/api/species', async (req, res) => {
//   const newSpecies = {
//     common_name: req.body.common_name,
//     scientific_name: req.body.scientific_name,
//     population: req.body.population,
//     conservation_status: req.body.conservation_status,
//     created_on: req.body.created_on,

//   };
//   console.log([newSpecies.common_name, newSpecies.scientific_name]);
//   const result = await db.query(
//     'INSERT INTO species(common_name, scientific_name, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5) RETURNING *',
//     [newSpecies.common_name, newSpecies.scientific_name, newSpecies.population, newSpecies.conservation_status, newSpecies.created_on ],
//   );
//   console.log(result[0]);
//   res.json(result[0]);
// });

// router.get("/", function (req, res) {
//   res.send("Hello");
// });



// creates an endpoint for the route /api (this comment and next few lines of code from Kimberly)
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});


app.listen(PORT, () => console.log(`Ruthie, you've done it again on port ${PORT}`));