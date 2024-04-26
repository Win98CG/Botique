import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faUserTie,
  faPaperclip,
  faFaceSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import style from "./LiveChat.module.css";
import { useState } from "react";
function LiveChat() {
  //show/hide live chat
  const [isShow, setIsShow] = useState(false);
  const handleOpenChat = function () {
    setIsShow((prev) => !prev);
  };
  return (
    <div>
      <FontAwesomeIcon
        onClick={handleOpenChat}
        className={style.open_icon}
        icon={faMessage}
      />
      {isShow && (
        <div className={style.container}>
          <header className={style.header}>
            <h4>Customer Support</h4>
            <button>Let's Chat App</button>
          </header>
          <ul className={style.chatbox}>
            <li className={`${style.chat} ${style.right}`}>
              <p>Xin chào</p>
            </li>
            <li className={`${style.chat} ${style.right}`}>
              <p>Làm thế nào để xem các sản phẩm?</p>
            </li>
            <li className={`${style.chat} ${style.left}`}>
              <FontAwesomeIcon className={style.avatar} icon={faUserTie} />
              <p>ADMIN: Chào bạn</p>
            </li>
            <li className={`${style.chat} ${style.left}`}>
              <FontAwesomeIcon className={style.avatar} icon={faUserTie} />
              <p>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</p>
            </li>
          </ul>
          <div className={style.chat_input}>
            <FontAwesomeIcon className={style.avatar} icon={faUserTie} />

            <textarea placeholder="Enter Message..." />
            <FontAwesomeIcon className={style.icon} icon={faPaperclip} />
            <FontAwesomeIcon className={style.icon} icon={faFaceSmile} />
            <FontAwesomeIcon
              className={`${style.icon} ${style.send}`}
              icon={faPaperPlane}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default LiveChat;
