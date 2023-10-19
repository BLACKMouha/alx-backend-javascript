/* jshint esversion: 8 */

import express from 'express';
import linkRoutes from './routes';

const port = 1246;
const app = express();
app.use(express.json());

linkRoutes(app);

app.listen(port);

module.exports = app;
export default app;
