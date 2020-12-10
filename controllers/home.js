exports.renderHome = (req,res)=> {
    res.sendFile(process.cwd() + "/views/home.html");
    console.log(process.cwd())
}


