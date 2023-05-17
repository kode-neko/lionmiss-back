conn = Mongo();
db = conn.getDB('lionmiss');

db.cart.insertMany([{
  "products": [
    {
      "size": "l",
      "color": "aqua",
      "unds": 2,
      "product": {
        "_id": "5cd4bada7b84ccc18fd7fee3",
        "name": "Unbranded Bronze Towels",
        "price": 601,
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "details": [
          {
            "key": "material",
            "value": "cotton"
          },
          {
            "key": "iron",
            "value": "40º"
          },
          {
            "key": "washing",
            "value": "machine 100º"
          }
        ],
        "colors": [
          "red",
          "green",
          "blue"
        ],
        "unds": 100,
        "imgs": [
          {
            "src": "img0.jpg",
            "title": "A piece of clothes",
            "alt": "An example of piece of clothes",
            "main": true
          }
        ]
      }
    }
  ],
  "promo": {
    "type": 1,
    "qty": 10
  },
  "taxes": 21
}]);