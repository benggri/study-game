'use client';

import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import io from 'socket.io-client';

interface IMsg {
  userName: string;
  msg: string;
}


export default function ChatPage() {
  const [userName, setUserName] = useState('');

  let socket:any;
  const inputRef = useRef(null);
  // connected flag
  const [connected, setConnected] = useState<boolean>(false);

  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>("");

  // 소켓 연결
  useEffect(() => {
    const socketInitializer = async () => {
      await fetch('/api/socket');
      if (socket) return;

      socket = io();

      socket.on('connect', () => {
        console.log('connected', socket);
        setConnected(true);
      });

      socket.on('error', (error: any) => {
        console.log(error);
      });

      socket.on('message', (message: IMsg) => {
        chat.push(message);
        console.log(chat);
        setChat([...chat]);
      });
    };
    socketInitializer();

    // 브라우저가 꺼지면 소켓 연결 종료
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserName(event.target.value);
  }

  const sendMessage = async () => {
    if (msg) {
      // build message obj
      const message: IMsg = {
        userName,
        msg
      };
      console.log(`sendMessage`)

      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      });

      // reset field if OK
      if (resp.ok) setMsg("");
    }
  };

  return (
    <>
      {
        userName.length < 5 ? (
          <>
            <div className="p-24 h-4/5">
              <div>
                <input type="text" value={userName} onChange={onChangeUserName} />
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="p-24 flex flex-col w-full h-4/5">
            <div className="py-4 text-white  bg-blue-500 sticky top-0">
              <h1 className="text-center text-2xl font-semibold">Realtime Chat App</h1>
              <h2 className="mt-2 text-center">in Next.js and Socket.io</h2>
            </div>
            <div className="flex flex-col flex-1 bg-gray-200">
              <div className="flex-1 p-4 font-mono">
                {chat.length ? (
                  chat.map((chat, i) => (
                    <div key={"msg_" + i} className="mt-1">
                      <span className={`${chat.userName === userName ? 'text-red-500' : 'text-gray-900'}`}>
                        {chat.userName === userName ? "Me" : chat.userName}
                      </span>
                      : {chat.msg}
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-center text-gray-400 py-6">
                    No chat messages
                  </div>
                )}
              </div>
              <div className="bg-gray-400 p-4 h-20 sticky bottom-0">
                <div className="flex flex-row flex-1 h-full divide-gray-200 divide-x">
                  <div className="pr-2 flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={msg}
                      placeholder={connected ? "Type a message..." : "Connecting..."}
                      className="w-full h-full rounded shadow border-gray-400 border px-2"
                      disabled={!connected}
                      onChange={(e) => {
                        setMsg(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-stretch pl-2">
                    <button className="bg-blue-500 rounded shadow text-sm text-white h-full px-2"
                            onClick={sendMessage}
                            disabled={!connected}>
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        )
      }
      
    </>
  );
}