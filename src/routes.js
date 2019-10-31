import express from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProfileController from './app/controllers/ProfileController'
import CalendarController from './app/controllers/CalendarController'
import LaunchController from './app/controllers/LaunchController'

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/profile', ProfileController.show);
routes.put('/profile', ProfileController.update);

routes.get('/calendar', CalendarController.index);
routes.post('/calendar', CalendarController.store);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

routes.post('/calendar/:event_id/launchs', LaunchController.store);

export default routes;
