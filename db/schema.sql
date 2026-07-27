DROP TABLE IF EXISTS playlists;
CREATE TABLE playlists (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL
);
 DROP TABLE IF EXISTS tracks;
 CREATE TABLE tracks (
 id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
duration_ms INTEGER NOT NULL 
 );

 Drop TABLE IF EXISTS playlists_tracks;
 CREATE TABLE playlists_tracks (
id SERIAL PRIMARY KEY,
playlist_id INTEGER NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
track_id INTEGER NOT NULL REFERENCES tracks(id) ON DELETE CASCADE, 
UNIQUE (playlist_id, track_id)                                      
 );