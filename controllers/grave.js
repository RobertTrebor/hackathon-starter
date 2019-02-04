const request = require('request');

/**
 * GET /graves
 * Contact form page.
 */
exports.getGraves = (req, res) => {
  // res.json({ Message: 'Hello Grave !' });
  if (!req.user) {
    return res.redirect('/');
  }

  request.get({ url: 'https://warm-chamber-7287.herokuapp.com/graves' }, (err, request, body) => {
    console.log(`err${err}request${request}`);
    const gravelist = JSON.parse(body);
    console.log(gravelist);
    res.render('api/vr', {
      gravelist: gravelist.Graves
    });
  });
};
