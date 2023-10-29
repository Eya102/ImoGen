const express = require('express');

const axios = require('axios');
const router = express.Router();

router.post('/textLogo', async (req, res) => {
  try {
    const textData = req.body;
    console.log(textData)
    const response = await axios.post('http://localhost:5000/prediction',  textData )
    res.status(200).json(response.data);
    console.log(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la communication avec FastAPI' });
  }
});

module.exports = router;


 



