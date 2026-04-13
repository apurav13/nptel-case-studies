import { JsonController, Post, Get, Param, Body } from "routing-controllers";
import { orders } from "../data/orders";
@JsonController("/baking")
export class BakingController {
  @Post("/start")
  startBaking(@Body() body: { orderId: string }) {
    const order = orders.find(o => o.id === body.orderId);
    if (!order) {
      return { status: "error", error: "Order not found" };
    }
    if (order.status !== "pending") {
      return { status: "error", error: "Order already in progress or completed" };
    }
    order.status = "baking";
    return {
      status: "success",
      message: "Baking started",
      data: order
    };
  }
  @Get("/status/:id")
  getStatus(@Param("id") id: string) {
    const order = orders.find(o => o.id === id);
    if (!order) {
      return { status: "error", error: "Order not found" };
    }
    return {
      status: "success",
      data: {
        orderId: order.id,
        status: order.status
      }
    };
  }
}