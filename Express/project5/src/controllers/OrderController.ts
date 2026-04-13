import { JsonController, Get, Post, Param, Body } from "routing-controllers";
import { orders, Order } from "../data/orders";
@JsonController("/orders")
export class OrderController {
  @Get("/")
  getAll() {
    return {
      status: "success",
      data: orders
    };
  }
  @Get("/:id")
  getOne(@Param("id") id: string) {
    const order = orders.find(o => o.id === id);
    if (!order) {
      return { status: "error", error: "Order not found" };
    }
    return {
      status: "success",
      data: order
    };
  }
  @Post("/")
  create(@Body() orderData: Omit<Order, "id" | "status">) {
    if (!orderData.customerName || !orderData.flavor || !orderData.quantity || !orderData.pickupDate) {
      return { status: "error", error: "Missing required fields" };
    }
    const newOrder: Order = {
      ...orderData,
      id: (orders.length + 1).toString(),
      status: "pending"
    };
    orders.push(newOrder);
    return {
      status: "success",
      data: newOrder
    };
  }
}