module.exports = function (app) {
    app.use(function (request, response, next) {
        response.Header("Cross-Origin-Opener-Policy", "same-origin");
        response.Header("Cross-Origin-Embedder-Policy", "require-corp");
        next();
    });
};