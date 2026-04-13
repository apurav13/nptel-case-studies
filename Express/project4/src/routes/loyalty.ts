import { Router, Request, Response } from "express";
import { z } from "zod";
import { validate } from "../middleware/validate";
import { ApiError, InsufficientPointsError } from "../errors/ApiError";

const router = Router();
interface Member {
  customerId: string;
  points: number;
}

let members: Member[] = [
  { customerId: "550e8400-e29b-41d4-a716-446655440000", points: 500 },
  { customerId: "6fa459ea-ee8a-3ca4-894e-db77e160355e", points: 300 }
];

const RedeemSchema = z.object({
  customerId: z.string().uuid(),
  points: z.number().int().positive()
});

const TransferSchema = z.object({
  fromCustomerId: z.string().uuid(),
  toCustomerId: z.string().uuid(),
  points: z.number().int().positive()
});

router.post(
  "/redeem",
  validate(RedeemSchema),
  (req: Request, res: Response) => {
    const { customerId, points } = req.body;
    const member = members.find(m => m.customerId === customerId);
    if (!member) {
      throw new ApiError(404, "Customer not found");
    }
    if (member.points < points) {
      throw new InsufficientPointsError();
    }
    const itemInStock = true;
    if (!itemInStock) {
      throw new ApiError(409, "Item out of stock");
    }
    member.points -= points;
    res.status(200).json({
      status: "success",
      data: {
        customerId,
        remainingPoints: member.points,
        item: "Birthday Cake"
      }
    });
  }
);

router.post(
  "/transfer",
  validate(TransferSchema),
  (req: Request, res: Response) => {
    const { fromCustomerId, toCustomerId, points } = req.body;
    const sender = members.find(m => m.customerId === fromCustomerId);
    const receiver = members.find(m => m.customerId === toCustomerId);
    if (!sender) {
      throw new ApiError(404, "Sender not found");
    }
    if (!receiver) {
      throw new ApiError(404, "Receiver not found");
    }
    if (sender.points < points) {
      throw new InsufficientPointsError();
    }
    sender.points -= points;
    receiver.points += points;
    res.status(200).json({
      status: "success",
      data: {
        fromCustomerId,
        toCustomerId,
        transferredPoints: points,
        senderRemainingPoints: sender.points
      }
    });
  }
);

export default router;