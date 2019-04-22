var node = document.createElement("div");
node.className = "header_installsteam_btn header_installsteam_btn_green"
var link = document.createElement("a");
link.className = "header_installsteam_btn_content";
link.style = "background-color: #387097; background-position: 10px 2px; background-image: url( 'https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_win.png?v=3' );";
link.innerHTML = "Open In Steam";
link.href = "steam://openurl/" + window.location.href;
node.appendChild(link);

document.getElementById("global_action_menu").prepend(node);
