"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// src/app/config/db.ts
var require_db = __commonJS({
  "src/app/config/db.ts"(exports, module2) {
    "use strict";
    var { Pool } = require("pg");
    var config = {};
    var pool = new Pool(config);
    module2.exports = {
      originalClient: pool,
      async query(...params) {
        return this.originalClient.query(...params);
      }
    };
  }
});

// src/app/models/riderMapper.ts
var require_riderMapper = __commonJS({
  "src/app/models/riderMapper.ts"(exports, module2) {
    "use strict";
    var riderClient = require_db();
    module2.exports = {
      async findAllRiders() {
        const result = await riderClient.query('SELECT * FROM "rider"');
        return result.rows;
      },
      async findOneRider(riderId) {
        const result = await riderClient.query(`SELECT * FROM "rider" WHERE "rider"."id" = ${riderId}`);
        return result.rows[0];
      },
      async findRiderByNumber(riderNumber) {
        const result = await riderClient.query(`SELECT * FROM "rider" WHERE "rider"."number" = '${riderNumber}'`);
        return result.rows[0];
      }
    };
  }
});

// src/app/controllers/riderController.ts
var require_riderController = __commonJS({
  "src/app/controllers/riderController.ts"(exports, module2) {
    "use strict";
    var riderMapper = require_riderMapper();
    module2.exports = {
      async getAll(_, res) {
        const riders = await riderMapper.findAllRiders();
        return res.json(riders);
      },
      async getOne(req, res) {
        const rider = await riderMapper.findOneRider(req.params.id);
        return res.json(rider);
      },
      async getByNumber(req, res) {
        const rider = await riderMapper.findRiderByNumber(req.params.id);
        return res.json(rider);
      }
    };
  }
});

// src/app/router/riderRouter.ts
var require_riderRouter = __commonJS({
  "src/app/router/riderRouter.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var riderController = require_riderController();
    var router2 = import_express2.default.Router();
    router2.route("/").get(riderController.getAll);
    router2.route("/:id").get(riderController.getOne);
    router2.route("/number/:id").get(riderController.getByNumber);
    module2.exports = router2;
  }
});

// src/app/models/raceMapper.ts
var require_raceMapper = __commonJS({
  "src/app/models/raceMapper.ts"(exports, module2) {
    "use strict";
    var raceClient = require_db();
    module2.exports = {
      async findAllRaces() {
        const result = await raceClient.query('SELECT * FROM "race"');
        return result.rows;
      },
      async findOneRace(raceId) {
        const result = await raceClient.query(`SELECT * FROM "race" WHERE "race"."id" = ${raceId}`);
        return result.rows[0];
      }
    };
  }
});

// src/app/controllers/raceController.ts
var require_raceController = __commonJS({
  "src/app/controllers/raceController.ts"(exports, module2) {
    "use strict";
    var raceMapper = require_raceMapper();
    module2.exports = {
      async getAll(_, res) {
        const races = await raceMapper.findAllRaces();
        return res.json(races);
      },
      async getOne(req, res) {
        const race = await raceMapper.findOneRace(req.params.id);
        return res.json(race);
      }
    };
  }
});

// src/app/router/raceRouter.ts
var require_raceRouter = __commonJS({
  "src/app/router/raceRouter.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var raceController = require_raceController();
    var router2 = import_express2.default.Router();
    router2.route("/").get(raceController.getAll);
    router2.route("/:id").get(raceController.getOne);
    module2.exports = router2;
  }
});

// src/app/models/trackMapper.ts
var require_trackMapper = __commonJS({
  "src/app/models/trackMapper.ts"(exports, module2) {
    "use strict";
    var trackClient = require_db();
    module2.exports = {
      async findAllTracks() {
        const result = await trackClient.query('SELECT * FROM "track"');
        return result.rows;
      },
      async findOneTrack(trackId) {
        const result = await trackClient.query(`SELECT * FROM track WHERE track.id = ${trackId}`);
        return result.rows[0];
      }
    };
  }
});

// src/app/controllers/trackController.ts
var require_trackController = __commonJS({
  "src/app/controllers/trackController.ts"(exports, module2) {
    "use strict";
    var trackMapper = require_trackMapper();
    module2.exports = {
      async getAll(_, res) {
        const tracks = await trackMapper.findAllTracks();
        return res.json(tracks);
      },
      async getOne(req, res) {
        const track = await trackMapper.findOneTrack(req.params.id);
        return res.json(track);
      }
    };
  }
});

// src/app/router/trackRouter.ts
var require_trackRouter = __commonJS({
  "src/app/router/trackRouter.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var trackController = require_trackController();
    var router2 = import_express2.default.Router();
    router2.route("/").get(trackController.getAll);
    router2.route("/:id").get(trackController.getOne);
    module2.exports = router2;
  }
});

// src/app/models/teamMapper.ts
var require_teamMapper = __commonJS({
  "src/app/models/teamMapper.ts"(exports, module2) {
    "use strict";
    var teamClient = require_db();
    module2.exports = {
      async findAllTeams() {
        const result = await teamClient.query('SELECT * FROM "team"');
        return result.rows;
      },
      async findOneTeam(teamId) {
        const result = await teamClient.query(`SELECT * FROM "team" WHERE "team"."id" = ${teamId}`);
        return result.rows[0];
      }
    };
  }
});

// src/app/controllers/teamController.ts
var require_teamController = __commonJS({
  "src/app/controllers/teamController.ts"(exports, module2) {
    "use strict";
    var teamMapper = require_teamMapper();
    module2.exports = {
      async getAll(_, res) {
        const teams = await teamMapper.findAllTeams();
        return res.json(teams);
      },
      async getOne(req, res) {
        const team = await teamMapper.findOneTeam(req.params.id);
        return res.json(team);
      }
    };
  }
});

