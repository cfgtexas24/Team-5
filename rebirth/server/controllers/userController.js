const fs = require('fs');
const path = require('path');

// Read data from JSON file
exports.getAllUsers = (req, res) => {
  const filePath = path.join(__dirname, '../data/data.json');
  
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file', error: err });
    }

    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (parseError) {
      res.status(500).json({ message: 'Error parsing JSON', error: parseError });
    }
  });
};

