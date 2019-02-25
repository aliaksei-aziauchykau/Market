const ProductViewModel = require("./product.view.model");
const StripeViewModel = require("./stripe-info.view.model");
const PostViewModel = require("./post.view.model");
const userViewModels = require("./user-info.view.model");
const stripeViewModels = require("./stripe/view.models");

module.exports = {
    PostViewModel,
    ProductViewModel,
    StripeViewModel,
    ...userViewModels,
    ...stripeViewModels
}