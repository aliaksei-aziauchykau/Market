const express = require("express");
const router = express.Router();
const ValueCheckerUtil = require("../helpers/value.checker");
const routeHandler = require("../handlers/generic/route.handler");
const stripeProductRouter = require("./stripe/products.route");
const stripePlanRouter = require("./stripe/plans.route");

router.use("/:stripeId/products", stripeProductRouter);
router.use("/:stripeId/plans", stripePlanRouter);

router.get("/", (request, response) => {

    routeHandler.getAllAction({
        getSchemaFn: sc => sc.StripeDetailSchema,
        getViewModelFn: vm => vm.StripeViewModel
    }, response);
});

router.get("/:stripeId", (request, response) => {

    const {
        stripeId
    } = request.params;

    if(!ValueCheckerUtil.CheckInputParams(response, {
        stripeId
    }, {
    })) return;

    routeHandler.getAction({
        id: stripeId,
        getSchemaFn: sc => sc.StripeDetailSchema,
        getViewModelFn: vm => vm.StripeViewModel
    }, response);
});

router.post("/", (request, response) => {

    const {
        userId,
        stripeAccessToken,
        stripeUserId
    } = request.body;

    const sourceModel = ValueCheckerUtil.ClearObject({
        userId,
        stripeAccessToken,
        stripeUserId
    });

    if(!ValueCheckerUtil.CheckInputParams(response, {
        userId
    }, {
        ...sourceModel
    })) return;

    routeHandler.createAction({
        sourceModel,
        getSchemaFn: sc => sc.StripeDetailSchema,
        getDbModelFn: db => db.StripeDetail,
        getViewModelFn: vm => vm.StripeViewModel,
        checkModel: {
            id: userId,
            getSchemaFn: sc => sc.UserSchema
        }
    }, response);
});

router.put("/:stripeId", (request, response) => {

    const {
        stripeId
    } = request.params;

    const {
        stripeAccessToken,
        stripeUserId
    } = request.body;

    const sourceModel = ValueCheckerUtil.ClearObject({
        stripeAccessToken,
        stripeUserId,
    });


    if(!ValueCheckerUtil.CheckInputParams(response, {
        stripeId
    }, {
    })) return;

    routeHandler.updateAction({
        id: stripeId,
        sourceModel,
        getSchemaFn: sc => sc.StripeDetailSchema,
        getViewModelFn: vm => vm.StripeViewModel,
    }, response);
});

router.delete("/:stripeId", (request, response) => {

    const {
        stripeId
    } = request.params;

    if(!ValueCheckerUtil.CheckInputParams(response, {
        stripeId
    }, {
    })) return;

    routeHandler.deleteAction({
        id: stripeId,
        getSchemaFn: sc => sc.StripeDetailSchema,
    }, response);
});

module.exports = router;