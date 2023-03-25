function Navigation() {
  return (
    <div
      id="Nav"
      class="p-8 md:p-4 lg:p-0 w-full md:w-auto max-w-md h-full bg-opacity-80 bg-white border-2 border-white backdrop-blur-lg rounded-lg flex flex-col justify-between"
    >
      <div id="userAvatar">
        {/* <img/>  */}
        <div id="userText">
          <h2 class="text-black">Miguel</h2>
          <p>The Money</p>
        </div>
      </div>
      <ul id="menu-items">{/**menu items here */}</ul>
    </div>
  );
}

export default Navigation;
