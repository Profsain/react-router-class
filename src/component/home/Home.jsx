import { SideBar } from "../shared/SideBar";

const Home = () => {
  return (
    <>
      <div className="container">
        <div >
          <h1 className="my-4">Welcome to React Router</h1>
          <h2>This is Home us page</h2>
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default Home;
