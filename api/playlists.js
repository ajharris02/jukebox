import {
  createPlaylist,
  createTrackByPlaylistId,
  getPlaylists,
  getPlaylistsById,
  getTracksByPlaylistId,
} from "#db/queries/playlists";
import express from "express";
const playlistsRouter = express.Router();
export default playlistsRouter;

playlistsRouter.get("/", async (req, res, next) => {
  res.send(await getPlaylists());
});

playlistsRouter.post("/", async (req, res, next) => {
  if (!req.body) {
    res.status(400).send();
  }
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send();
  }
  res.status(201).send(await createPlaylist(req.body));
});

playlistsRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    res.status(400).send();
  }
  const playlist = await getPlaylistsById(id);
  if (!playlist) {
    res.status(404).send();
  }
  res.status(200).send(playlist);
});
playlistsRouter.get("/:id/tracks", async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    res.status(400).send();
  }
  const tracksInPlaylist = await getTracksByPlaylistId(id);
  if (!tracksInPlaylist.length) {
    res.status(404).send();
  }
  res.send(tracksInPlaylist);
});
playlistsRouter.post("/:id/tracks", async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    res.status(400).send();
  }
  if (!req.body) {
    res.status(400).send();
  }
  const { trackId } = req.body;
  if (!trackId) {
    res.status(400).send();
  }
  if (isNaN(+trackId)) {
    res.status(400).send();
  }
  const playlist = await getPlaylistsById(id);
  if (!playlist) {
    res.status(404).send();
  }
  const newTrackInPlaylist = await createTrackByPlaylistId(id, trackId);
  if (!newTrackInPlaylist) {
    res.status(400).send();
  }
  res.status(201).send(newTrackInPlaylist);
});
