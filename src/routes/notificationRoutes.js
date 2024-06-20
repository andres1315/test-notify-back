import { Router } from "express";
import { saveNotification } from "../controllers/notification.controller.js";

const notificationRoutes = Router()

notificationRoutes
  .post('/',saveNotification)

export {
  notificationRoutes
}