const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/api/v2/rocket-man1', (req, res) => {
    const myobject = {who: 'rocket man', where: 'mars'}
    const jsonString = JSON.stringify(myobject);
    res.json(jsonString);
})

app.listen(port, () => {
    const appPid = path.resolve(__dirname, 'app.pid')
    fs.writeFileSync(appPid, `${process.pid}`);
    console.log(`Server running at http://localhost:${port}`);
})