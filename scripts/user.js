conn = Mongo();
db = conn.getDB('lionmiss');

db.user.insertMany([{
  "username": "test",
  "pass": "$2b$10$IMF7ZerWQFJwCddWgNs4beKBRBY5U5VDVNvpF.aTRbRpQGowCS4Su",
  "userInfo": {
    "cart": {
      "_id": "5fdd8f5ad4579bddabdf8ebb",
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
    },
    "favProducts": [
      "5cd4bada7b84ccc18fd7fee3",
      "7b3a65bafddccba94aecc1f1",
      "ee7fd683efadf042faedfbbb"
    ],
    "username": "Cara88",
    "avatar": "avatar0.jpg",
    "lang": "en",
    "currency": "EUR",
    "measures": {
      "chest": 110,
      "waist": 60,
      "hip": 90
    },
    "email": "Hailie_Lakin72@gmail.com",
    "addresses": [
      {
        "name": "monitor",
        "adress": "101 O'Reilly Knolls",
        "country": "Ecuador",
        "state": "New Mexico",
        "town": "Jersey City",
        "zip": "76936",
        "phone": "989.721.5208 x692",
        "mail": "Wilton.Mayer@hotmail.com",
        "comments": "minima repellat esse",
        "main": true
      },
      {
        "name": "program",
        "adress": "2357 Lisandro Islands",
        "country": "Moldova",
        "state": "Idaho",
        "town": "Pleasanton",
        "zip": "95786",
        "phone": "506-672-0919 x888",
        "mail": "Domenico_Schoen@yahoo.com",
        "comments": "vitae amet animi",
        "main": false
      },
      {
        "name": "firewall",
        "adress": "02794 Juvenal Land",
        "country": "Palau",
        "state": "Oregon",
        "town": "Apopka",
        "zip": "06935-4223",
        "phone": "1-509-369-3683 x71254",
        "mail": "Darwin61@hotmail.com",
        "comments": "dolores dicta repudiandae",
        "main": false
      },
      {
        "name": "application",
        "adress": "6289 Stokes Mount",
        "country": "Lesotho",
        "state": "South Carolina",
        "town": "Sunnyvale",
        "zip": "60111-2839",
        "phone": "752.262.5446 x7254",
        "mail": "Mertie_Mitchell53@hotmail.com",
        "comments": "delectus eligendi ipsum",
        "main": false
      },
      {
        "name": "pixel",
        "adress": "67148 Murphy Unions",
        "country": "Mayotte",
        "state": "Utah",
        "town": "Huntsville",
        "zip": "01252",
        "phone": "301-387-9992 x66769",
        "mail": "Estefania9@gmail.com",
        "comments": "deleniti suscipit inventore",
        "main": false
      },
      {
        "name": "port",
        "adress": "56578 Schuppe Wall",
        "country": "Afghanistan",
        "state": "Connecticut",
        "town": "Medford",
        "zip": "20632-9361",
        "phone": "(875) 491-0947 x84815",
        "mail": "Lupe_Jacobi@gmail.com",
        "comments": "doloremque consequuntur ad",
        "main": false
      },
      {
        "name": "driver",
        "adress": "7147 Gerhold Circle",
        "country": "Moldova",
        "state": "West Virginia",
        "town": "West Babylon",
        "zip": "18932",
        "phone": "802-227-5518",
        "mail": "Gilda_Murphy@gmail.com",
        "comments": "veniam necessitatibus consequatur",
        "main": false
      },
      {
        "name": "transmitter",
        "adress": "60300 Liam River",
        "country": "United Kingdom",
        "state": "Kentucky",
        "town": "Sioux Falls",
        "zip": "59836-3323",
        "phone": "(619) 265-0655 x26395",
        "mail": "Kelley28@gmail.com",
        "comments": "eius illo iure",
        "main": false
      },
      {
        "name": "application",
        "adress": "2864 Kendra Junctions",
        "country": "Congo",
        "state": "Utah",
        "town": "Simi Valley",
        "zip": "30551",
        "phone": "471.904.8851 x63470",
        "mail": "Percy88@hotmail.com",
        "comments": "aliquid tempore in",
        "main": false
      },
      {
        "name": "matrix",
        "adress": "606 Bernhard Fields",
        "country": "Netherlands Antilles",
        "state": "Washington",
        "town": "McKinney",
        "zip": "93122",
        "phone": "(211) 398-8177 x388",
        "mail": "Makayla_Collier@hotmail.com",
        "comments": "quia deleniti necessitatibus",
        "main": false
      },
      {
        "name": "application",
        "adress": "11668 Mueller Drive",
        "country": "Palau",
        "state": "Massachusetts",
        "town": "Pasadena",
        "zip": "09061-2175",
        "phone": "1-274-695-7086 x494",
        "mail": "Merlin.Bogisich64@yahoo.com",
        "comments": "ipsa atque saepe",
        "main": false
      },
      {
        "name": "pixel",
        "adress": "74639 Lexi Crossing",
        "country": "Uzbekistan",
        "state": "South Carolina",
        "town": "Ogden",
        "zip": "40918-7923",
        "phone": "300-291-4053 x32838",
        "mail": "Tamara82@gmail.com",
        "comments": "autem nihil quaerat",
        "main": false
      },
      {
        "name": "card",
        "adress": "5034 Connor Greens",
        "country": "Dominican Republic",
        "state": "New Mexico",
        "town": "Decatur",
        "zip": "26769-6715",
        "phone": "(889) 951-2588 x0939",
        "mail": "Antonio.Tremblay@yahoo.com",
        "comments": "iusto esse soluta",
        "main": false
      },
      {
        "name": "driver",
        "adress": "7907 McKenzie Forge",
        "country": "Spain",
        "state": "New Hampshire",
        "town": "Carrollton",
        "zip": "10431",
        "phone": "810-315-7082 x151",
        "mail": "Brando.Dooley@gmail.com",
        "comments": "esse nesciunt nulla",
        "main": false
      },
      {
        "name": "interface",
        "adress": "69069 Pagac Turnpike",
        "country": "Netherlands",
        "state": "Louisiana",
        "town": "Jeffersonville",
        "zip": "96396",
        "phone": "1-753-610-5546 x62868",
        "mail": "Hilda89@hotmail.com",
        "comments": "beatae tempora necessitatibus",
        "main": false
      },
      {
        "name": "bandwidth",
        "adress": "71181 Grant Meadows",
        "country": "Mongolia",
        "state": "Washington",
        "town": "Bayamon",
        "zip": "46074-9707",
        "phone": "560-951-7499 x783",
        "mail": "Cicero.Grimes41@gmail.com",
        "comments": "nobis mollitia totam",
        "main": false
      },
      {
        "name": "driver",
        "adress": "44718 Kareem Flat",
        "country": "Ireland",
        "state": "Alabama",
        "town": "Sandy Springs",
        "zip": "90626",
        "phone": "1-230-570-9805",
        "mail": "Hosea.Kutch15@yahoo.com",
        "comments": "eaque accusantium soluta",
        "main": false
      },
      {
        "name": "protocol",
        "adress": "565 Jayne Ranch",
        "country": "Mongolia",
        "state": "Missouri",
        "town": "Paramount",
        "zip": "90933",
        "phone": "1-768-499-3536 x89876",
        "mail": "Christiana46@yahoo.com",
        "comments": "eum atque temporibus",
        "main": false
      },
      {
        "name": "port",
        "adress": "505 D'Amore Skyway",
        "country": "Nigeria",
        "state": "Maine",
        "town": "McAllen",
        "zip": "70045",
        "phone": "1-545-409-9976 x64418",
        "mail": "Irving17@yahoo.com",
        "comments": "repudiandae atque asperiores",
        "main": false
      },
      {
        "name": "bandwidth",
        "adress": "9727 Walsh Glens",
        "country": "Suriname",
        "state": "Nebraska",
        "town": "Cambridge",
        "zip": "48038",
        "phone": "1-386-978-4002 x97558",
        "mail": "Laverna_Bartell94@gmail.com",
        "comments": "error rem exercitationem",
        "main": false
      },
      {
        "name": "alarm",
        "adress": "5865 Eleazar Mills",
        "country": "Sao Tome and Principe",
        "state": "Georgia",
        "town": "Lakeville",
        "zip": "83788",
        "phone": "1-467-977-3813 x0232",
        "mail": "Reva64@yahoo.com",
        "comments": "corrupti repudiandae impedit",
        "main": false
      },
      {
        "name": "panel",
        "adress": "95332 Ankunding Plain",
        "country": "Romania",
        "state": "Indiana",
        "town": "Kenosha",
        "zip": "26555-7815",
        "phone": "1-557-351-5093",
        "mail": "Emery.Dibbert@gmail.com",
        "comments": "facilis labore distinctio",
        "main": false
      },
      {
        "name": "alarm",
        "adress": "053 Nolan Trafficway",
        "country": "Togo",
        "state": "Minnesota",
        "town": "Owensboro",
        "zip": "19742-7334",
        "phone": "492-550-0473",
        "mail": "Fausto.Jenkins@hotmail.com",
        "comments": "molestias dolor distinctio",
        "main": false
      },
      {
        "name": "port",
        "adress": "2609 Shaina Ville",
        "country": "Saudi Arabia",
        "state": "Idaho",
        "town": "Minnetonka",
        "zip": "68238",
        "phone": "1-536-736-1748 x9659",
        "mail": "Jerel_Daugherty@yahoo.com",
        "comments": "quod provident libero",
        "main": false
      },
      {
        "name": "system",
        "adress": "434 Wunsch Fort",
        "country": "Saint Lucia",
        "state": "Rhode Island",
        "town": "Alhambra",
        "zip": "19114",
        "phone": "1-220-511-4371 x751",
        "mail": "Morgan_Lubowitz@yahoo.com",
        "comments": "quod blanditiis recusandae",
        "main": false
      },
      {
        "name": "capacitor",
        "adress": "06853 Purdy Inlet",
        "country": "Kuwait",
        "state": "North Dakota",
        "town": "Bentonville",
        "zip": "07522",
        "phone": "532-237-7808",
        "mail": "Ayla.Greenfelder77@hotmail.com",
        "comments": "rem ratione ex",
        "main": false
      },
      {
        "name": "pixel",
        "adress": "9974 Schinner Coves",
        "country": "Falkland Islands (Malvinas)",
        "state": "Maryland",
        "town": "Salem",
        "zip": "54702",
        "phone": "1-488-430-3016 x11436",
        "mail": "Roslyn.Fay@gmail.com",
        "comments": "qui assumenda explicabo",
        "main": false
      },
      {
        "name": "interface",
        "adress": "54819 Cassin Stream",
        "country": "Botswana",
        "state": "North Dakota",
        "town": "The Villages",
        "zip": "13601",
        "phone": "552.675.4691 x412",
        "mail": "Jesus9@hotmail.com",
        "comments": "reiciendis ex necessitatibus",
        "main": false
      },
      {
        "name": "matrix",
        "adress": "28099 Piper Ville",
        "country": "Tonga",
        "state": "Arkansas",
        "town": "Santa Ana",
        "zip": "39267",
        "phone": "622-865-5648 x302",
        "mail": "Pauline.Langosh@gmail.com",
        "comments": "fugiat at nemo",
        "main": false
      },
      {
        "name": "alarm",
        "adress": "271 Swift Fall",
        "country": "Rwanda",
        "state": "Idaho",
        "town": "Springfield",
        "zip": "56286-3383",
        "phone": "1-382-350-7267 x5129",
        "mail": "Renee81@hotmail.com",
        "comments": "adipisci nostrum dignissimos",
        "main": false
      },
      {
        "name": "interface",
        "adress": "167 Arthur Point",
        "country": "Colombia",
        "state": "Tennessee",
        "town": "College Station",
        "zip": "93103-7082",
        "phone": "1-986-360-1898 x1176",
        "mail": "Christ.Robel3@yahoo.com",
        "comments": "beatae repellendus asperiores",
        "main": false
      },
      {
        "name": "card",
        "adress": "537 Buckridge Mill",
        "country": "Portugal",
        "state": "Minnesota",
        "town": "Menifee",
        "zip": "18362",
        "phone": "320.331.2249",
        "mail": "Jackeline_Heidenreich@gmail.com",
        "comments": "quae animi libero",
        "main": false
      },
      {
        "name": "pixel",
        "adress": "43610 Wolf Landing",
        "country": "Sierra Leone",
        "state": "Indiana",
        "town": "Wyoming",
        "zip": "10114",
        "phone": "401.712.2919 x01203",
        "mail": "Daija_Lebsack30@gmail.com",
        "comments": "ad ipsa voluptatibus",
        "main": false
      },
      {
        "name": "bus",
        "adress": "7027 Bettye Field",
        "country": "Jordan",
        "state": "New Mexico",
        "town": "Paterson",
        "zip": "68361",
        "phone": "(209) 248-4813 x53078",
        "mail": "Jamar_Ankunding@gmail.com",
        "comments": "laborum quidem vel",
        "main": false
      },
      {
        "name": "bandwidth",
        "adress": "171 Lesch Squares",
        "country": "Mexico",
        "state": "Wyoming",
        "town": "Warwick",
        "zip": "89222",
        "phone": "1-376-389-0800",
        "mail": "Domenic_Yundt@gmail.com",
        "comments": "quas veniam autem",
        "main": false
      },
      {
        "name": "system",
        "adress": "342 Ozella Point",
        "country": "Tajikistan",
        "state": "Iowa",
        "town": "Highlands Ranch",
        "zip": "01104",
        "phone": "(782) 661-6424 x150",
        "mail": "Gabe_Cole@gmail.com",
        "comments": "hic tempora libero",
        "main": false
      },
      {
        "name": "alarm",
        "adress": "70846 Mante Wall",
        "country": "Malta",
        "state": "Iowa",
        "town": "Kentwood",
        "zip": "73444-3084",
        "phone": "557-337-3091",
        "mail": "Arno52@gmail.com",
        "comments": "optio libero occaecati",
        "main": false
      },
      {
        "name": "alarm",
        "adress": "70303 Boyer Rue",
        "country": "United Kingdom",
        "state": "North Carolina",
        "town": "Youngstown",
        "zip": "38398-8042",
        "phone": "728.235.7257 x2125",
        "mail": "Gust_Muller20@hotmail.com",
        "comments": "quis inventore esse",
        "main": false
      },
      {
        "name": "bandwidth",
        "adress": "076 Adams Trail",
        "country": "Western Sahara",
        "state": "Virginia",
        "town": "Euclid",
        "zip": "05093",
        "phone": "(861) 546-8380",
        "mail": "Thomas.Ward@hotmail.com",
        "comments": "animi sunt asperiores",
        "main": false
      },
      {
        "name": "bandwidth",
        "adress": "546 Kiel Fields",
        "country": "Algeria",
        "state": "Alaska",
        "town": "Killeen",
        "zip": "71472",
        "phone": "1-953-969-0428 x464",
        "mail": "Darlene.Wehner86@gmail.com",
        "comments": "quod ullam a",
        "main": false
      },
      {
        "name": "sensor",
        "adress": "01085 Braun Lock",
        "country": "Democratic People's Republic of Korea",
        "state": "Idaho",
        "town": "Youngstown",
        "zip": "00401-3570",
        "phone": "317.757.3644 x84556",
        "mail": "Amina_Weber93@gmail.com",
        "comments": "quasi dolorem aspernatur",
        "main": false
      },
      {
        "name": "microchip",
        "adress": "792 Gabriel Islands",
        "country": "Iran",
        "state": "South Carolina",
        "town": "Frederick",
        "zip": "03905-8941",
        "phone": "644.383.0114",
        "mail": "Patrick_Howell@hotmail.com",
        "comments": "autem natus voluptatum",
        "main": false
      },
      {
        "name": "program",
        "adress": "994 Solon Ramp",
        "country": "Slovakia (Slovak Republic)",
        "state": "California",
        "town": "Eagan",
        "zip": "41449-1823",
        "phone": "(558) 309-3368 x0477",
        "mail": "Demario.Ledner@gmail.com",
        "comments": "saepe dolorem modi",
        "main": false
      },
      {
        "name": "protocol",
        "adress": "847 Natalie Overpass",
        "country": "Ecuador",
        "state": "Maine",
        "town": "San Tan Valley",
        "zip": "21593",
        "phone": "788.202.8259 x374",
        "mail": "Dax.Greenholt99@hotmail.com",
        "comments": "sequi sequi minus",
        "main": false
      },
      {
        "name": "pixel",
        "adress": "507 Wallace Shoal",
        "country": "Haiti",
        "state": "Louisiana",
        "town": "Santa Clara",
        "zip": "90354-2727",
        "phone": "(395) 940-1174 x19457",
        "mail": "Roxane.Runte@yahoo.com",
        "comments": "numquam sunt quaerat",
        "main": false
      },
      {
        "name": "application",
        "adress": "6877 Aurelio Route",
        "country": "Armenia",
        "state": "New Jersey",
        "town": "Gastonia",
        "zip": "02764-2791",
        "phone": "(536) 508-2580",
        "mail": "Alfonso79@gmail.com",
        "comments": "repellat quo at",
        "main": false
      },
      {
        "name": "system",
        "adress": "547 Merle Ford",
        "country": "Argentina",
        "state": "Delaware",
        "town": "Placentia",
        "zip": "17341-7725",
        "phone": "362-277-3868 x78863",
        "mail": "Samanta_Mayer93@hotmail.com",
        "comments": "deserunt laboriosam accusamus",
        "main": false
      },
      {
        "name": "bus",
        "adress": "69434 Murray Wells",
        "country": "Cameroon",
        "state": "Wyoming",
        "town": "Rancho Palos Verdes",
        "zip": "75607",
        "phone": "598-890-2555 x718",
        "mail": "Thelma.Price40@gmail.com",
        "comments": "porro tempora necessitatibus",
        "main": false
      },
      {
        "name": "application",
        "adress": "8644 Legros Fort",
        "country": "Iceland",
        "state": "Rhode Island",
        "town": "Lakeland",
        "zip": "13914",
        "phone": "292.855.7621 x994",
        "mail": "Osborne.King8@yahoo.com",
        "comments": "eius voluptatum in",
        "main": false
      },
      {
        "name": "transmitter",
        "adress": "89252 Schiller Camp",
        "country": "Congo",
        "state": "Arkansas",
        "town": "Lawrence",
        "zip": "02956",
        "phone": "496.258.0690",
        "mail": "Deshawn.Kris34@gmail.com",
        "comments": "unde doloribus unde",
        "main": false
      }
    ],
    "_id": {
      "$oid": "64650f5b24f8c37b4203bc7d"
    }
  }
}]);