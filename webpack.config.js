module.exports = {
    resolve: {
        fallback: { process: require.resolve('process/browser')},
        fallback: { "crypto": require.resolve("crypto-browserify") },
    },
};