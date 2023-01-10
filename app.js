const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const instagramGetUrl = require("instagram-url-direct")


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index");
});



app.get("/download", async function (req, res) {
    let links = await instagramGetUrl(req.query.url);
    let link = links.url_list;

    console.log(link);

    res.render("download", { url: link });
});



app.listen(port, function () {
    console.log("Server is running ");
});


