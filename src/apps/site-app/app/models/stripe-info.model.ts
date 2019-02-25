export class StripeInfoModel {
    public token: string;
    public stipeUserId: string;
    public paymentMethods: StripePaymentMethod[];
    public product: StripeProductInfo;
    public plans: StripePlanInfo[];
}

export class StripePaymentMethod {
    public name: string;
    public email: string;
    public token: string;
}

export class StripeProductInfo {
    public name: string;
    public productToken: string;
}

export class StripePlanInfo {

    constructor() {
        this.planName = "New Plan";
        this.amount = "5000";
    }

    public id: string;
    public planName: string;
    public amount: string;
    public currency: string;
}