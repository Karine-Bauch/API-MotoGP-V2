"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_http = __toESM(require("http"));
var import_dotenv = __toESM(require("dotenv"));

// src/app/index.ts
var import_express8 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// src/app/router/index.ts
var import_express7 = __toESM(require("express"));

// src/app/router/manufacturerRouter.ts
var import_express = __toESM(require("express"));

// src/app/config/db.ts
var { Pool } = require("pg");
var config = {};
var pool = new Pool(config);
var client = {
  originalClient: pool,
  async query(...params) {
    return this.originalClient.query(...params);
  }
};

// src/app/models/manufacturerMapper.ts
var ManufacturerService = class {
  async findAllManufacturers() {
    const result = await client.query(
      `SELECT "manufacturer"."name" AS "manufacturer_name",
      "manufacturer"."country" AS "manufacturer_country",
      array_agg(("rider"."firstname" || ' ' || "rider"."lastname") ORDER BY "manufacturer"."name") AS "manufacturers_riders",
      array_agg(DISTINCT("team"."name")) AS "manufacturer_teams"
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id" 
      GROUP BY "manufacturer"."name", "manufacturer"."country"`
    );
    return result.rows;
  }
  async findOneManufacturer(manufacturerId) {
    const result = await client.query(
      `SELECT "manufacturer"."name" AS "manufacturer_name",
        "manufacturer"."country" AS "manufacturer_country",
        array_agg(("rider"."firstname" || ' ' || "rider"."lastname") ORDER BY "manufacturer"."name") AS "manufacturers_riders",
        array_agg(DISTINCT("team"."name")) AS "manufacturer_teams"
        FROM "manufacturer"
        FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
        FULL JOIN "team" ON "team_id" = "team"."id"
        FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id" 
        WHERE "manufacturer"."id" = $1
        GROUP BY "manufacturer"."name", "manufacturer"."country"`,
      [manufacturerId]
    );
    return result.rows[0];
  }
};

// src/app/helpers/error.ts
var ApiError = class extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
};

// src/app/controllers/manufacturerController.ts
var service = new ManufacturerService();
var manufacturerController = {
  async getAll(_, res) {
    const manufacturers = await service.findAllManufacturers();
    return res.status(200).json(manufacturers);
  },
  async getOne(req, res) {
    const manufacturer = await service.findOneManufacturer(Number(req.params.id));
    if (!manufacturer) {
      throw new ApiError(404, "Manufacturer not found");
    }
    ;
    return res.status(200).json(manufacturer);
  }
};

// src/app/helpers/controllerHandler.ts
function controllerHandler(controller) {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      if (Number.isNaN(Number(err.statusCode))) {
        err.statusCode = 500;
      }
      ;
      res.status(err.statusCode).json({
        status: "Error",
        statusCode: err.statusCode,
        message: err.message
      });
    }
  };
}

// src/app/router/manufacturerRouter.ts
var router = import_express.default.Router();
router.route("/").get(controllerHandler(manufacturerController.getAll));
router.route("/:id").get(controllerHandler(manufacturerController.getOne));

// src/app/router/raceRouter.ts
var import_express2 = __toESM(require("express"));

// src/app/models/raceMapper.ts
var RaceService = class {
  async findAllRaces() {
    const result = await client.query(
      `SELECT "race"."id" AS "race_id",
      "race"."name" AS "race_name",
      "race"."date" AS "race_date",
      "race"."rank" AS "rank",
      "track"."name" AS "track_name",
      "track"."country" AS "country",
      "track"."city" AS "city",
      "season"."year" AS "season"
      FROM "season"
      FULL JOIN "race" ON "season"."id" = "season_id"
      FULL JOIN "track" ON "track_id" = "track"."id"`
    );
    return result.rows;
  }
  async findOneRace(raceId) {
    const result = await client.query(
      `SELECT "race"."id" AS "race_id",
        "race"."name" AS "race_name",
        "race"."date" AS "race_date",
        "race"."rank" AS "rank",
        "track"."name" AS "track_name",
        "track"."country" AS "country",
        "track"."city" AS "city",
        "season"."year" AS "season"
        FROM "season"
        FULL JOIN "race" ON "season"."id" = "season_id"
        FULL JOIN "track" ON "track_id" = "track"."id"
        WHERE "race"."id" = $1`,
      [raceId]
    );
    return result.rows[0];
  }
};

