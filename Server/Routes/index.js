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
    res.render('index', { title: 'Home' });
});
/* GET About Us page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About' });
});
/* GET Products page. */
router.get('/products', function (req, res, next) {
    res.render('index', { title: 'Products' });
});
/* GET Services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us' });
});
/* GET Contact Us page. */
router.get('/test', function (req, res, next) {
    res.render('index', { title: 'test' });
});
module.exports = router;
//# sourceMappingURL=index.js.map