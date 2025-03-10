
const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")   // mockaroo.com

const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json({ extended: false}));


app.get("/", (req, resp) => {
    return resp.send("Hello from Home Page");
})

app.get("/users", (req, resp) => {
    // return SSR as html
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
    return resp.send(html);
});

app.get("/api/users", (req, resp) => {
    return resp.json(users);
});

app.get("/api/users/:id", (req, resp) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return resp.json(user);
});

app.post("/api/users", (req, resp) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return resp.json({status: "success", id: users.length});
    })
});


app.put("/api/users", (req, resp) => {
    return resp.json({status: "pending"});
});

app.patch("/api/users/:id", (req, resp) => {
    return resp.json({status: "pending"});
});

app.delete("/api/users/:id", (req, resp) => {
    return resp.json({status: "pending"});
});


app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
