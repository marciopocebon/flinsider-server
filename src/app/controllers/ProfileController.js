import User from '../models/User';

export default {
  async show(req, res) {
    const user = await User.findById(req.userId).populate({
      path: 'events',
      populate: {
        path: 'launch',
      } 
    });

    return res.json(user);
  },

  async update(req, res) {
    const { name, company, belt } = req.body;

    const user = await User.findByIdAndUpdate(req.userId, {
      name, company, belt
    }, { new: true });

    return res.json(user);
  },
};