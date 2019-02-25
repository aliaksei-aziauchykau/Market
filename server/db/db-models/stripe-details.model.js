
class StripeDetails {
    constructor() {
        this.userId = null;
        this.stripeAccessToken = null;
        this.stripeUserId = null;
    }

    static configMongoose() {
        const mongoseConfig =  {
            userId: String,
            stripeUserId: String,
            stripeAccessToken: String
        }; 

        return {
            name: "StripeDetails",
            collection: "stripe-details",
            mongoseConfig
        }
    }
}

module.exports = StripeDetails;