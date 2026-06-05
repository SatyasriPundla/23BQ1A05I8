# Logging Middleware

Reusable logging middleware package for backend applications.

## Project Structure

```text
logging_middleware/
│
├── logger.js
├── test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

```bash
npm install
```

## Dependency

```bash
npm install axios
```

## Usage

```javascript
const Log = require("./logger");

await Log(
    "backend",
    "info",
    "controller",
    "Application started successfully"
);
```

## Run

```bash
node test.js
```

## Supported Stack Values

```text
backend
frontend
```

## Supported Levels

```text
debug
info
warn
error
fatal
```

## Features

- Reusable logging utility
- API based logging
- Bearer token authentication
- Error handling
- Structured logging

## Output

```json
{
  "logID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "message": "log created successfully"
}
```