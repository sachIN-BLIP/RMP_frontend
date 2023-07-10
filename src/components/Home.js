import React from 'react';
import logo from "./images/undraw_reviews_lp8w.svg";
// import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    // <>
    //   <div
    //   style={{
    //     backgroundImage: "url(https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp)",
    //     backgroundSize: "cover",
    //     height: "100vh",

    //   }}
    // >
    //   <section className="intro" style={{margin:0,padding:0}}>

    //       <div className="mask d-flex align-items-center h-100">
    //         <div className="container">
    //           <div className="card mask-custom p-4">
    //             <div className="card-body">
    //               <p className="h1 font-weight-bold mb-4 text-white">Find Your Professor</p>
    //               <div className="row justify-content-center">
    //                 <div className="col-md-6 mb-3 mb-md-0">
    //                   <div  className="form-outline form-white">
    //                     <input type="text" id="form1" className="form-control form-control-lg" placeholder="Professor's Name" autoComplete='off'/>
    //                     {/* <label className="form-label" htmlfor="form1"><b>Professor's Name</b></label> */}
    //                   </div>
    //                 </div>
    //                 <div className="col-md-4 mb-3 mb-md-0">
    //                   <div className="form-outline form-white">
    //                   <input type="text" id="form1" className="form-control form-control-lg" placeholder="College's Name" autoComplete='off'/>
    //                     {/* <label className="form-label" htmlfor="form2"><b>College's Name</b></label> */}
    //                   </div>
    //                 </div>
    //                 <div className="col-md-2">
    //                  <NavLink to='/searchByProfResult'><input className="btn btn-info btn-block btn-lg" type="submit" value="Search"  /></NavLink> 
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //   </section>

    //   </div>
    // </>
    <div
      className="mainbody flex flex-col w-[100%] items-center  md:flex-row md:mt-[4rem]  gap-15 justify-between px-20 mx-20"
    >

      <img src={logo} alt="" className="image max-w-[55vw] mt-[2rem] md:max-w-[540px]" />


      <div className="searchtab bg-neutral-100  p-10 rounded-xl mt-[2rem] min-w-[60vw] mb-8 md:min-w-[45vw]" style={{ marginLeft: "0px" }}>
        <div className="text-gray-900  text-2xl sm:text-3xl md:text-4xl  font-medium leading-10 text-center mb-8">
          RATE MY PROF LOGO
        </div>

        <div className="form">
          <label
            htmlFor="profsearch"
            className="block text-gray-900 text-opacity-70 text-[16px] font-normal leading-7"
          >
            Find a Professor
          </label>
          <input
            type="text"
            id="profsearch"
            placeholder="Prof's Name"
            className="rounded-lg w-full px-4 text-gray-900 text-[18px] font-normal leading-loose mb-8"
          />
        </div>
        <div className="btns flex-column text-[16px] font-semibold leading-normal">
          <div>

            {/* <NavLink to="/searchBySchoolResult"> */}
            <NavLink to="/searchByProfResult">

              <button className="s_prof mb-8 block w-full text-white bg-gray-900 rounded-[38px] h-12">
                Search Professor
              </button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/searchBySchoolResult">
              <button className="s_school mb-8 bg-white rounded-[38px] h-12 w-full">
                Search by School
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
