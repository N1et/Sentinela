
const { GetDependabotAlert } = require('./lib/GetDependabotAlert')
const { DiscordAlert } = require('./lib/DiscordAlert')
const { Webserver } = require('./webapp/app')
require('dotenv').config()


async function main() {
    const alertMessage = await GetDependabotAlert(process.env.REPO_NAME, process.env.REPO_OWNER, process.env.GIT_TOKEN)
    DiscordAlert(process.env.WEBHOOK_URL, alertMessage)

}

main()