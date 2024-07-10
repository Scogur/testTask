const { redirect } = require("express/lib/response")

function bc(){
    console.log('text')
    
}

function onLoad(){
    console.log('loaded')
    console.log(fetch("https://oauth.pipedrive.com/oauth/token", {
    method: "POST",
    body: JSON.stringify({
        grant_type: "authorization_code",
        redirect_uri: "https://scogur.test/callback",
        code: ""})
    }))
}