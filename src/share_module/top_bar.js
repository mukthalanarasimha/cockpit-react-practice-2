export const TopBar = () => {
  return (
    <nav className="static top-0 w-full flex flex-wrap items-center justify-between py-3 bg-secondary-950 px-16 h-20 text-secondary-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between">
        <div className="flex-grow items-center">
          <p>Logo</p>
        </div>
        <div className="flex items-center">
          <div className="dropdown relative">
            <a
              class="dropdown-toggle flex items-center hidden-arrow"
              id="dropdownMenuButton2"
              role="button"
            >
              <div class="flex justify-center items-center 4xl:!h-20 xl:h-10 4xl:!w-20 xl:w-10 rounded-full text-white bg-[#A929E5]">
                <p class="4xl:!text-4xl xl:text-xl">{"N"}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
