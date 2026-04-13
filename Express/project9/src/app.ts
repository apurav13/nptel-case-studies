import express, { Request, Response } from "express";
import { InMemoryCourseRepository } from "./repositories/InMemoryCourseRepository";
import { CourseService } from "./services/CourseService";
const app = express();
app.use(express.json());
const courseRepo = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepo);

app.get("/courses", async (req: Request, res: Response) => {
  const courses = await courseService.getAllCourses();
  res.json({ status: "success", data: courses });
});

app.post("/courses/:id/enroll", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await courseService.enroll(req.params.id, req.body.studentId);
    res.json({ status: "success", data: result });
  } catch (error: any) {
    res.status(400).json({ status: "error", error: error.message });
  }
});

app.get("/students/:id/courses", async (req: Request<{ id: string }>, res: Response) => {
  const courses = await courseService.getStudentCourses(req.params.id);
  res.json({ status: "success", data: courses });
});

app.delete("/courses/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);
    res.json({ status: "success", data: result });
  } catch (error: any) {
    res.status(400).json({ status: "error", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Riverdale Registration System running at http://localhost:3000");
});