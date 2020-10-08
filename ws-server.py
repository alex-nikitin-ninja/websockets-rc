#!/usr/bin/env python

# WS server example

import asyncio
import websockets

async def hello(websocket, path):
    while True:
        recv_msg = await websocket.recv()
        print(f"< {recv_msg}")
        
        resp_msg = f"OK"
        await websocket.send(resp_msg)

start_server = websockets.serve(hello, "127.0.0.1", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
