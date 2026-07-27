import { getTracks, getTracksById } from "#db/queries/tracks";
import express from "express";
const tracksRouter = express.Router();
export default tracksRouter;

tracksRouter.get("/", async (req, res, next) => {
  res.status(200).send(await getTracks());
});

tracksRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    res.status(400).send();
  }
  const track = await getTracksById(id);
  if (!track) {
    res.status(404).send();
  }
  res.status(200).send(track);
});
