conn = Mongo();
db = conn.getDB('lionmiss');

db.locale.insertMany([{
  "name": "es"
},{
  "name": "en"
}]);