// src/app/controllers/raceController.ts
var service2 = new RaceService();
var raceController = {
  async getAll(_, res) {
    const races = await service2.findAllRaces();
    return res.status(200).json(races);
  },
  async getOne(req, res) {
    const race = await service2.findOneRace(Number(req.params.id));
    if (!race) {
      throw new ApiError(404, "Race not found");
    }
    ;
    return res.status(200).json(race);
  }
};

// src/app/router/raceRouter.ts
var router2 = import_express2.default.Router();
router2.route("/").get(controllerHandler(raceController.getAll));
router2.route("/:id").get(controllerHandler(raceController.getOne));

// src/app/router/riderRouter.ts
var import_express3 = __toESM(require("express"));

// src/app/models/riderMapper.ts
var RiderService = class {
  async findAllRiders() {
    const result = await client.query(
      `SELECT json_build_object(
        'id', "rider"."id",
        'number', "number",
        'firstname', "firstname",
        'lastname', "lastname",
        'birthdate', "birth_date",
        'country', "rider"."country",
        'height', "height",
        'weight', "weight",
        'biography', "biography"
      ) AS "rider",
      "moto_model" AS "rider_moto_model",
      "team"."name" AS "team_name",
      "manufacturer"."name" AS "manufacturer_name",
      array_agg("race"."name" ORDER BY "race"."date") AS "rider_races" 
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      LEFT JOIN "rider_has_race" ON "rider_has_race"."rider_id" = "rider"."id"
      LEFT JOIN "race" ON "race"."id" = "race_id"
      GROUP BY "rider"."id", "number", "firstname", "lastname", "birth_date", "rider"."country", "height", "weight", 
      "moto_model", "team"."name", "manufacturer"."name", "biography" ORDER BY "lastname" ASC`
    );
    return result.rows;
  }
  async findOneRider(riderId) {
    const result = await client.query(
      `SELECT json_build_object(
          'id', "rider"."id",
          'number', "number",
          'firstname', "firstname",
          'lastname', "lastname",
          'birthdate', "birth_date",
          'country', "rider"."country",
          'height', "height",
          'weight', "weight",
          'biography', "biography"
        ) AS "rider",
        "moto_model" AS "rider_moto_model",
        "team"."name" AS "team_name",
        "manufacturer"."name" AS "manufacturer_name",
        array_agg("race"."name" ORDER BY "race"."date") AS "rider_races" 
        FROM "manufacturer"
        FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
        FULL JOIN "team" ON "team_id" = "team"."id"
        FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id"
        LEFT JOIN "rider_has_race" ON "rider_has_race"."rider_id" = "rider"."id"
        LEFT JOIN "race" ON "race"."id" = "race_id"
        WHERE "rider"."id" = $1
        GROUP BY "rider"."id", "number", "firstname", "lastname", "birth_date", "rider"."country", "height", "weight", 
        "moto_model", "team"."name", "manufacturer"."name", "biography" ORDER BY "lastname" ASC`,
      [riderId]
    );
    return result.rows[0];
  }
};

// src/app/controllers/riderController.ts
var service3 = new RiderService();
var riderController = {
  async getAll(_, res) {
    const riders = await service3.findAllRiders();
    return res.status(200).json(riders);
  },
  async getOne(req, res) {
    const rider = await service3.findOneRider(Number(req.params.id));
    if (!rider) {
      throw new ApiError(404, "Rider not found");
    }
    ;
    return res.status(200).json(rider);
  }
};

