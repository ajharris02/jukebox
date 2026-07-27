import playlistsRouter from "#api/playlists";
import db from "#db/client";
import { response } from "express";

export async function getPlaylists() {
  const SQL = `
    SELECT *
    FROM playlists
    `;
  const response = await db.query(SQL);
  return response.rows;
}
export async function createPlaylist({ name, description }) {
  const SQL = `
  INSERT INTO playlists (name, description)
  VALUES ($1, $2)
  RETURNING *
  `;
  const response = await db.query(SQL, [name, description]);
  return response.rows[0];
}
export async function getPlaylistsById(id) {
  const SQL = `
  SELECT *
  FROM playlists
  WHERE id = $1
  `;
  const response = await db.query(SQL, [id]);
  return response.rows[0];
}
export async function getTracksByPlaylistId(id) {
  const SQL = `
SELECT tracks.*
FROM tracks
INNER JOIN playlists_tracks 
ON playlists_tracks.track_id = tracks.id
WHERE playlists_tracks.playlist_id = $1
`;
  const response = await db.query(SQL, [id]);
  return response.rows;
}
export async function createTrackByPlaylistId(id, trackId) {
  const SQL = `
  INSERT INTO playlists_tracks (playlist_id, track_id)
  VALUES ($1, $2)
  RETURNING *
  `;
  const response = await db.query(SQL, [id, trackId]);
  return response.rows[0];
}
