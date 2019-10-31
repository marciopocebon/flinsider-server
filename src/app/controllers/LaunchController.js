import Event from '../models/Event';
import Launch from '../models/Launch';

export default {
  async store(req, res) {
    const { event_id } = req.params;
    const { investment, listSize, revenue, links } = req.body;
    
    const event = await Event.findById(event_id);
    const launch = await Launch.create({ investment, listSize, revenue, links });

    event.launch = launch._id;

    await event.save();

    await event.populate('launch').execPopulate();

    return res.json(event);
  }
};