import parseISO from 'date-fns/parseISO';

import User from '../models/User';
import Event from '../models/Event';

export default {
  async index(req, res) {
    const user = await User.findById(req.userId).populate('events');

    return res.json(user.events);
  },

  async store(req, res) {
    const { events } = req.body;

    const user = await User.findById(req.userId);

    const userEvents = events.map(event => ({
      title: event.title,
      startDate: parseISO(event.startDate),
      endDate: parseISO(event.endDate),
    }))

    const createdEvents = await Event.create(userEvents);
    const createdEventsIds = createdEvents.map(event => event._id);

    user.events.push(...createdEventsIds);

    await user.save();

    return res.json(createdEvents);
  }
};