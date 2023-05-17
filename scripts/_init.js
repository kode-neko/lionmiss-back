conn = Mongo();
db = conn.getDB('lionmiss');

db.createUser({
  user: "lionmiss-admin",
  pwd: ";QVuV1as7OBN%-]",
  roles: [
    { role: "dbOwner", db: "lionmiss"},
  ]
})
db.createUser({
  user: "lionmiss-user",
  pwd: "A*%cEW023qoe",
  roles: [
    {role: "readWrite", db: "lionmiss"}
  ]
})
