import tracksRouter from "#api/tracks";
import db from "#db/client";
import { response } from "express";

export async function getTracks() {
  const SQL = `
    SELECT *
    FROM tracks
    `;
  const response = await db.query(SQL);
  return response.rows;
}

export async function getTracksById(id) {
  const SQL = `
    SELECT *
    FROM tracks
    WHERE id = $1
    `;
  const response = await db.query(SQL, [id]);
  return response.rows[0];
}
