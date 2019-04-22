var node = document.createElement("div");
node.className = "header_installsteam_btn header_installsteam_btn_green"
var link = document.createElement("a");
link.className = "header_installsteam_btn_content";
link.style = "background-color: #387097; background-position: 10px 2px; background-image: url( '/public/images/v6/icon_platform_win.png?v=3' );";
link.innerHTML = "Open In Steam";
var id = window.location.pathname.split("/")[2];
link.href = "steam://advertise/" + id;
node.appendChild(link);

document.getElementById("global_action_menu").prepend(node);
