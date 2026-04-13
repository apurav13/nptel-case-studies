import "reflect-metadata";
import express, { Request, Response } from "express";
import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService";
const app = express();
app.use(express.json());
const appointmentService = Container.get(AppointmentService);

app.post("/appointments", async (req: Request, res: Response) => {
  try {
    const { patient, time, amount } = req.body;
    const result = await appointmentService.bookAppointment(
      patient,
      time,
      amount
    );
    res.json({ status: "success", data: result });
  } catch (error: any) {
    res.status(400).json({
      status: "error",
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log("Sunrise Clinic system running at http://localhost:3000");
});