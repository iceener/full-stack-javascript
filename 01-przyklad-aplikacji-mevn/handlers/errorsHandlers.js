/**
 * * Catch errors for async - await.
 * @param fn
 * @returns {Function}
 */
exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

/**
 * Catch 404 errors
 * @param req
 * @param res
 * @param next
 */
exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};