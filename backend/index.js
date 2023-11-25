const app = require('./src/app');

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});