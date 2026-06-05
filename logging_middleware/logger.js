const axios = require("axios");

const LOG_API = "http://4.224.186.213/evaluation-service/logs";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYXR5YXNyaS5wdW5kbGFAZ21haWwuY29tIiwiZXhwIjoxNzgwNjM3OTAzLCJpYXQiOjE3ODA2MzcwMDMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI0NWQyNjNkMS1hZDE1LTRlNzEtYjg1NC01MGJlOTc0NTViNTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwdW5kbGEgdmVua2F0YWxha3NobWkgc2F0eWFzcmkiLCJzdWIiOiJiZjA1NjVkMC1iZjY2LTQ4YzYtYTE0Mi04OTgxNWE5NGM3MTMifSwiZW1haWwiOiJzYXR5YXNyaS5wdW5kbGFAZ21haWwuY29tIiwibmFtZSI6InB1bmRsYSB2ZW5rYXRhbGFrc2htaSBzYXR5YXNyaSIsInJvbGxObyI6IjIzYnExYTA1aTgiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiJiZjA1NjVkMC1iZjY2LTQ4YzYtYTE0Mi04OTgxNWE5NGM3MTMiLCJjbGllbnRTZWNyZXQiOiJzRWZhdUp4TnhmRVBLdnpTIn0.ONH65B0CJ_MwmLNfXaFZeQgCjgdFt4QFJk1bRwxN-wM";

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log Created:", response.data);

    } catch (error) {
        console.log("Logging Failed:", error.response?.data || error.message);
    }
}

module.exports = Log;