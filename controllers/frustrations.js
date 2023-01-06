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

function newFrustration(req, res) {
  res.render('frustrations/new')
}

function create(req, res) {
  const ranking = [];
  for (let i = 1; i <= 5; i++) {
    ranking.push(req.body[`frustration${i}`]);
  };
  const document = {ranking: ranking, name: req.body.name};
  console.log(document);
  Frustration.create(document)
  .then(frustration => {
    res.redirect('/frustrations');
  })
  .catch(error => {
    console.log(error);
    res.redirect('/frustrations');
  });
};

function show(req, res) {
  Frustration.findById(req.params.id)
  .then(frustration => {
    console.log(frustration);
    res.render('frustrations/show', {
      frustration: frustration
    });
  })
  .catch(error => {
    console.log(error)
    res.redirect('/frustrations')
  });
};

function deleteFrustration(req, res) {
  Frustration.findByIdAndDelete(req.params.id)
  .then(todo => {
    res.redirect('/frustrations')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/frustrations')
  });
}

export {
  index,
  newFrustration as new,
  create,
  show,
  deleteFrustration as delete
}