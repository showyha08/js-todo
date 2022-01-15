import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addTask(inputText);
};

const addTask = (inputText) => {
  // liタグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // dibタグの子要素に各要素を設定
  div.appendChild(p);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // buttonタグの追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 複製
    const completeText = completeButton.innerText;
    // liタグ生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // p生成
    const p = document.createElement("p");
    p.innerText = inputText;
    // buttonタグの追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 複製
      const backText = backButton.innerText;
      // 削除
      deleteFromIncompleteList(backButton.parentNode.parentNode.parentNode);
      // ツイカ
      addTask(backText);
    });

    // dibタグの子要素に各要素を設定
    div.appendChild(p);
    li.appendChild(div);
    p.appendChild(backButton);

    // 未完了リストに追加
    document.getElementById("complete-list").appendChild(li);

    // 押された親ノードを削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
  });

  // 削除タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された親ノードを削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // divタグの子要素に設定
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(div);
  console.log(li);
};

// ヨウソヲ削除
const deleteFromIncompleteList = (target) => {
  target.remove();
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
