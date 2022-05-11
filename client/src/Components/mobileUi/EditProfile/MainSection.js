import { React, useState } from "react";
import editProfile from "../../../Assets/svg/MobileUi/editProfile.svg";
import { useSelector, useDispatch } from "react-redux";

export default function MainSection() {
  const userData = useSelector((state) => state.data.database.user);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  return (
    <section className="mo:hidden w-full px-6 py-5 overflow-auto">
      <section className="w-[70%] flex ">
        <div className="w-[30%]">
          <img src={editProfile} className="w-[12vw]" />
        </div>
        <div className="w-[60%]">
          <p>{userData.username}</p>
          <p className="text-[3.5vw] text-[blue]">change profile photo</p>
        </div>
      </section>
      <section className="w-full my-5">
        <div className="my-5">
          <p>Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="change your name"
            className="bg-[#ffffffb0] mt-3 w-[80%] rounded-[4px] px-5 text-[4vw] py-2"
          />
        </div>
        <div className="my-5">
          <p>username</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="change your username"
            className="bg-[#ffffffb0] mt-3 w-[80%] rounded-[4px] px-5 text-[4vw] py-2"
          />
        </div>{" "}
        <div className="">
          <p>bio</p>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="change your bio"
            className="bg-[#ffffffb0] mt-3 w-[80%] resize-none rounded-[4px] px-5 text-[4vw] py-2"
          />
        </div>
        <button className="px-7 py-3 bg-[#0000ff20] mt-7 rounded-[4px]">submit</button>
      </section>
    </section>
  );
}
