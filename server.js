const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const ROOT_DIR = __dirname;
const PORT = process.env.PORT || 8000;
const MAX_BODY_SIZE = 2 * 1024 * 1024; // 2MB

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

function send(res, status, body, headers = {}) {
    res.writeHead(status, headers);
    res.end(body);
}

function safeJoin(root, target) {
    const resolvedPath = path.resolve(root, target);
    if (!resolvedPath.startsWith(root)) {
        return null;
    }
    return resolvedPath;
}

function serveFile(req, res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            send(res, 404, 'Not found');
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const type = MIME_TYPES[ext] || 'application/octet-stream';
        send(res, 200, data, { 'Content-Type': type });
    });
}

function handlePublish(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
        if (body.length > MAX_BODY_SIZE) {
            send(res, 413, 'Payload too large');
            req.destroy();
        }
    });

    req.on('end', () => {
        try {
            const parsed = JSON.parse(body || '{}');
            const contentPath = path.join(ROOT_DIR, 'content.json');
            fs.writeFile(contentPath, JSON.stringify(parsed, null, 2), 'utf8', (err) => {
                if (err) {
                    send(res, 500, 'Failed to write content.json');
                    return;
                }
                send(res, 200, JSON.stringify({ status: 'ok' }), { 'Content-Type': 'application/json' });
            });
        } catch (error) {
            send(res, 400, 'Invalid JSON');
        }
    });
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'POST' && url.pathname === '/api/publish') {
        handlePublish(req, res);
        return;
    }

    if (req.method !== 'GET') {
        send(res, 405, 'Method not allowed');
        return;
    }

    let pathname = url.pathname;
    if (pathname === '/') {
        pathname = '/index.html';
    }

    const filePath = safeJoin(ROOT_DIR, pathname.slice(1));
    if (!filePath) {
        send(res, 403, 'Forbidden');
        return;
    }

    serveFile(req, res, filePath);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
