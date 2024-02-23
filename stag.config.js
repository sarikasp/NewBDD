const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://www.amazon.in/"
    },


    env: {
        username: "Testing Staging Environment"
    }
})

