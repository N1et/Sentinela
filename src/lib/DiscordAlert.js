const { Webhook, MessageBuilder  } = require('discord-webhook-node');
 
async function DiscordAlert(webhookUrl, Alertmessage) {
    const hook = new Webhook(webhookUrl);
    const embed = new MessageBuilder()
    .setColor('#00b0f4')
    .setTimestamp();
     
    Alertmessage.forEach((msg) => { 
        embed.setTitle(`${msg.securityVulnerability.advisory.summary} \n ${msg.securityVulnerability.package.name} ${msg.securityVulnerability.vulnerableVersionRange} `)
        embed.setDescription(msg.securityVulnerability.advisory.description)
        embed.addField('Repository', msg.repository.name)
        embed.addField('Package', msg.securityVulnerability.package.name)
        embed.addField('Severity', msg.securityVulnerability.advisory.severity)
        embed.addField('Fixed Version', msg.securityVulnerability.firstPatchedVersion.identifier)
        embed.addField('Link', msg.securityVulnerability.advisory.permalink)
    });

    hook.send(embed);
}

module.exports = { DiscordAlert }

