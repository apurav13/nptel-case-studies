import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { OrderController } from "./controllers/OrderController";
import { BakingController } from "./controllers/BakingController";
const app = createExpressServer({
  controllers: [OrderController, BakingController]
});
app.listen(3000, () => {
  console.log("Crumb & Craft Bakery server running at http://localhost:3000");
});