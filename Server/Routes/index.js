"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET About Us page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
});
/* GET Projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
});
/* GET Services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact' });
});
module.exports = router;
//# sourceMappingURL=index.js.map