// src/app/router/teamRouter.ts
var require_teamRouter = __commonJS({
  "src/app/router/teamRouter.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var teamController = require_teamController();
    var router2 = import_express2.default.Router();
    router2.route("/").get(teamController.getAll);
    router2.route("/:id").get(teamController.getOne);
    module2.exports = router2;
  }
});

// src/app/models/seasonMapper.ts
var require_seasonMapper = __commonJS({
  "src/app/models/seasonMapper.ts"(exports, module2) {
    "use strict";
    var seasonClient = require_db();
    module2.exports = {
      async findAllSeasons() {
        const result = await seasonClient.query('SELECT * FROM "season"');
        return result.rows;
      },
      async findOneSeason(seasonId) {
        const result = await seasonClient.query(`SELECT * FROM "season" WHERE "season"."id" = ${seasonId}`);
        return result.rows[0];
      },
      async findByYear(year) {
        const result = await seasonClient.query(`SELECT * FROM "season" WHERE "season"."year" = ${year}`);
        return result.rows[0];
      }
    };
  }
});

// src/app/controllers/seasonController.ts
var require_seasonController = __commonJS({
  "src/app/controllers/seasonController.ts"(exports, module2) {
    "use strict";
    var seasonMapper = require_seasonMapper();
    module2.exports = {
      async getAll(_, res) {
        const seasons = await seasonMapper.findAllSeasons();
        return res.json(seasons);
      },
      async getOne(req, res) {
        const season = await seasonMapper.findOneSeason(req.params.id);
        return res.json(season);
      },
      async getByYear(req, res) {
        const season = await seasonMapper.findByYear(req.params.id);
        return res.json(season);
      }
    };
  }
});

// src/app/router/seasonRouter.ts
var require_seasonRouter = __commonJS({
  "src/app/router/seasonRouter.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var seasonController = require_seasonController();
    var router2 = import_express2.default.Router();
    router2.route("/").get(seasonController.getAll);
    router2.route("/:id").get(seasonController.getOne);
    router2.route("/year/:id").get(seasonController.getByYear);
    module2.exports = router2;
  }
});

// src/app/models/manufacturerMapper.ts
var require_manufacturerMapper = __commonJS({
  "src/app/models/manufacturerMapper.ts"(exports, module2) {
    "use strict";
    var manufacturerClient = require_db();
    module2.exports = {
      async findAllManufacturers() {
        const result = await manufacturerClient.query('SELECT * FROM "manufacturer"');
        return result.rows;
      },
      async findOneManufacturer(manufacturerId) {
        const result = await manufacturerClient.query(`SELECT * FROM "manufacturer" WHERE "manufacturer"."id" = ${manufacturerId}`);
        return result.rows[0];
      }
    };
  }
});

// src/app/controllers/manufacturerController.ts
var require_manufacturerController = __commonJS({
  "src/app/controllers/manufacturerController.ts"(exports, module2) {
    "use strict";
    var manufacturerMapper = require_manufacturerMapper();
    module2.exports = {
      async getAll(_, res) {
        const manufacturers = await manufacturerMapper.findAllManufacturers();
        return res.json(manufacturers);
      },
      async getOne(req, res) {
        const manufacturer = await manufacturerMapper.findOneManufacturer(req.params.id);
        return res.json(manufacturer);
      }
    };
  }
});

// src/app/router/manufacturerRouter.ts
var require_manufacturerRouter = __commonJS({
  "src/app/router/manufacturerRouter.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var manufacturerController = require_manufacturerController();
    var router2 = import_express2.default.Router();
    router2.route("/").get(manufacturerController.getAll);
    router2.route("/:id").get(manufacturerController.getOne);
    module2.exports = router2;
  }
});

// src/app/router/index.ts
var import_express, riderRouter, raceRouter, trackRouter, teamRouter, seasonRouter, manufacturerRouter, router, router_default;
var init_router = __esm({
  "src/app/router/index.ts"() {
    "use strict";
    import_express = __toESM(require("express"));
    riderRouter = require_riderRouter();
    raceRouter = require_raceRouter();
    trackRouter = require_trackRouter();
    teamRouter = require_teamRouter();
    seasonRouter = require_seasonRouter();
    manufacturerRouter = require_manufacturerRouter();
    router = import_express.default.Router();
    router.all("/", (req, res) => {
      res.send("page accueil");
    });
    router.use("/riders", riderRouter);
    router.use("/races", raceRouter);
    router.use("/tracks", trackRouter);
    router.use("/teams", teamRouter);
    router.use("/seasons", seasonRouter);
    router.use("/manufacturers", manufacturerRouter);
    router_default = router;
  }
});

// src/app/index.ts
var require_app = __commonJS({
  "src/app/index.ts"(exports, module2) {
    "use strict";
    var import_express2 = __toESM(require("express"));
    var import_cors = __toESM(require("cors"));
    init_router();
    var app2 = (0, import_express2.default)();
    app2.use(import_express2.default.json());
    app2.use(import_express2.default.urlencoded({ extended: true }));
    app2.use((0, import_cors.default)({ origin: process.env.CORS_DOMAIN ?? "*" }));
    app2.use(router_default);
    module2.exports = app2;
  }
});

// src/index.ts
var import_http = __toESM(require("http"));
require("dotenv").config();
var app = require_app();
var port = process.env.PORT ?? 5002;
var server = import_http.default.createServer(app);
server.listen(port, () => {
  console.log(`Listening on http//localhost:${port}`);
});
