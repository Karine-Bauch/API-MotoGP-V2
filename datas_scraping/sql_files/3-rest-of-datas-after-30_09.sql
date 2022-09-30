-- Seasons 
INSERT INTO "season" ("year") VALUES 
        ('2022'),
        ('2021'),
        ('2020'),
        ('2019');

-- Team
-- name moto_model
INSERT INTO "team" ("name", "moto_model") VALUES
        ('Aprilia Racing', 'RS-GP'),
        ('Ducati Lenov Team', 'Desmosedici GP 22'),
        ('Aruba.it Racing', 'Desmosedici GP 22'),
        ('Monster Energy Yamaha MotoGP', 'YZR-M1'),
        ('Red Bull KTM Factory Racing', 'RC16'),
        ('Repsol Honda Team', 'RC213V'),
        ('Honda HRC', 'RC213V'),
        ('Team Suzuki Ecstar', 'GSX-RR'),
        ('Gresini Racing MotoGP', 'Desmosedici GP 21'),
        ('LCR Honda Idemitsu', 'RC213V'),
        ('LCR Honda Castrol', 'RC213V'),
        ('Pramac Racing', 'Desmosedici GP 22'),
        ('Mooney VR46 Racing Team', 'Desmosedici GP 21'),
        ('Tech3 KTM Racing', 'RC16'),
        ('WithU Yamaha RNF MotoGP Team', 'YZR_M1');

-- Manufacturer
-- name country
INSERT INTO "manufacturer" ("name", "country") VALUES
        ('Aprilia', 'Italy'),
        ('Ducati', 'Italy'),
        ('Yamaha', 'Japan'),
        ('KTM', 'Austria'),
        ('Honda', 'Japan'),
        ('Suzuki', 'Japan');

-- Track
-- name country city
INSERT INTO "track" ("name", "country", "city") VALUES
        ('Losail International Circuit', 'Quatar', 'Losail'),
        ('Mandalika International Street Circuit', 'Indonesia', 'Central Lombok'),
        ('Autódromo Termas de Río Hondo', 'Argentina', 'Termas de Río Hondo'),
        ('Circuit of the Americas', 'United States of America', 'Austin'),
        ('Algarve International Circuit', 'Portugal', 'Portimão'),
        ('Circuito de Jerez – Ángel Nieto', 'Spain', 'Jerez de la Frontera'),
        ('Circuit Bugatti', 'France', 'Le Mans'),
        ('Autodromo Internazionale del Mugello', 'Italy', 'Scarperia e San Piero'),
        ('Circuit de Barcelona-Catalunya', 'Spain', 'Montmeló'),
        ('Sachsenring', 'Germany', 'Hohenstein-Ernstthal'),
        ('TT Circuit Assen', 'Netherlands', 'Assen'),
        ('Silverstone Circuit', 'Great Britain', 'Silverstone'),
        ('Red Bull Ring', 'Austria', 'Spielberg'),
        ('Motorland Aragon', 'Spain', 'Aragon'),
        ('Misano Wolrd Circuit Marco Simoncelli', 'Italy', 'Misano'),
        ('Mobility Resort Motegi', 'Japan', 'Motegi');


-- Race
-- season_id track_id (for each race)
UPDATE "race" SET "season_id" = 1;

-- Update at each add of race
UPDATE "race" SET "track_id" = 12 WHERE "race"."id" = 1;
UPDATE "race" SET "track_id" = 11 WHERE "race"."id" = 2;
UPDATE "race" SET "track_id" = 1 WHERE "race"."id" = 3;
UPDATE "race" SET "track_id" = 8 WHERE "race"."id" = 4;
UPDATE "race" SET "track_id" = 10 WHERE "race"."id" = 5;
UPDATE "race" SET "track_id" = 6 WHERE "race"."id" = 6;
UPDATE "race" SET "track_id" = 4 WHERE "race"."id" = 7;
UPDATE "race" SET "track_id" = 9 WHERE "race"."id" = 8;
UPDATE "race" SET "track_id" = 13 WHERE "race"."id" = 9;
UPDATE "race" SET "track_id" = 14 WHERE "race"."id" = 10;
UPDATE "race" SET "track_id" = 2 WHERE "race"."id" = 11;
UPDATE "race" SET "track_id" = 3 WHERE "race"."id" = 12;
UPDATE "race" SET "track_id" = 5 WHERE "race"."id" = 13;
UPDATE "race" SET "track_id" = 15 WHERE "race"."id" = 14;
UPDATE "race" SET "track_id" = 16 WHERE "race"."id" = 15;
UPDATE "race" SET "track_id" = 7 WHERE "race"."id" = 16;


