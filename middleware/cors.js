const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins and headers for testing purposes
app.use(cors());