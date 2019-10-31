import User from '../models/User';

export default {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findById(id).populate({
      path: 'events',
      populate: {
        path: 'launch',
      } 
    });

    return res.json(user);
  },
};