import express from 'express';
import { router } from './routes';
import * as dotenv from "dotenv";
import cors from 'cors'

const https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');

dotenv.config();

import './database';

const app = express();

app.use(cors())

app.use(express.json());

app.use(router);

const options = {
    key: fs.readFileSync(path.resolve('key.pem')),
    cert: fs.readFileSync(path.resolve('cert.pem'))
  };
//https.createServer(options, app).listen(3333);
http.createServer(options, app).listen(3333);