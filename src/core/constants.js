export const Constants = {
    key: "BbcNews",
    requestErrorMessage: "Bad request",
    validationMessage: "The api key should consist of 32 symbols",
    apiServer: `${clientSettings && clientSettings.IS_HEROKU_DEPLOY ? "https://" + window.location.hostname : "http://localhost:3001" }`,
    state: "state",
    current: "current"
}