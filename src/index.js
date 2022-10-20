// Imports
import express from 'express';
import morgan from 'morgan';
import router from './routes/task.routes.js';
import path from 'path';
import main from './database.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares  
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', router);

// Static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname + '/src/public')));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Listen on port ${app.get('port')}`);
})