// src/app/router/riderRouter.ts
var router3 = import_express3.default.Router();
router3.route("/").get(controllerHandler(riderController.getAll));
router3.route("/:id").get(controllerHandler(riderController.getOne));

// src/app/router/seasonRouter.ts
var import_express4 = __toESM(require("express"));

// src/app/models/seasonMapper.ts
var SeasonService = class {
  async findAllSeasons() {
    const result = await client.query(
      `SELECT "season"."id" AS "season_id",
      "season"."year" AS "year",
      array_agg(DISTINCT("race"."name")) AS "season_races",
      array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
      FROM "season"
      FULL JOIN "race" ON "season"."id" = "season_id"
      FULL JOIN "rider_has_race" ON "race"."id" = "race_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      GROUP BY "season"."id", "season"."year"`
    );
    return result.rows;
  }
  async findOneSeason(seasonId) {
    const result = await client.query(
      `SELECT "season"."id" AS "season_id",
        "season"."year" AS "year",
        array_agg(DISTINCT("race"."name")) AS "season_races",
        array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
        FROM "season"
        FULL JOIN "race" ON "season"."id" = "season_id"
        FULL JOIN "rider_has_race" ON "race"."id" = "race_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id"
        WHERE "season"."id" = $1
        GROUP BY "season"."id", "season"."year"`,
      [seasonId]
    );
    return result.rows[0];
  }
  async findByYear(year) {
    const result = await client.query(
      `SELECT "season"."id" AS "season_id",
        "season"."year" AS "year",
        array_agg(DISTINCT("race"."name")) AS "season_races",
        array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
        FROM "season"
        FULL JOIN "race" ON "season"."id" = "season_id"
        FULL JOIN "rider_has_race" ON "race"."id" = "race_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id" WHERE "season"."year" = $1
        GROUP BY "season"."id", "season"."year"`,
      [year]
    );
    return result.rows[0];
  }
};

// src/app/controllers/seasonController.ts
var service4 = new SeasonService();
var seasonController = {
  async getAll(_, res) {
    const seasons = await service4.findAllSeasons();
    return res.status(200).json(seasons);
  },
  async getOne(req, res) {
    const season = await service4.findOneSeason(Number(req.params.id));
    if (!season) {
      throw new ApiError(404, "Season not found");
    }
    ;
    return res.status(200).json(season);
  },
  async getByYear(req, res) {
    const season = await service4.findByYear(Number(req.params.id));
    if (!season) {
      throw new ApiError(404, "Season not found");
    }
    ;
    return res.status(200).json(season);
  }
};

// src/app/router/seasonRouter.ts
var router4 = import_express4.default.Router();
router4.route("/").get(controllerHandler(seasonController.getAll));
router4.route("/:id").get(controllerHandler(seasonController.getOne));
router4.route("/year/:id").get(controllerHandler(seasonController.getByYear));

// src/app/router/teamRouter.ts
var import_express5 = __toESM(require("express"));

// src/app/models/teamMapper.ts
var TeamService = class {
  async findAllTeams() {
    const result = await client.query(
      `SELECT "team"."id" AS "team_id",
      "team"."name" AS "team_name",
      "manufacturer"."name" AS "manufacturer_name",
      array_agg(DISTINCT("team"."moto_model")) AS "team_motos",
      array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
      FROM "manufacturer"
      FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
      FULL JOIN "team" ON "team_id" = "team"."id"
      FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
      FULL JOIN "rider" ON "rider_id" = "rider"."id"
      GROUP BY "team"."id", "team"."name", "manufacturer"."name"`
    );
    return result.rows;
  }
  async findOneTeam(teamId) {
    const result = await client.query(
      `SELECT "team"."id" AS "team_id",
        "team"."name" AS "team_name",
        "manufacturer"."name" AS "manufacturer_name",
        array_agg(DISTINCT("team"."moto_model")) AS "team_motos",
        array_agg(DISTINCT("rider"."firstname" || ' ' || "rider"."lastname")) AS "season_riders"
        FROM "manufacturer"
        FULL JOIN "team_has_manufacturer" ON "manufacturer"."id" = "manufacturer_id" 
        FULL JOIN "team" ON "team_id" = "team"."id"
        FULL JOIN "rider_has_team" ON "team"."id" = "rider_has_team"."team_id"
        FULL JOIN "rider" ON "rider_id" = "rider"."id"
        WHERE "team"."id" = $1
        GROUP BY "team"."id", "team"."name", "manufacturer"."name"`,
      [teamId]
    );
    return result.rows[0];
  }
};

