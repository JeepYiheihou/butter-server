const User = function(user) {
    this.userId = user.userId
    this.name = user.name
    this.email = user.email
    this.address = user.address
    this.gender = user.gender
    this.avatarUrl = user.avatarUrl
    this.creationTimestamp = user.creationTimestamp
    this.status = user.status
}

module.exports = User