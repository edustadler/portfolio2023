// swc.config.js
module.exports = {
    jsc: {
        parser: {
            syntax: "ecmascript",
            jsx: true,
        },
        transform: {
            react: {
                pragma: "React.createElement",
                pragmaFrag: "React.Fragment",
                throwIfNamespace: true,
                development: false,
                useBuiltins: true,
            },
        },
    },
};
