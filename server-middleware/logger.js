
export default (req, res, next) => {
    console.log('server-middleware')
    next()
  }