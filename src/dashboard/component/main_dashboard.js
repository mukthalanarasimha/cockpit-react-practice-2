import { Btn } from "../../share_module/button";
import plusIcons from "../../images/plus-icon.svg";
import crossIcon from "../../images/cross-icon.svg";
import { IconBtn } from "../../share_module/icon_btn";
import { Maincard } from "../../share_module/main-card";
import { useState } from "react";
export const MainDashboard = () => {
  const [openTrouser, setOpenTrouser] = useState(false);

  const buttonProperties = {
    name: "Add",
    type: "submit",
    class:
      "cursor-pointer w-1/2 flex items-center  justify-center gap-4 h-10 rounded-md  bg-primary-600 text-white hover:shadow-lg focus:bg-primary-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800  active:shadow-lg transition duration-150 ease-in-out",
    icon: plusIcons,
  };

  const customerdata = [
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
    {
      name: "Narasimha",
      age: "23",
      designation: "UI",
    },
  ];

  const onClick = (el) => {
    console.log("narasimha");
    setOpenTrouser(true);
    let bottomDrawserEl = document.querySelector("#offcanvasBottom");
    bottomDrawserEl?.classList.add("open-drawer");
    console.log(bottomDrawserEl);
  };
  const closeDrawers = () => {
    setOpenTrouser(false);
    let bottomDrawserEl = document.querySelector("#offcanvasBottom");
    bottomDrawserEl?.classList.add("close-drawer");
  };

  return (
    <div>
      <div className="flex gap-6 p-10">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-white font-bold  text-2xl">Yuvraj Singh</h1>
            <div className="flex gap-4">
              <input type="text" className="inputs" placeholder="Search" />
              <IconBtn
                name={buttonProperties.name}
                type={buttonProperties.type}
                class={buttonProperties.class}
                icon={buttonProperties.icon}
              />
            </div>
          </div>
          <table className="border border-blue-400 rounded-md text-white">
            <thead className="bg-blue-600 h-10">
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
            </thead>
            <tbody>
              {customerdata.map((el) => {
                return (
                  <tr onClick={onClick}>
                    <td className="text-center p-3">{el.name}</td>
                    <td className="text-center p-3">{el.age}</td>
                    <td className="text-center p-3">{el.designation}</td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-5 w-1/2 border border-blue-400 rounded-md p-5">
          <h1 className="text-white font-bold  text-2xl">Student</h1>
          <div>
            <Maincard />
            <Maincard />
          </div>
        </div>
      </div>

      {openTrouser ? (
        <div
          id="offcanvasBottom"
          className="translate-y-full main-bg  z-[99999] fixed bottom-0 flex-col max-w-full bg-cover shadow-sm outline-none transition duration-300 ease-in-out text-cockpit_secondary-700 left-0 right-0 border-none h-full max-h-full "
        >
          <div className="flex justify-end items-center">
            <img src={crossIcon} alt="cross icon" onClick={closeDrawers} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
