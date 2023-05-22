import Express from "express";
import {
  createstudent,
  
  getstudent,
  updatestudent,
  deletestudent,
} from "../Method/method.js";

const route = Express.Router();

 // Post method
route.post("/create", createstudent);

// Get method
route.get("/get", getstudent); 

// Update method
route.put("/update/:id", updatestudent); 

// Delete method
route.delete("/delete/:id", deletestudent); // Delete method

export default route;
