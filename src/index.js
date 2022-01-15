import "./styles.css";

const onClickAdd = () => {
  // テキストの値をしょきか
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

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
    alert("完了");
  });

  // 削除タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // divタグの子要素に設定
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(div);
  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
