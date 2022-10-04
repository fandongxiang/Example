let name = 'fantasy'
let number = 13
console.log(module.paths);

// module.exports 和 exports
exports.name = name
module.exports.number = number

// module.exports = {}
module.exports = {
  sex: '男'
}