-- Rider has Team
-- rider_id team_id enter_date exit_date
INSERT INTO "rider_has_team" ("rider_id", "team_id", "enter_date", "exit_date") VALUES
        (1, 14, '2022-03-06', '2022-11-06'),
        (2, 8, '2022-03-06', '2022-11-06'),
        (3, 7, '2022-03-06', '2022-11-06'),
        (4, 9, '2022-03-06', '2022-11-06'),
        (5, 8, '2022-03-06', '2022-11-06'),
        (6, 12, '2022-03-06', '2022-11-06'),
        (7, 13, '2022-03-06', '2022-11-06'),
        (8, 15, '2022-03-06', '2022-11-06'),
        (9, 8, '2022-03-06', '2022-11-06'),
        (10, 4, '2022-03-06', '2022-11-06'),
        (11, 9, '2022-03-06', '2022-11-06'),
        (12, 6, '2022-03-06', '2022-11-06'),
        (13, 11, '2022-03-06', '2022-11-06'),
        (14, 11, '2022-03-06', '2022-11-06'),
        (15, 5, '2022-03-06', '2022-11-06'),
        (16, 4, '2022-03-06', '2022-11-06'),
        (17, 15, '2022-03-06', '2022-11-06'),
        (18, 5, '2022-03-06', '2022-11-06'),
        (19, 10, '2022-03-06', '2022-11-06'),
        (20, 14, '2022-03-06', '2022-11-06'),
        (21, 12, '2022-03-06', '2022-11-06'),
        (22, 8, '2022-03-06', '2022-11-06'),
        (23, 8, '2022-03-06', '2022-11-06'),
        (24, 2, '2022-03-06', '2022-11-06'),
        (25, 8, '2022-03-06', '2022-11-06'),
        (26, 15, '2022-03-06', '2022-11-06'),
        (27, 3, '2022-03-06', '2022-11-06'),
        (28, 1, '2022-03-06', '2022-11-06'),
        (29, 14, '2022-03-06', '2022-11-06'),
        (30, 11, '2022-03-06', '2022-11-06'),
        (31, 6, '2022-03-06', '2022-11-06'),
        (32, 2, '2022-03-06', '2022-11-06'),
        (33, 5, '2022-03-06', '2022-11-06'),
        (34, 6, '2022-03-06', '2022-11-06'),
        (35, 13, '2022-03-06', '2022-11-06');

-- Team has Manufacturer
-- team_id manufacturer_id enter_date exit_date
INSERT INTO "team_has_manufacturer" ("team_id", "manufacturer_id", "enter_date", "exit_date") VALUES
        (1, 1, '2022-03-06', '2022-11-06'),
        (2, 2, '2022-03-06', '2022-11-06'),
        (3, 2, '2022-03-06', '2022-11-06'),
        (4, 3, '2022-03-06', '2022-11-06'),
        (5, 4, '2022-03-06', '2022-11-06'),
        (6, 5, '2022-03-06', '2022-11-06'),
        (7, 5, '2022-03-06', '2022-11-06'),
        (8, 6, '2022-03-06', '2022-11-06'),
        (9, 2, '2022-03-06', '2022-11-06'),
        (10, 5, '2022-03-06', '2022-11-06'),
        (11, 5, '2022-03-06', '2022-11-06'),
        (12, 2, '2022-03-06', '2022-11-06'),
        (13, 2, '2022-03-06', '2022-11-06'),
        (14, 4, '2022-03-06', '2022-11-06'),
        (15, 3, '2022-03-06', '2022-11-06');

