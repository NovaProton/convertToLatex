const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to receive code and convert it to LaTeX
app.post('/convert', (req, res) => {
    const { code } = req.body;
    // Logic to convert the code to LaTeX (you might need to customize this)
    const latexCode = convertToLatex(code);
    res.json({ latex: latexCode });
});

function convertToLatex(code) {
    // Replace this with logic for using Numbat or similar
    return code.replace(/\/x/g, '\\frac{1}{x}');
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
