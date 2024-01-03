const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products",ProductController.findAllProducts);
  app.post("/api/products",ProductController.createNewProduct);
  app.get("/api/products/:id",ProductController.findOneProduct  );
  app.patch("/api/products/:id", ProductController.updateExisitingProduct );
  app.delete("/api/products/:id", ProductController.deleteOneProduct );
};