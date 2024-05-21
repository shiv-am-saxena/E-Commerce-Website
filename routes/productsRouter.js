const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello hai re baba ');
});



module.exports = router;