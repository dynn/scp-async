const { exec } = require('child_process')
const Async = require('crocks/Async')
const curry = require('crocks/helpers/curry')

const run = Async.fromNode(exec)

// scp :: Object -> String -> String -> Async e String
const scp = curry(config => src => dest => run(`scp ${src} ${config.user}@${config.host}:${dest}`))
module.exports = scp
