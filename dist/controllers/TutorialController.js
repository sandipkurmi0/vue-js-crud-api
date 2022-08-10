"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Controller2 = _interopRequireDefault(require("./Controller"));

var _TutorialModel = _interopRequireDefault(require("../models/TutorialModel"));

var _TutorialService = _interopRequireDefault(require("../services/TutorialService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var tutorialService = new _TutorialService["default"](new _TutorialModel["default"]().getInstance());

var TutorialController = /*#__PURE__*/function (_Controller) {
  _inherits(TutorialController, _Controller);

  var _super = _createSuper(TutorialController);

  function TutorialController(service) {
    var _this;

    _classCallCheck(this, TutorialController);

    _this = _super.call(this, service);
    _this.addTutorial = _this.addTutorial.bind(_assertThisInitialized(_this));
    _this.getAllTutorial = _this.getAllTutorial.bind(_assertThisInitialized(_this));
    _this.getOneTutorial = _this.getOneTutorial.bind(_assertThisInitialized(_this));
    _this.updateTutorial = _this.updateTutorial.bind(_assertThisInitialized(_this));
    _this.deleteTutorial = _this.deleteTutorial.bind(_assertThisInitialized(_this));
    _this.deleteManyTutorial = _this.deleteManyTutorial.bind(_assertThisInitialized(_this));
    _this.findAllPublished = _this.findAllPublished.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TutorialController, [{
    key: "addTutorial",
    value: function () {
      var _addTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.service.addTutorial(req, res);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addTutorial(_x, _x2) {
        return _addTutorial.apply(this, arguments);
      }

      return addTutorial;
    }()
  }, {
    key: "getAllTutorial",
    value: function () {
      var _getAllTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.service.getAllTutorial(req, res);

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllTutorial(_x3, _x4) {
        return _getAllTutorial.apply(this, arguments);
      }

      return getAllTutorial;
    }()
  }, {
    key: "getOneTutorial",
    value: function () {
      var _getOneTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.service.getOneTutorial(req, res);

              case 2:
                response = _context3.sent;
                return _context3.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getOneTutorial(_x5, _x6) {
        return _getOneTutorial.apply(this, arguments);
      }

      return getOneTutorial;
    }()
  }, {
    key: "updateTutorial",
    value: function () {
      var _updateTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.service.updateTutorial(req, res);

              case 2:
                response = _context4.sent;
                return _context4.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateTutorial(_x7, _x8) {
        return _updateTutorial.apply(this, arguments);
      }

      return updateTutorial;
    }()
  }, {
    key: "deleteTutorial",
    value: function () {
      var _deleteTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.service.deleteTutorial(req, res);

              case 2:
                response = _context5.sent;
                return _context5.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteTutorial(_x9, _x10) {
        return _deleteTutorial.apply(this, arguments);
      }

      return deleteTutorial;
    }()
  }, {
    key: "deleteManyTutorial",
    value: function () {
      var _deleteManyTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.service.deleteManyTutorial(req, res);

              case 2:
                response = _context6.sent;
                return _context6.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteManyTutorial(_x11, _x12) {
        return _deleteManyTutorial.apply(this, arguments);
      }

      return deleteManyTutorial;
    }()
  }, {
    key: "findAllPublished",
    value: function () {
      var _findAllPublished = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var response;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.service.findAllPublished(req, res);

              case 2:
                response = _context7.sent;
                return _context7.abrupt("return", res.status(response.statusCode).send(response));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findAllPublished(_x13, _x14) {
        return _findAllPublished.apply(this, arguments);
      }

      return findAllPublished;
    }()
  }]);

  return TutorialController;
}(_Controller2["default"]);

var _default = new TutorialController(tutorialService);

exports["default"] = _default;