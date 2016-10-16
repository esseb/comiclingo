'use strict'

const request = require('request');

let config
try {
  config = require('./config')
}
catch (err) {
  console.log('Unable to read "config.json"', err)
  console.log('See config.json.sample for an example')
}

const translateApi = 'http://api.microsofttranslator.com/v2/Ajax.svc/Translate';
const textToTranslate = 'le cheval rouge';

// Get Azure Data Market Access Token.
request.post(
  'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13',
  {
    form : {
      grant_type : 'client_credentials',
      client_id : config.azureDataMarketClientId,
      client_secret : config.azureDataMarketClientSecret,
      scope : 'http://api.microsofttranslator.com'
    }
  },

  // Once we get the access token, translate the text.
  function (error, response, body) {
    if (!error && response.statusCode == 200) {  
      // Parse and get the access token.
      const accessToken = JSON.parse(body).access_token;

      request(
        {
          url: `${translateApi}?text=${textToTranslate}&from=fr&to=en`,
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        },
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // Strip leading and trailing quotemarks from the translated text.
            const translation = body.replace(/^\s*"(.+)"\w*$/, '$1');

            console.log('Yay: <' + translation + '>');
          }
          else {
            console.log('Failed to get translation');
          }
        }
      );
    }
    else {
      console.log('Failed to get access token');
    }
  }
);
