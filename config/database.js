module.exports = {
    remoteUrl : "mongodb+srv://cedrick:chaud13031986@cluster0.wtkoc.mongodb.net/lacasa?retryWrites=true&w=majority&appName=Cluster0",
    //"mongodb+srv://"+ process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.wtkoc.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority",
    localUrl: "mongodb://localhost/" + process.env.DB_NAME
};
