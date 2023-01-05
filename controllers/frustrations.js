import { Frustration } from '../models/frustration.js'

function index(req, res) {
  Frustration.find({})
  .then(frustrations => {
    res.render('frustrations/index.ejs', {
      frustrations: frustrations
    });
  })
  .catch(error => {
    console.log(error);
    res.redirect('/');
  });
};

export {
  index
}