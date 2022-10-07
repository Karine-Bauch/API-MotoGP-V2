-- Revert api-motogp-v2:2-datatype-modif from pg

BEGIN;

ALTER TABLE "rider"
  ALTER COLUMN "height" TYPE INT USING (height::TEXT),
  ALTER COLUMN "weight" TYPE INT USING (weight::TEXT);

COMMIT;
