const request = require('request')

async function chat(msg) {
  var options = {}
  if (process.env.PROXY !== 'y') {
    options = {
      'method': 'POST',
      'url': 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDwV1r0F6rFyOQcG54H374gKlQvS_BcyqI',
      'headers': {
              'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contents": [
          {
            "parts": [{
              text: msg
            }]
          }
        ]
      })
    };
  } else {
    console.log('use proxy...')
    options = {
      'method': 'POST',
      'url': 'http://127.0.0.1:12345',
      'headers': {
              'Content-Type': 'application/json'
      },
      body: msg
    };
  }

  return new Promise((resolve, reject) => {
      request(options, function (error, response) {
          if (error) {
              reject(error)
              return;
          }
          if (process.env.PROXY === 'y') {
            console.log('use proxy...')
            resolve(JSON.parse(response.body.match(/```json(.*)```/s)[1]))
            return
          }
          console.log(typeof response.body);
          const jsonStr = JSON.parse(response.body).candidates[0].content.parts[0].text.match(/```json(.*)```/s)[1];

          console.log('\n')
          console.log('got json str: ', typeof jsonStr)
          try {
              const data = JSON.parse(jsonStr);
              resolve(data)
          } catch (error) {
              console.log('重新parse json中。。。')
              // resolve(formatJSON(jsonStr))
              reject(error)
          }
      })
  });
}
async function run() {
  // For text-only input, use the gemini-pro model
  const model = await chat(base, companyInfo)

  console.log(model);
}

module.exports = {
  chat
}