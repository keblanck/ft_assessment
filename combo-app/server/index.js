const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const WhoisApi = require('whois-api-js');


const db = mysql.createPool({
  host: 'mysql_db',
  user: 'MYSQL_USER',
  password: 'password',
  database: 'kathdb'
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send({'name': 'this sends'})
});

app.get('whois', (req, res) => {
  const client = WhoisApi.Client(req.apiKey);
  client.get(req.domainName)
    .then(resp => res.send(resp))
})


app.listen('3001', () => {})
