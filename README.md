# Sentinela
Sentinela is a software to collect and show vulnerabilities alerts by DependaBot. This code use GraphQL to retrieve data from DependaBot using the Github API and send it to a Discord channel.

## Usage

### Configuration file
Settings are required before using Sentinel with a .env file. Following the example:  
```
REPO_NAME=""
REPO_OWNER=""
GIT_TOKEN=""
WEBHOOK_URL=""
```


Now, to use this application it's necessary to have NodeJS Installed and execute the following command.

```console
$ npm install && node src/index.js
```

After running the application collect all the alerts from the DependaBot and send to the Discord Server using the WebHook Bot.  

![image](https://user-images.githubusercontent.com/34748334/180124111-55cbddc5-d69d-4991-a67c-65b7bf3c622e.png)


The web interface will up on the <b>localhost:3000</b> by default. The web interface shows all the DependaBot Alerts retrived from the API. 

![image](https://user-images.githubusercontent.com/34748334/180105000-1bc6d1d2-72d7-4fea-ac81-3f53dd7bb89a.png)

## Packages
- discord-webhook-node  
- graphql-request  
- express  

## References 
https://www.npmjs.com/package/discord-webhook-node  
https://www.npmjs.com/package/graphql-request  
https://docs.github.com/en/graphql  
