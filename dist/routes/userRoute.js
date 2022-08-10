"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.get("/api/users", _auth["default"], _UserController["default"].getAll);
  router.post("/api/user", _UserController["default"].addUser);
  router.get("/api/user/:id", _UserController["default"].get);
  router.put("/api/user/:id", _UserController["default"].update);
  router["delete"]("/api/user/:id", _UserController["default"]["delete"]);
  router.post("/api/login", _UserController["default"].login);
};

exports["default"] = _default;