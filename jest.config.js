/** @type {import('jest').Config} */
const config = {
    verbose: true,
    "transform": {
        "\\.[jt]sx?$": "babel-jest",
    },
    'moduleNameMapper': {
        '@/(.*)': '<rootDir>/resources/js/$1'
    }
};

module.exports = config;