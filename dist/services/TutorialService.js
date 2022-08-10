"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Service2 = _interopRequireDefault(require("./Service"));

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

var getPagination = function getPagination(page, size) {
  var limit = size ? +size : 5;
  var offset = page ? page * limit : 1;
  return {
    limit: limit,
    offset: offset
  };
};

var TutorialService = /*#__PURE__*/function (_Service) {
  _inherits(TutorialService, _Service);

  var _super = _createSuper(TutorialService);

  // eslint-disable-next-line no-useless-constructor
  function TutorialService(model) {
    var _this;

    _classCallCheck(this, TutorialService);

    _this = _super.call(this, model);
    _this.addTutorial = _this.addTutorial.bind(_assertThisInitialized(_this));
    _this.getAllTutorial = _this.getAllTutorial.bind(_assertThisInitialized(_this));
    _this.getOneTutorial = _this.getOneTutorial.bind(_assertThisInitialized(_this));
    _this.updateTutorial = _this.updateTutorial.bind(_assertThisInitialized(_this));
    _this.deleteTutorial = _this.deleteTutorial.bind(_assertThisInitialized(_this));
    _this.deleteManyTutorial = _this.deleteManyTutorial.bind(_assertThisInitialized(_this));
    _this.findAllPublished = _this.findAllPublished.bind(_assertThisInitialized(_this));
    return _this;
  } // Create and Save a new Tutorial


  _createClass(TutorialService, [{
    key: "addTutorial",
    value: function () {
      var _addTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (req.body.title) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", {
                  error: "content Cannot be empty",
                  statusCode: 500,
                  errors: errors
                });

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.model.create(req.body);

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data
                });

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context.t0
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function addTutorial(_x, _x2) {
        return _addTutorial.apply(this, arguments);
      }

      return addTutorial;
    }() // Retrieve all Tutorials from the database.

  }, {
    key: "getAllTutorial",
    value: function () {
      var _getAllTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var _req$query, page, size, title, condation, _getPagination, limit, offset, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(req.query);
                _req$query = req.query, page = _req$query.page, size = _req$query.size, title = _req$query.title; // const title = req.query.title

                condation = title ? {
                  title: {
                    $regex: new RegExp(title),
                    $options: "i"
                  }
                } : {};
                console.log("condation", condation);
                _getPagination = getPagination(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
                _context2.prev = 5;
                _context2.next = 8;
                return this.model.paginate(condation, {
                  offset: offset,
                  limit: limit
                });

              case 8:
                data = _context2.sent;
                return _context2.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data.docs,
                  totalItems: data.totalDocs,
                  totalPages: data.totalPages,
                  currentPage: data.page - 1
                });

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](5);
                return _context2.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context2.t0
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 12]]);
      }));

      function getAllTutorial(_x3, _x4) {
        return _getAllTutorial.apply(this, arguments);
      }

      return getAllTutorial;
    }() // Find a single Tutorial with an id

  }, {
    key: "getOneTutorial",
    value: function () {
      var _getOneTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.prev = 1;
                _context3.next = 4;
                return this.model.findById(id);

              case 4:
                data = _context3.sent;
                return _context3.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data
                });

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context3.t0
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      function getOneTutorial(_x5, _x6) {
        return _getOneTutorial.apply(this, arguments);
      }

      return getOneTutorial;
    }() // Update a Tutorial by the id in the request

  }, {
    key: "updateTutorial",
    value: function () {
      var _updateTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var item, id, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                item = req.body;
                id = req.params.id;
                _context4.prev = 2;
                _context4.next = 5;
                return this.model.findByIdAndUpdate(id, item, {
                  "new": true
                });

              case 5:
                data = _context4.sent;
                return _context4.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data
                });

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                return _context4.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context4.t0
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 9]]);
      }));

      function updateTutorial(_x7, _x8) {
        return _updateTutorial.apply(this, arguments);
      }

      return updateTutorial;
    }() // Delete a Tutorial with the specified id in the request

  }, {
    key: "deleteTutorial",
    value: function () {
      var _deleteTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                _context5.prev = 1;
                _context5.next = 4;
                return this.model.findByIdAndDelete(id);

              case 4:
                data = _context5.sent;

                if (data) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", {
                  error: "Cannot delete Tutorial with id=".concat(id, ". Maybe Tutorial was not found!"),
                  statusCode: 500,
                  errors: errors
                });

              case 7:
                return _context5.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data
                });

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context5.t0
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 10]]);
      }));

      function deleteTutorial(_x9, _x10) {
        return _deleteTutorial.apply(this, arguments);
      }

      return deleteTutorial;
    }() // Delete all Tutorials from the database.

  }, {
    key: "deleteManyTutorial",
    value: function () {
      var _deleteManyTutorial = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        var data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.model.deleteMany({});

              case 3:
                data = _context6.sent;
                return _context6.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data,
                  deleteCount: data.count
                });

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context6.t0
                });

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function deleteManyTutorial(_x11, _x12) {
        return _deleteManyTutorial.apply(this, arguments);
      }

      return deleteManyTutorial;
    }() //Find Tutorials from database

  }, {
    key: "findAllPublished",
    value: function () {
      var _findAllPublished = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var _req$query2, page, size, _getPagination2, limit, offset, data;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _req$query2 = req.query, page = _req$query2.page, size = _req$query2.size;
                _getPagination2 = getPagination(page, size), limit = _getPagination2.limit, offset = _getPagination2.offset;
                _context7.prev = 2;
                _context7.next = 5;
                return this.model.paginate({
                  published: true
                }, {
                  offset: offset,
                  limit: limit
                });

              case 5:
                data = _context7.sent;
                return _context7.abrupt("return", {
                  error: false,
                  statusCode: 200,
                  data: data.docs,
                  totalItems: data.totalDocs,
                  totalPages: data.totalPages,
                  currentPage: data.page - 1
                });

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](2);
                return _context7.abrupt("return", {
                  error: true,
                  statusCode: 500,
                  errors: _context7.t0
                });

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 9]]);
      }));

      function findAllPublished(_x13, _x14) {
        return _findAllPublished.apply(this, arguments);
      }

      return findAllPublished;
    }()
  }]);

  return TutorialService;
}(_Service2["default"]);

var _default = TutorialService;
exports["default"] = _default;