module.exports = class StrieInfoViewModel {
    constructor(data) {
        this.stripeAccessToken = data && data.stripeAccessToken || null;
        this.stripeUserId = data && data.stripeUserId || null;
    }
}