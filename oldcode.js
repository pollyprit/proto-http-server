
/*
function myHandler(req, resp) {
    if (req.url === "/favicon.ico") return resp.end();

    const log = `${Date.now()}: ${req.url} new request received\n`;
    const myURL = url.parse(req.url, true);
    
    console.log(myURL);

    fs.appendFile("server.log", log, (err, data) => {
        switch(myURL.pathname) {
            case "/": resp.end("You are @ HOME");
            break;

            case "/about":
                const name = myURL.query.name;
                const id = myURL.query.id;

                resp.end(`Hi ${name} with id ${id}`);
            break;

            default:    resp.end("404 - Page Not Found!");
            break;
        }
    });
}
*/

// const myServer = http.createServer(app);
// myServer.listen(8000, () => { console.log("Server started at port: 8000")})