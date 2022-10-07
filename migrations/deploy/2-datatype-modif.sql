-- Deploy api-motogp-v2:2-datatype-modif to pg

BEGIN;

ALTER TABLE "rider"
  ALTER COLUMN "height" TYPE INT USING (height::INT),
  ALTER COLUMN "weight" TYPE INT USING (weight::INT);

COMMIT;
