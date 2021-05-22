// controllers/rsvps.js

module.exports = (app, models) => {
    // NEW
    app.get('/events/:id/rsvps/new', (req, res) => {
      models.Event.findByPk(req.params.eventId).then(event => {
        res.render('rsvps-new', { event: event });
      });
    });
  
    // CREATE
    app.post('/events/:eventId/rsvps', (req, res) => {
        models.Rsvp.create(req.body).then(rsvp => {
            res.redirect(`/events/${req.params.eventId}`);
        }).catch((err) => {
            console.log(err)
        });
    });
  
    // DESTROY  
   
  };