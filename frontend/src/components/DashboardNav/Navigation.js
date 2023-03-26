import { useGlobalContext } from "../../context/globalContext";
import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menu-items";
import { useNavigate } from "react-router-dom";
function Navigation() {
  const { user } = useGlobalContext();
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  return (
    <div>
      <div
        id="Nav"
        class="p-8 md:p-4 lg:p-0 w-full md:w-auto max-w-md h-full bg-opacity-80 bg-white border-2 border-white backdrop-blur-lg rounded-lg flex flex-col justify-between"
      >
        <div id="userAvatar" class="h-100 flex items-center gap-4">
          {/* <img/>  */}
          <div id="userText">
            <h2 class="text-black">{user?.email}</h2>
            <p>The Money</p>
          </div>
        </div>
        <ul id="menu-items" class="flex-1 flex flex-col">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                class="grid grid-cols-2  my-3 font-medium cursor-pointer transition-all duration-400 ease-in-out text-blue-700 pl-4 relative"
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div id="bottom-nav" onClick={handleLogout}>
          {signout} Sign Out
        </div>
      </div>
    </div>
  );
}

export default Navigation;
