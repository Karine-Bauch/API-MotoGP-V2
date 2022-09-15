-- Revert motogpv2:1-initDB from pg

BEGIN;

DROP TABLE IF EXISTS "rider", "team", "manufacturer", "season", "race", "track", "rider_has_race", "rider_has_team", "team_has_manufacturer";

COMMIT;
