//Kimberly shared her code with me
import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

  // create the get request


//   ***********Get request***************
  router.get('/', async (req, res) => {
    
    try {
      const species = await db.query('SELECT * FROM species ORDER BY id', [true]);
      res.send(species);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
  
  // create the POST request
//   router.post('/api/species', async (req, res) => {
//     const newSpecies = {
//       common_name: req.body.common_name,
//       scientific_name: req.body.scientific_name,
//       population: req.body.population,
//       conservation_status: req.body.conservation_status,
//       created_on: req.body.created_on,
  
//     };
//     console.log([newSpecies.common_name, newSpecies.scientific_name]);
//     const result = await db.query(
//       'INSERT INTO species(common_name, scientific_name, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5) RETURNING *',
//       [newSpecies.common_name, newSpecies.scientific_name, newSpecies.population, newSpecies.conservation_status, newSpecies.created_on ],
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   });


//   ******NEED DELETE HERE Router.DELETE STUFF***************

  export default router;