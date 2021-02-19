const mongoose = require("mongoose");
const Product = require("../model/products");

const createProduct = async (req, res, next) => {
  const createProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createProduct.save();
  res.json(result);
};

exports.createProduct = createProduct;

// let DUMMY_PLACES = [
//   {
//     id: "p1",
//     title: "Empire State Building",
//     description: "One of the Famous sky scrapers in the world",
//     location: {
//       lat: 40.7484474,
//       lng: -73.9871516,
//     },
//     address: "20  W 34th Street, New York, NY 1001",
//     creator: "u1",
//   },
//   // ,
//   // {
//   //   id: "p1",
//   //   title: "Empire State Building1",
//   //   description: "One of the Famous sky scrapers in the world2",
//   //   location: {
//   //     lat: 40.7484474444444444,
//   //     lng: -73.9871516444444444444,
//   //   },
//   //   address: "20  W 34th Street, New York, NY 1001",
//   //   creator: "u1",
//   // },
// ];

// // ---Logicc for the routes -----------

// // const getPlcaesByUserId = (req, res, next) => {
// //   const userId = req.params.uid;
// //   const places = DUMMY_PLACES.filter((u) => u.creator === userId);
// //   res.json({ places });
// // };

// // exports.getPlcaesByUserId = getPlcaesByUserId;

// // ---------------------Mongose----------------------------
