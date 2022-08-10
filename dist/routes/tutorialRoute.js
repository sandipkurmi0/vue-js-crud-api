"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TutorialController = _interopRequireDefault(require("../controllers/TutorialController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.post("/api/tutorial", _TutorialController["default"].addTutorial);
  router.get("/api/tutorial", _TutorialController["default"].getAllTutorial);
  router.get("/api/tutorial/:id", _TutorialController["default"].getOneTutorial);
  router.put("/api/tutorial/:id", _TutorialController["default"].updateTutorial);
  router["delete"]("/api/tutorial/:id", _TutorialController["default"].deleteTutorial);
  router["delete"]("/api/tutorial/", _TutorialController["default"].deleteManyTutorial);
  router.get("/api/published", _TutorialController["default"].findAllPublished); // router.get(`/api/tutorial`, TutorialController.getAll);
};

exports["default"] = _default;