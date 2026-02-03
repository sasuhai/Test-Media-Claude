import http.server
import socketserver
import webbrowser
from pathlib import Path


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


def find_server(start_port=8000, max_port=8050, directory=None):
    if directory is None:
        handler = http.server.SimpleHTTPRequestHandler
    else:
        handler = lambda *args, **kwargs: http.server.SimpleHTTPRequestHandler(
            *args, directory=str(directory), **kwargs
        )
    for port in range(start_port, max_port + 1):
        try:
            server = ReusableTCPServer(("127.0.0.1", port), handler)
            return server, port
        except OSError:
            continue
    return None, None


def main():
    project_root = Path(__file__).resolve().parents[1]
    server, port = find_server(directory=project_root)
    if server is None:
        print("Could not find a free port between 8000 and 8050.")
        return

    url = f"http://localhost:{port}/index.html"
    print(f"Serving {project_root} on {url}")
    webbrowser.open(url, new=2)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
