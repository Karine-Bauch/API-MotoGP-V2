-- Deploy motogpv2:1-initDB to pg

BEGIN;


DROP TABLE IF EXISTS "rider", "team", "manufacturer", "season", "race", "track", "rider_has_race", "rider_has_team", "team_has_manufacturer";

-- Main tables creation

CREATE TABLE "rider" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "number" TEXT NOT NULL,
  "firstname" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "birth_date" TIMESTAMPTZ,
  "country" TEXT NOT NULL,
  "height" TEXT NOT NULL,
  "weight" TEXT NOT NULL,
  "biography" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "team" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "moto_model" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "manufacturer" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "country" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "season" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "year" INT NOT NULL,
  "begin_date" TIMESTAMPTZ NOT NULL,
  "finish_date" TIMESTAMPTZ NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "track" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "country" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "race" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "date" TIMESTAMPTZ NOT NULL,
  "rank" INT[],
  "season_id" INT REFERENCES "season"("id"),
  "track_id" INT REFERENCES "track"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


-- Link tables creation


CREATE TABLE "rider_has_race" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "rider_id" INT REFERENCES "rider"("id"),
  "race_id" INT REFERENCES "race"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "rider_has_team" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "rider_id" INT REFERENCES "rider"("id"),
  "team_id" INT REFERENCES "team"("id"),
  "enter_date" TIMESTAMPTZ,
  "exit_date" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "team_has_manufacturer" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "team_id" INT REFERENCES "team"("id"),
  "manufacturer_id" INT REFERENCES "manufacturer"("id"),
  "enter_date" TIMESTAMPTZ,
  "exit_date" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


COMMIT;
