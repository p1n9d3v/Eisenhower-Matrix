const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@context": path.resolve(__dirname, "src/context"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        },
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^@components/(.*)$": "<rootDir>/src/components/$1",
                "^@context/(.*)$": "<rootDir>/src/context/$1",
                "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
                "^@constants/(.*)$": "<rootDir>/src/constants/$1",
            },
        },
    },
};
