import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-jxhrd.mongodb.net/flinsider?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333);
