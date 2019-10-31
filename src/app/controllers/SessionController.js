import User from '../models/User';
import axios from 'axios';

export default {
  async store(req, res) {
    const { token, latitude, longitude } = req.body;

    const response = await axios.get(`https://graph.facebook.com/me?fields=picture,name,email&access_token=${token}`);

    const { id: facebookId, name, email, picture } = response.data;

    let user = await User.findOne({ facebookId });

    if (!user) {
      user = await User.create({
        facebookId,
        name,
        email,
        latitude,
        longitude,
        avatar: picture.data.url,
      })
    }

    return res.json({
      user,
      created: user.isNew,
      token: user.generateToken(),
    });
  },
};