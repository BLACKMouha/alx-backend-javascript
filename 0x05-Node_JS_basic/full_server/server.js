/* jshint esversion: 8 */

import express from 'express';
import linkRoutes from './routes';

const port = 1245;
const app = express();

linkRoutes(app);

app.listen(port);

module.exports = app;
export default app;