// src/app/controllers/teamController.ts
var service5 = new TeamService();
var teamController = {
  async getAll(_, res) {
    const teams = await service5.findAllTeams();
    return res.json(teams);
  },
  async getOne(req, res) {
    const team = await service5.findOneTeam(Number(req.params.id));
    if (!team) {
      throw new ApiError(404, "Team not found");
    }
    ;
    return res.status(200).json(team);
  }
};

// src/app/router/teamRouter.ts
var router5 = import_express5.default.Router();
router5.route("/").get(controllerHandler(teamController.getAll));
router5.route("/:id").get(controllerHandler(teamController.getOne));

// src/app/router/trackRouter.ts
var import_express6 = __toESM(require("express"));

// src/app/models/trackMapper.ts
var TrackService = class {
  async findAllTracks() {
    const result = await client.query(
      `SELECT "track"."id" AS "track_id",
      "track"."name" AS "track_name",
      "country",
      "city",
      array_agg(DISTINCT("race"."name")) AS "track_races"
      FROM "track"
      FULL JOIN "race" ON "track"."id" = "track_id"
      GROUP BY "track"."id", "track"."name", "country"`
    );
    return result.rows;
  }
  async findOneTrack(trackId) {
    const result = await client.query(
      `SELECT "track"."id" AS "track_id",
        "track"."name" AS "track_name",
        "country",
        "city",
        array_agg(DISTINCT("race"."name")) AS "track_races"
        FROM "track"
        FULL JOIN "race" ON "track"."id" = "track_id"
        WHERE "track"."id" = $1
        GROUP BY "track"."id", "track"."name", "country"`,
      [trackId]
    );
    return result.rows[0];
  }
};

// src/app/controllers/trackController.ts
var service6 = new TrackService();
var trackController = {
  async getAll(_, res) {
    const tracks = await service6.findAllTracks();
    return res.json(tracks);
  },
  async getOne(req, res) {
    const track = await service6.findOneTrack(Number(req.params.id));
    if (!track) {
      throw new ApiError(404, "Track not found");
    }
    ;
    return res.status(200).json(track);
  }
};

// src/app/router/trackRouter.ts
var router6 = import_express6.default.Router();
router6.route("/").get(controllerHandler(trackController.getAll));
router6.route("/:id").get(controllerHandler(trackController.getOne));

// src/app/router/index.ts
var router7 = import_express7.default.Router();
router7.all("/", (req, res) => {
  res.status(200).render("index");
});
router7.use("/riders", router3);
router7.use("/races", router2);
router7.use("/tracks", router6);
router7.use("/teams", router5);
router7.use("/seasons", router4);
router7.use("/manufacturers", router);
var router_default = router7;

// src/app/index.ts
var app = (0, import_express8.default)();
app.use(import_express8.default.json());
app.use(import_express8.default.urlencoded({ extended: true }));
app.use((0, import_cors.default)({ origin: process.env.CORS_DOMAIN ?? "*" }));
app.set("view engine", "ejs");
app.use(router_default);
app.use((req, res) => {
  res.status(404).send("Vous vous \xEAtes perdu on dirait !");
});
var app_default = app;

// src/index.ts
import_dotenv.default.config();
var port = process.env.PORT ?? 5002;
var server = import_http.default.createServer(app_default);
server.listen(port, () => {
  console.log(`Listening on http//localhost:${port}`);
});
