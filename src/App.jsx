import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>aaaaa</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p className="list-row">bbbbb</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>ccccc</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
