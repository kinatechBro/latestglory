import "./Spinner.css";
function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lds-dual-ring "></div>
    </div>
  );
}

export default Spinner;
