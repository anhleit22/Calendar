import Taskar from "./Components/Taskar";
import CalendarBig from "./Components/CalendarBig";
function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#E4F6ED] px-[15vh] pt-[2vh] overflow-hidden">
      <div className="flex">
        <div className="w-1/3 mr-[2vh]">
          <Taskar />
        </div>
        <div className="w-2/3">
          <CalendarBig />
        </div>
      </div>
    </div>
  );
}

export default App;
