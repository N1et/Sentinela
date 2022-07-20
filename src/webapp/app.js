const express = require('express')
const {GetDependabotAlert} = require('../lib/GetDependabotAlert'); 
const config  = require('../config')

// Application to show the alerts from DependaBot
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

const Webserver = async () => {
        const alertMessage = await GetDependabotAlert(config.repoName, config.repoOwner, config.tokengit)
        var alertcel = ''
        alertMessage.forEach(alertMessage => {
          alertcel += "<tr><td>" + alertMessage.repository.name + "</td>";
          alertcel += "<td>" + alertMessage.securityVulnerability.package.name+ "</td>";
          alertcel += "<td>" + alertMessage.securityVulnerability.advisory.summary + "</td>";
          alertcel += "<td>" + alertMessage.securityVulnerability.advisory.description + "</td>";
          alertcel += "<td>" + alertMessage.securityVulnerability.advisory.severity + "</td>";
          alertcel += "<td>" + alertMessage.securityVulnerability.vulnerableVersionRange + "</td>";
          alertcel += "<td>" + alertMessage.securityVulnerability.firstPatchedVersion.identifier + "</td>";
          alertcel += "<td> <a href=\"" + alertMessage.securityVulnerability.advisory.permalink + "\">Github</a></td></tr>";  
        });

        app.get('*', (req, res) => {
        res.render('index', {
          alertMessage: alertMessage,
          data: alertcel
      });
      })
      
      
      app.listen(port, () => {
        console.log(`webpp running on ${port}`)
      })
}

Webserver();