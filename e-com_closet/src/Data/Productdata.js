import Top from '../assets/images/Top.png'
import BufferJacket from '../assets/images/BufferJacket.png'
import fullsleevetop from '../assets/images/fullsleevetop.png'
import bluedress from '../assets/images/bluedress.webp'
import blueshortdress from '../assets/images/blueshortdress.jpg'
import browndress from '../assets/images/browndress.webp'
import dress1 from '../assets/images/dress1.jpg'
import dress2 from '../assets/images/dress2.webp'
import dresses from '../assets/images/dresses.webp'
import stylish from '../assets/images/stylish.webp'
import unique from '../assets/images/unique.webp'
import whitetop from '../assets/images/whitetop.jpg'
import casualtop from '../assets/images/casualtop.jpg'
import pinktop from '../assets/images/pinktop.webp'
import shortpinktop from '../assets/images/shortpinktop.jpg'
import vintage1 from '../assets/images/vintage1.webp'
import vintage2 from '../assets/images/vintage2.jpg'
import vintage3 from '../assets/images/vintage3.jpg'
import vintage4 from '../assets/images/vintage4.jpg'
import vintage5 from '../assets/images/vintage5.jpg'
import vintage6 from '../assets/images/vintage6.webp'
import reddress from '../assets/images/reddress.jpg'
import beachwear1 from '../assets/images/beachwear1.webp'
import beachwear2 from '../assets/images/beachwear2.jpg'
import beachwear3  from '../assets/images/beachwear3.webp'
import beachwear4 from '../assets/images/beachwear4.jpg'
import beachwear5 from '../assets/images/beachwear5.webp'
import beachwear6 from '../assets/images/beachwear6.jpg'
import blouse1 from '../assets/images/blouse1.jpg'
import blouse2 from '../assets/images/blouse2.jpg'
import blouse3 from '../assets/images/blouse3.jpg'
import blouse4 from '../assets/images/blouse4.webp'
import blouse5 from '../assets/images/blouse5.webp'
import denim1 from '../assets/images/denim1.jpg'
import denim2 from '../assets/images/denim2.jpg'
import denim3 from '../assets/images/denim3.webp'
import denim4 from '../assets/images/denim4.webp'
import denim5 from '../assets/images/denim5.webp'
import denimtop from '../assets/images/denimtop.jpg'
import denimdress from '../assets/images/denimdress.webp'
import denimjumsuit from '../assets/images/denimjumsuit.jpg'
import fulldenim from '../assets/images/fulldenim.jpg'
import nightware1 from '../assets/images/nightware1.webp'
import nightware2 from '../assets/images/nightware2.webp'
import nightwear3 from '../assets/images/nightwear3.jpg'
import nightwear4 from '../assets/images/nightwear4.webp'
import nightwear5 from '../assets/images/nightwear5.webp'
import nightwear6 from '../assets/images/nightwear6.jpg'
import hanbag1 from '../assets/images/hanbag1.webp'
import handbag2 from '../assets/images/handbag2.jpg'
import handbag3 from '../assets/images/handbag3.jpg'
import handbag4 from '../assets/images/handbag4.jpg'
import handbag5 from '../assets/images/handbag5.jpg'
import handbag6 from '../assets/images/handbag6.jpg'
import handbag7 from '../assets/images/handbag7.webp'
import shoes1 from '../assets/images/shoes1.jpg'
import shoes2 from '../assets/images/shoes2.webp'
import shoes3 from '../assets/images/shoes3.jpg'
import shoes4 from '../assets/images/shoes4.jpg'
import shoes5 from '../assets/images/shoes5.jpg'
import shoes6 from '../assets/images/shoes6.webp'
import pufferjacket from '../assets/images/pufferjacket.jpg'
import purplejacket from '../assets/images/purplejacket.webp'
import shortjacket from '../assets/images/shortjacket.jpg'
import whitejacket from '../assets/images/whitejacket.jpg'
import wollentop from '../assets/images/wollentop.webp'
import redjacket from '../assets/images/redjacket.webp'
import cozyjacket from '../assets/images/cozyjacket.jpeg'
import orange from '../assets/images/orange.webp'
import sandels from '../assets/images/sandels.jpg'
import sandals from '../assets/images/sandals.jpg'
import sandals1 from '../assets/images/sandals1.webp'
import sandals2 from '../assets/images/sandals2.jpg'
import sandals3 from '../assets/images/sandals3.webp'
import sandals4 from '../assets/images/sandals4.webp'
import jewelries1 from '../assets/images/jewelries1.jpg'
import jewelries2 from '../assets/images/jewelries2.webp'
import jewelries3 from '../assets/images/jewelries3.webp'
import jewelries4 from '../assets/images/jewelries4.jpg'
import jewelries5 from '../assets/images/jewelries5.webp'
import jewelries6 from '../assets/images/jewelries6.webp'
import jewelries7 from '../assets/images/jewelries7.webp'
import jewelries8 from '../assets/images/jewelries8.jpg'
import jewelries9 from '../assets/images/jewelries9.jpg'


