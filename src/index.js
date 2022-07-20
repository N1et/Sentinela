
const { GetDependabotAlert } = require('./lib/GetDependabotAlert')
const { DiscordAlert } = require('./lib/DiscordAlert')
const { Webserver } = require('./webapp/app')
const config  = require('./config')

async function main() {
    const alertMessage = await GetDependabotAlert(config.repoName, config.repoOwner, config.tokengit)
    DiscordAlert(config.webhookUrl, alertMessage)

}

main()