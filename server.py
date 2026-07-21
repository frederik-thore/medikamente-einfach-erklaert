"""Lokaler Server für die statische Test-App.

Start: python3 server.py
Danach im Browser öffnen: http://localhost:8000
"""

from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 8000), SimpleHTTPRequestHandler)
    print("Die Test-App läuft auf http://localhost:8000")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer beendet.")
        server.server_close()
