import express from 'express';
import logger from './config/logger.js';
import authRoutes from './routes/auth-route.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import securityMiddleware from './middleware/security.middleware.js';
import usersRoutes from './routes/users-route.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser());

app.use(morgan('combined' , { stream: {write : (message) => logger.info(message.trim())
}}));

app.use(securityMiddleware);

app.get('/', (req, res) => {
  logger.info('Hello from acquistions !');
  res.status(200).send('Hello from acquistions !');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Acquisitions API is running!' });
});

app.use((req, res) =>{
  res.status(404).json({error: 'Route not found'});
});


export default app;
