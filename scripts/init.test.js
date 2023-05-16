db = connect('mongodb://localhost:27017/lionmiss');

db.createUser({
  user: "",
  pwd: "",
  roles: [
    { role: "dbOwner", db: "lionmiss"},
  ]
})
db.createUser({
  user: "",
  pwd: "",
  roles: [
    {role: "readWrite", db: "lionmiss"}
  ]
})