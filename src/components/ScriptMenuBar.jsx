import React from 'react';

function ScriptMenuBar() {
  const menuBtnChange = () => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  
  const handleBtnClick = () => {
    const sidebar = document.querySelector(".sidebar");
    menuBtnChange();
    sidebar.classList.toggle("open");
  }

  return (
    <script>
      {
        `
          let closeBtn = document.querySelector("#btn");
          closeBtn.addEventListener("click", ${handleBtnClick});
        `
      }
    </script>
  )
}

export default ScriptMenuBar;
