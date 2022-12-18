import React from "react";

const Main = () => {
  return (
    <>
      <section className="w-full h-screen bg-slate-400 flex flex-col">
        <div className="w-full h-1/6 bg-blue-900 flex justify-evenly ">
          <div className="w-1/3 h-full flex justify-center items-center font-bold text-3xl  text-white bg-blue-900 ">
            <i class="fa-solid fa-plane"></i> LOGO
          </div>
          <div className="w-2/3 h-full flex justify-evenly text-white text-2xl items-center cursor-pointer">
            <span>Home</span>
            <span>Courses</span>
            <span>Aboutus</span>
            <span>Contactus</span>
          </div>
        </div>
        <div className="w-full h-5/6 flex bg-white">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1569629743834-3c35e8e8929c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80"
            alt=""
          />
        </div>
      </section>
      <section className="w-full h-screen flex flex-col">
        <div className="w-full h-1/2  flex justify-center items-center bg-slate-900">
          <div className="w-1/4 h-full bg-neutral-600 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1528841226041-b871c27abc2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
          <div className="w-3/4 h-full flex bg-blue-600 justify-evenly flex-col pl-8">
            <h1 className="text-4xl font-bold">ABOUT US</h1>
            <p className="text-xl text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Ratione sequi libero omnis temporibus ducimus provident.{" "}
            </p>
            <button className="h-8 w-32 bg-black text-white rounded-md">
              JOIN KNOW
            </button>
          </div>
        </div>
        <div className="w-full h-1/2 flex justify-center items-center">
          <div className="w-5/6 h-full bg-white flex justify-evenly flex-col ">
            <h2 className="text-3xl text-black font-bold ">
              Ready to elevate your training experience
            </h2>
            <p className="text-xl text-black text-justify pr-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              eos excepturi fuga vero dolorem hic veritatis optio, quibusdam
              molestias eaque, asperiores ullam tempora nesciunt. Rerum
              exercitationem aperiam temporibus explicabo tenetur. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolores eos excepturi
              fuga vero dolorem hic veritatis optio, quibusdam molestias eaque,
              asperiores ullam tempora nesciunt. Rerum exercitationem aperiam
              temporibus explicabo tenetur?
            </p>
          </div>
          <div className="w-96 h-full bg-blue-900 flex justify-evenly items-center relative">
            <span className="w-40 h-40  rounded-full  absolute top-0  right-0 flex ">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1517190525944-4edce215bc4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
                alt=""
              />
            </span>
            <span className="w-52 h-52  rounded-full flex absolute left-0">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1615561776627-449e68725b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </span>
            <span className="w-40 h-40  rounded-full flex absolute right-3 bottom-0 ">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1465694930354-a394444f1294?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </span>
          </div>
        </div>
      </section>
      <section className="w-full h-134 flex justify-center items-center bg-cover bg-center md:bg-opacity-40 bg-no-repeat bg-[url(https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80)]">
        <div className="w-2/6 h-132 flex flex-col  items-center bg-blue-900">
          <span className="w-full h-20  flex  flex-col justify-center items-center">
            <h3 className="text-3xl text-white font-bold underline">
              REGISTRATION FORM
            </h3>
            <p className="text-md w-5/6 items-center flex justify-center text-slate-300">
              subscribe now to receiving exclusive information and updates form
            </p>
          </span>
          <span className="flex justify-between items-end w-10/12 h-20   ">
            <input
              className="w-0.4 h-2/4 rounded-xl"
              type="text"
              placeholder="First name..."
            />
            <input
              className="w-0.4 h-2/4 rounded-xl"
              type="text"
              placeholder="second name..."
            />
          </span>
          <span className="flex justify-evenly flex-col items-center w-5/6 h-64 ">
            <input
              className="w-full h-1/6 flex rounded-lg"
              type="text"
              placeholder="E-mail"
            />
            <input
              className="w-full h-1/6 flex rounded-lg"
              type="text"
              placeholder="Location"
            />
            <input
              className="w-full h-1/6 flex rounded-lg"
              type="text"
              placeholder="Qualification"
            />
          </span>
          <span className="w-5/6 h-24 flex  justify-center">
            <input
              className="w-full h-full rounded-xl"
              type="text"
              placeholder="About yourself"
            />
          </span>
          <span className="flex w-5/6 h-14  items-center  justify-between ">
            <input
              className="w-1/5 h-1/2 flex items-center justify-center"
              type="checkbox"
            />
            <p className="text-white text-sm flex w-4/5 items-center justify-start h-1/2">
              By clicking here you will agree to all the terms and conditions
            </p>
          </span>
          <button className="bg-black text-white w-24 h-22 font-bold">
            SUBMIT
          </button>
        </div>
      </section>
      <section className="w-full h-screen flex bg-slate-300 justify-evenly relative  flex-col  ">
        <div className="w-4/6 h-20  bg-white ">
          <h4 className=" pr-20 drop-shadow-xl   pt-3  text-blue-900 flex justify-end text-center font-bold text-5xl">
            SERVICES
          </h4>
        </div>
        <span className="w-64 h-2/3  bg-blue-500 opacity-60  absolute top-0  right-0"></span>
        <div className="flex z-0 items-center h-2/3 w-full  justify-evenly ">
          <span className="w-64 h-4/5 rounded-xl bg-cover flex cursor-pointer  transform transition duration-500 hover:scale-110  bg-no-repeat bg-center  bg-[url('https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')]  ">
            <h3 className="absolute bottom-10 text-gray-50 underline  text-3xl font-bold">
              Discovermore
            </h3>
            <p className="absolute bottom-2 text-white text-2xl font-medium">
              Aviation Courses
            </p>
          </span>
          <span className="w-64 h-4/5 rounded-xl bg-cover flex cursor-pointer  transform transition duration-500 hover:scale-110  bg-no-repeat bg-center  bg-[url('https://images.unsplash.com/photo-1449586919022-f3dfddc48a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]  ">
            <h3 className="absolute bottom-10 text-gray-50 underline  text-3xl font-bold">
              Discovermore
            </h3>
            <p className="absolute bottom-2 text-white text-2xl font-medium">
              BBA in logistics
            </p>
          </span>
          <span className="w-64 h-4/5 rounded-xl bg-cover flex cursor-pointer  transform transition duration-500 hover:scale-110  bg-no-repeat bg-center  bg-white bg-[url('https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
            <h3 className="absolute bottom-10 text-gray-50 underline  text-3xl font-bold">
              Discovermore
            </h3>
            <p className="absolute bottom-2 text-white text-2xl font-medium">
              Airport Operations
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default Main;