-- Rider has Race
-- rider_id race_id
INSERT INTO "rider_has_race" ("rider_id", "race_id") VALUES
        -- rider 1, R. Fernandez
        (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8), (1, 9), (1, 10), (1, 11), (1, 12), (1, 14), (1, 15),
        -- rider 2, T.Tsuda
        (2, 15),
        --rider 3, Nagashima
        (3, 15),
        -- rider 4, Di Gianantonio
        (4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (4, 9), (4, 10), (4, 11), (4, 14), (4, 15), (4, 16),
        -- rider 5, Watanabe
        (5, 15),
        -- rider 6, Zarco
        (6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6), (6, 7), (6, 8), (6, 9), (6, 10), (6, 11), (6, 12), (6, 13), (6, 14), (6, 15), (6, 16),
        -- rider 7, Marini
        (7, 1), (7, 2), (7, 3), (7, 4), (7, 5), (7, 6), (7, 7), (7, 8), (7, 9), (7, 10), (7, 11), (7, 12), (7, 13), (7, 14), (7, 15), (7, 16),
        -- rider 8, Dovizioso
        (8, 1), (8, 2), (8, 3), (8, 4), (8, 5), (8, 6), (8, 7), (8, 8), (8, 9), (8, 10), (8, 11), (8, 12), (8, 13), (8, 14),
        -- rider 9, Petrucci
        
        -- rider 10, Quartararo
        (10, 1), (10, 2), (10, 3), (10, 4), (10, 5), (10, 6), (10, 7), (10, 8), (10, 9), (10, 10), (10, 11), (10, 12), (10, 13), (10, 14), (10, 15), (10, 16),
        -- rider 11, Bastianini
        (11, 1), (11, 2), (11, 3), (11, 4), (11, 5), (11, 6), (11, 7), (11, 8), (11, 9), (11, 10), (11, 11), (11, 12), (11, 13), (11, 14), (11, 15), (11, 16),
        -- rider 12, Bradl
        (12, 1), (12, 2), (12, 5), (12, 6), (12, 8), (12, 9), (12, 12), (12, 14),
        -- rider 13, Savadori
        (13, 2), (13, 4), (13, 6), (13, 9), (13, 13),
        -- rider 14, Vinales
        (14, 1), (14, 2), (14, 3), (14, 4), (14, 5), (14, 6), (14, 7), (14, 8), (14, 9), (14, 10), (14, 11), (14, 12), (14, 13), (14, 14), (14, 15), (14, 16),
        -- rider 15, B. Binder
        (15, 1), (15, 2), (15, 3), (15, 4), (15, 5), (15, 6), (15, 7), (15, 8), (15, 9), (15, 10), (15, 11), (15, 12), (15, 13), (15, 14), (15, 15), (15, 16),
        -- rider 16, Morbidelli
        (16, 1), (16, 2), (16, 3), (16, 4), (16, 5), (16, 6), (16, 7), (16, 8), (16, 9), (16, 10), (16, 11), (16, 12), (16, 13), (16, 14), (16, 15), (16, 16),
        -- rider 17, Crutchlow
        (17, 10), (17, 15),
        -- rider 18, Pedrosa

        -- rider 19, Nakagami
        (19, 1), (19, 3), (19, 4), (19, 6), (19, 7), (19, 9), (19, 11), (19, 12), (19, 13), (19, 14), (19, 15), (19, 16),
        -- rider 20, Gardner
        (20, 1), (20, 2), (20, 3), (20, 4), (20, 5), (20, 6), (20, 7), (20, 8), (20, 9), (20, 10), (20, 11), (20, 12), (20, 13), (20, 14), (20, 15), (20, 16),
        -- rider 21, Martin
        (21, 1), (21, 2), (21, 3), (21, 4), (21, 5), (21, 6), (21, 7), (21, 8), (21, 9), (21, 10), (21, 11), (21, 12), (21, 13), (21, 14), (21, 15), (21, 16),
        -- rider 22, Rins
        (22, 1), (22, 2), (22, 3), (22, 4), (22, 6), (22, 7), (22, 8), (22, 9), (22, 10), (22, 11), (22, 12), (22, 13), (22, 14), (22, 15),
        -- rider 23, Guintoli

        -- rider 24, Bagnaia
        (24, 1), (24, 2), (24, 3), (24, 4), (24, 5), (24, 6), (24, 7), (24, 8), (24, 9), (24, 10), (24, 11), (24, 12), (24, 13), (24, 14), (24, 15), (24, 16),
        -- rider 25, Mir
        (25, 1), (25, 2), (25, 3), (25, 4), (25, 5), (25, 6), (25, 7), (25, 8), (25, 9), (25, 11), (25, 12), (25, 13), (25, 16),
        -- rider 26, D. Binder
        (26, 1), (26, 2), (26, 3), (26, 4), (26, 5), (26, 6), (26, 7), (26, 8), (26, 9), (26, 10), (26, 11), (26, 12), (26, 13), (26, 14), (26, 15), (26, 16),
        -- rider 27, Pirro
        
        -- rider 28, A. Espargaro
        (28, 1), (28, 2), (28, 3), (28, 4), (28, 5), (28, 6), (28, 7), (28, 8), (28, 9), (28, 10), (28, 11), (28, 12), (28, 13), (28, 14), (28, 15), (28, 16),
        -- rider 29, Kallio
        
        -- rider 30, A. Marquez
        (30, 1), (30, 2), (30, 3), (30, 4), (30, 5), (30, 6), (30, 7), (30, 8), (30, 9), (30, 10), (30, 11), (30, 12), (30, 13), (30, 14), (30, 15), (30, 16),
        -- rider 31, M. Marquez
        (31, 3), (31, 4), (31, 6), (31, 7), (31, 10), (31, 13), (31, 15), (31, 16),
        -- rider 32, Miller
        (32, 1), (32, 2), (32, 3), (32, 4), (32, 5), (32, 6), (32, 7), (32, 8), (32, 9), (32, 10), (32, 11), (32, 12), (32, 13), (32, 14), (32, 15), (32, 16),
        -- rider 33, Oliveira
        (33, 1), (33, 2), (33, 3), (33, 4), (33, 5), (33, 6), (33, 7), (33, 8), (33, 9), (33, 10), (33, 11), (33, 12), (33, 13), (33, 14), (33, 15), (33, 16),
        -- rider 34, P. Espargaro
        (34, 1), (34, 2), (34, 3), (34, 4), (34, 5), (34, 6), (34, 7), (34, 8), (34, 9), (34, 10), (34, 11), (34, 12), (34, 13), (34, 14), (34, 15), (34, 16),
        -- rider 35, Bezzechi
        (35, 1), (35, 2), (35, 3), (35, 4), (35, 5), (35, 6), (35, 7), (35, 8), (35, 9), (35, 10), (35, 11), (35, 12), (35, 13), (35, 14), (35, 15), (35, 16);