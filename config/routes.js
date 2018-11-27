module.exports = function(app){

  ////////////////// MASTER GET /////////////////////
  app.get('/dashboard', (req, res) => {
    knex('users')
    knex('locations').where('user_id', users.id)
    knex('buckets').where('user_id', users.id)
    knex('posts').where('user_id', users.id)
    knex('images').where('user_id', users.id)

    res.json(data)
  })

  ////////////////// USERS ROUTES /////////////////////
  app.post('/login', (req, res) => {
    res.json(book)
  })

  app.post('/logout', (req, res) => {
    res.json(book)
  })

  app.post('/register', (req, res) => {
    knex('users').insert({
      "user_name": req.body.name,
      "email": req.body.email,
      "password": req.body.password,
    })
    res.json(newUser)
  })

  ////////////////// BUCKETS ROUTES ///////////////////
  app.post('/buckets/create', (req, res) => {
    knex('buckets')
      .where('user_id', users.id)
      .where('location_id', locations.id)
      .insert({
        "bucket_name": req.body.name,
        "description": req.body.description,
        "date_completed": req.body.date_completed,
        "location_id": req.body.location_id,
        "user_id": req.body.user_id,
      })
    res.json(newBucket)
  })

  app.delete('/buckets/delete', (req, res) => {
    knex('buckets')
      .where('id', req.params.id)
      .del()
  })

  app.patch('/buckets/complete', (req, res) => {
    knex('buckets')
      .where('id', req.params.id)
      .update({
        "is_completed": true,
      })
  })

  ////////////////// POSTS ROUTES /////////////////////
  app.post('/posts/create', (req, res) => {
    knex('posts')
      .where('user_id', users.id)
      .where('location_id', locations.id)
      .insert({
        "title": req.body.title,
        "content": req.body.content,
        "date": req.body.date,
        "location_id": req.body.location_id,
        "user_id": req.body.user_id,
      })
    res.json(newPost)
  })

  app.delete('/posts/delete', (req, res) => {
    knex('posts')
      .where('id', req.params.id)
      .del()
  })

  ////////////////// IMAGES ROUTES /////////////////////
  app.post('/images/upload', (req, res) => {
    knex('images')
      .where('user_id', users.id)
      .where('location_id', locations.id)
      .insert({
        "img_url": req.body.img_url,
      })
    res.json(newImage)
  })

  app.delete('/images/delete', (req, res) => {
    knex('images')
      .where('id', req.params.id)
      .del()
  })

}
