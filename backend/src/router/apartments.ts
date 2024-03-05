import { Router } from "express";
import { Request, Response } from "express";
import { ApartmentModel } from "../db/model";
const apartments = Router();

// List all apartments
apartments.get("/apartments", async (req: Request, res: Response) => {
  try {
    const apartments = await ApartmentModel.find({}).exec();
    return res.json(apartments);
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// List details of a specific apartment
apartments.get("/apartment/:id", async (req: Request, res: Response) => {
  try {
    const apartment = await ApartmentModel.findOne({
      _id: req.params.id,
    }).exec();
    console.log("Found apartment", apartment);
    return res.json(apartment);
  } catch (err) {
    console.log("Failed to find apartment", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add a specific apartment details to the database
apartments.post("/apartment/add", async (req: Request, res: Response) => {
  try {
    await ApartmentModel.create(req.body);
    return res.status(200).send("Apartment created successfully");
  } catch (err) {
    console.log("Failed to add document to database", err);
    return res.status(500).send("Failed to add apartment to database");
  }
});

export default apartments;
