const saleRouter = require("express").Router();
const saleService = require("../services/saleService");

const saleController = require("../controllers/saleController");

const auth = require("../middlewares/auth");

saleRouter.get("/:id", auth, saleController.getSaleById);
saleRouter.get("/user/:id", auth, saleController.getSaleByUserId);
saleRouter.put("/", async (req, res) => {
  const { status, id, role} = req.body;
  await saleService.updateStatus(true, status, id, role);
  res.status(200).json('eae');
});
saleRouter.post("/", auth, saleController.createSale);

module.exports = saleRouter;