const ProductData = [
    {
        "id": 1,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Blouse",
        "price": 120,
        "discountPrice": 90,
        "productImage": Top,
        "brand": "H&M",
        "size": "Plus Size",
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 2,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Jackets",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": BufferJacket,
        "brand": "Zara",
        "filter": "Women",
        "size": "Large",
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 3,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Tops",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": fullsleevetop,
        "brand": "Mark & Spencer",
        "filter": "Women",
        "size": "Medium",
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 4,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Dresses",
        "price": 120,
        "discountPrice": 90,
        "productImage": bluedress,
        "brand": "H&M",
        "filter": "Women",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 5,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Dresses",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": browndress,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 6,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Dresses",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": blueshortdress,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 7,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Dresses",
        "price": 120,
        "discountPrice": 90,
        "productImage": dresses,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 8,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Dresses",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": dress1,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 9,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Dresses",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": dress2,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 10,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Denims",
        "price": 120,
        "discountPrice": 90,
        "productImage": fulldenim,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 11,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Tops",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": casualtop,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 12,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Denims",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": denim1,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
     {
        "id": 13,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Denims",
        "price": 120,
        "discountPrice": 90,
        "productImage": denim2,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 14,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Denims",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": denim3,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 15,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Denims",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": denim4,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 16,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Denims",
        "price": 120,
        "discountPrice": 90,
        "productImage": denimdress,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 17,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Denims",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": denimjumsuit,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 18,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Denims",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": denimtop,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 19,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Beachwear",
        "price": 120,
        "discountPrice": 90,
        "productImage": beachwear1,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 20,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Beachwear",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": beachwear2,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 21,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Beachwear",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": beachwear3,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 22,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Beachwear",
        "price": 120,
        "discountPrice": 90,
        "productImage": beachwear4,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 23,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Beachwear",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": beachwear5,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 24,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Beachwear",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": beachwear6,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
     {
        "id": 25,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Lingerie & Lounge Wear",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": nightware1,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 26,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Lingerie & Lounge Wear",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": nightware2,
        "brand": "Mark & Spencer",
        "size": "Plus Size",
        "numberOfOrders": 14,
        "isNewArrival": false
    },
     {
        "id": 27,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Lingerie & Lounge Wear",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": nightwear3,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 28,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Lingerie & Lounge Wear",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": nightwear4,
        "brand": "Mark & Spencer",
        "size": "Plus Size",
        "numberOfOrders": 14,
        "isNewArrival":false
    },
     {
        "id": 29,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Lingerie & Lounge Wear",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": nightwear5,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 30,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Lingerie & Lounge Wear",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": nightwear6,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 31,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Blouse",
        "price": 120,
        "discountPrice": 90,
        "productImage": blouse1,
        "brand": "H&M",
        "size": "Plus Size",
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 32,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Blouse",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": blouse2,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 33,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Blouse",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": blouse3,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 34,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Blouse",
        "price": 120,
        "discountPrice": 90,
        "productImage": blouse4,
        "brand": "H&M",
        "size": "Plus Size",
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 35,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Blouse",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": blouse5,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 36,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "bags",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": hanbag1,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 37,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "bags",
        "price": 120,
        "discountPrice": 90,
        "productImage": handbag2,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 38,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "bags",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": handbag3,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 39,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "bags",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": handbag4,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 40,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "bags",
        "price": 120,
        "discountPrice": 90,
        "productImage": handbag5,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 41,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "bags",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": handbag6,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 42,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "bags",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": handbag7,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
     {
        "id": 43,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "sandals",
        "price": 120,
        "discountPrice": 90,
        "productImage": sandals,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 44,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "sandals",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": sandals1,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 45,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "sandals",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": sandals2,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 46,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "sandals",
        "price": 120,
        "discountPrice": 90,
        "productImage": sandals3,
        "brand": "H&M",
        "size": "Medium",
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 47,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "sandals",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": sandals4,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 48,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "sandals",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": sandels,
        "brand": "Mark & Spencer",
        "size": "Medium",
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 49,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "shoes",
        "price": 120,
        "discountPrice": 90,
        "productImage": shoes1,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 50,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "shoes",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": shoes2,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 51,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "shoes",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": shoes3,
        "brand": "Mark & Spencer",
        "size": "Medium",
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 52,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "shoes",
        "price": 120,
        "discountPrice": 90,
        "productImage": shoes4,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 53,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "shoes",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": shoes5,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 54,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "dresses",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": orange,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
     {
        "id": 55,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Tops",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": pinktop,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 56,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Tops",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": shortpinktop,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
     {
        "id": 57,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Tops",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": whitetop,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 58,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Jackets",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": cozyjacket,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
     {
        "id": 59,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Jackets",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": pufferjacket,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 60,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Jackets",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": purplejacket,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 61,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Jackets",
        "price": 120,
        "discountPrice": 90,
        "productImage": shortjacket,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 62,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Jackets",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": whitejacket,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 63,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Tops",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": wollentop,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 64,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Jackets",
        "price": 120,
        "discountPrice": 90,
        "productImage": redjacket,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 65,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Tops",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": stylish,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 66,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Dresses",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": unique,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": false
    },
    {
        "id": 67,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Vintage",
        "price": 120,
        "discountPrice": 90,
        "productImage": vintage1,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 68,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Vintage",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": vintage2,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },
    {
        "id": 69,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Vintage",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": vintage3,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 70,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Vintage",
        "price": 120,
        "discountPrice": 90,
        "productImage": vintage4,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 71,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Dresses",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": reddress,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 72,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "jewelry",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": jewelries1,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
     {
        "id": 73,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "jewelry",
        "price": 120,
        "discountPrice": 90,
        "productImage": jewelries2,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": false
    },
    {
        "id": 74,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "jewelry",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": jewelries3,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 75,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "jewelry",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": jewelries4,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 76,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "jewelry",
        "price": 120,
        "discountPrice": 90,
        "productImage": jewelries5,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 77,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "jewelry",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": jewelries6,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 78,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "jewelry",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": jewelries7,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 79,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "jewelry",
        "price": 120,
        "discountPrice": 90,
        "productImage": jewelries8,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 80,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "jewelry",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": jewelries9,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
{
        "id": 81,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "shoes",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": shoes6,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": false
    },
    {
        "id": 82,
        "description": "Long-Sleeve Burnt Orange Top with form-fitting crewneck",
        "category": "Vintage",
        "price": 150.11,
        "discountPrice": 140.24,
        "productImage": vintage5,
        "brand": "Mark & Spencer",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 14,
        "isNewArrival": true
    },
    {
        "id": 83,
        "description": "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        "category": "Vintage",
        "price": 120,
        "discountPrice": 90,
        "productImage": vintage6,
        "brand": "H&M",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 24,
        "isNewArrival": true
    },
    {
        "id": 84,
        "description": "Textured Faux Fur Puffer Jacket with a grid-quilted pattern",
        "category": "Denims",
        "price": 140,
        "discountPrice": 120.23,
        "productImage": denim5,
        "brand": "Zara",
        "size": ["S", "M", "L", "XL"],
        "numberOfOrders": 34,
        "isNewArrival": true
    },

]

export default ProductData