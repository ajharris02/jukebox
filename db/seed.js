import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const SQL = `
  INSERT INTO playlists (name, description) VALUES ('Workout', 'Energetic songs');
  INSERT INTO playlists (name, description) VALUES ('Sleep', 'Soothing sounds');
  INSERT INTO playlists (name, description) VALUES ('Focus', 'Amiebent soounds');
  INSERT INTO playlists (name, description) VALUES ('Late night drive', 'Songs for late night dirves');
  INSERT INTO playlists (name, description) VALUES ('Underground', 'Songs by underground artists');
  INSERT INTO playlists (name, description) VALUES ('Nostalgic', 'Songs that make you nostalgic');
  INSERT INTO playlists (name, description) VALUES ('Jazz', 'Songs to set the mood');
  INSERT INTO playlists (name, description) VALUES ('Gaming', 'Songs to play when gaming'); 
  INSERT INTO playlists (name, description) VALUES ('Personal favorite', 'Songs that you love the best');
  INSERT INTO playlists (name, description) VALUES ('Party', 'Songs for parties');
 

  
  INSERT INTO tracks (name, duration_ms) VALUES ('Next To You', 190000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Trip', 217000);
  INSERT INTO tracks (name, duration_ms) VALUES ('You Rock MY World', 303000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Rambo', 223000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Am I Dreaming', 256000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Be Without You', 249000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Live Your Life', 339000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Rain sounds for sleeping', 500000);
  INSERT INTO tracks (name, duration_ms) VALUES ('say it with your chest', 212000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Smooth Criminal', 258000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Heartless', 198000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Replay', 209000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Beauty and a Beat', 228000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Keep The Rest', 175000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Goosebumps', 162000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Gore', 162000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Cold Hearted ||', 301000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Hussle & Motivate', 258000);
  INSERT INTO tracks (name, duration_ms) VALUES ('Self-Made', 167000);
  INSERT INTO tracks (name, duration_ms) VALUES ('All The Stars', 235000);
  
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (1, 10);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (4, 2);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (2, 8);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (6, 3);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (7, 9);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (8, 19);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (9, 1);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (10, 7);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (9, 17);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (9, 20);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (9, 12);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (3, 5);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (1, 15);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (3, 4);
  INSERT INTO playlists_tracks (playlist_id, track_id) VALUES (7, 11);
  `;
  await db.query(SQL);
  console.log("db tables seeded");
}
