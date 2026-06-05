const Log = require("./logger");

async function run() {

    await Log(
        "backend",
        "info",
        "controller",
        "Application started successfully"
    );

    await Log(
        "backend",
        "warn",
        "service",
        "High memory usage detected"
    );

    await Log(
        "backend",
        "error",
        "handler",
        "Received string, expected bool"
    );

    await Log(
        "backend",
        "fatal",
        "db",
        "Database connection failed"
    );
}

run();