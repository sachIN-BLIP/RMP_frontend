import {React,useState} from "react";
import editbtn from "./icons/editbtn.svg";

export default function UserProfile() {
  let userTabs = ["Profile", "Account settings", "Ratings", "Saved Professors"];
  let firstName = "John";
  let lastName = "Doe";
  let school = "University of California, Berkeley";
  let year = "2025";
  let email="jhondoe@123@gmail.com";
  let password="********";

  let Profile = {
    "First Name": firstName,
    "Last Name": lastName,
    School: school,
    "Expected Year of Graduation": year,
  };
  let AccountSettings = {"Email":email,"Password":password}
  let Ratings= {}
  let SavedProfessors= {}
  let tabsPair={"Profile":Profile,"Account settings":AccountSettings,"Ratings":Ratings,"Saved Professors":SavedProfessors}
  const [currenTab, setcurrenTab] = useState("Profile")
  return (
    <div className="flex flex-col  w-[93%] mx-auto h-fit mb-20">
      <div className="top text-[3.25rem] font-medium  w-full my-8 ">
        Hey, USER
      </div>
      <div className="bg-neutral-100 w-full h-fit rounded-xl p-10  sm:text-gray-900  text-sm md:text-xl flex flex-col gap-y-10 font-semibold pb-20">
        <div className="">
          <div className="flex justify-evenly text-left">
          {userTabs.map((tab, index) => {
            return (<>
              <p className="w-full cursor-pointer relative pl-4" key={index} onClick={()=>{setcurrenTab(tab);console.log(currenTab)}}>
                {tab}
                {tab===currenTab? (<div className="bg-black h-[2px] absolute bottom-[-2] w-1/2"></div>):(<div className="bg-black h-[1px] absolute bottom-[-2] w-full"></div>)}
                <div className="bg-black h-[1px] absolute bottom-[-2] w-full"></div>
              </p></>

            )
          })}
          </div>
          {/* <div className="bg-black w-full h-[0.5px] mt-1"></div> */}
        </div>
        <div className="ml-auto px-10 flex gap-2 items-center">
          <img
            src={editbtn}
            alt=""
            srcset=""
            className="inline h-7 align-middle"
          />{" "}
          Edit
        </div>
        <div className="flex flex-col justify-center mx-auto w-full
         md:w-3/4 gap-y-16">
          
        
          {Object.keys(tabsPair[currenTab]).map((param, index) => {
            return (
              <div className="flex w-full md:w-[80%] " key={index}>
                <span className=" flex flex-wrap mr-auto ">{param}:</span>
                <span className=" w-[70%] md:w-[40%] text-center md:text-left">{tabsPair[currenTab][param]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
