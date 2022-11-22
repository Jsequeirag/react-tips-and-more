
import BarChart from "./components/Charts/BarChart";
import Pie from "./components/Charts/PieChart"
import scss from './style.module.scss';
function App() {
  return (
    <div className={scss.app}>
      <h1 style={{ textAlign: "center" }}>Charts with ChartJS</h1>
      <div className={scss.main_container}>
        <div className={scss.chart_container}>
          <BarChart horizontal={true} title={"Title"} subtitle="Subtitle" labels={["Solicitudes"]} data={[1, 2]} labelsYRight={["No aprobadas", "Aprobadas"]} colors={["orange", "green"]} />
        </div>
        <div className={scss.chart_container}>
          <BarChart horizontal={false} title={"Title"} subtitle="Subtitle" labels={["Solicitudes"]} data={[1, 2]} labelsYRight={["No aprobadas", "Aprobadas"]} colors={["orange", "green"]} />
        </div>
        <div className={scss.chart_container}>
          <Pie Doughnut={false} chartData={[1, 2, 3, 4, 5]} labels={["UNO", "DOS", "TRES", "CUATRO", "CINCO"]} title={"Title"} subtitle={"Subtitle"} />
        </div>
        <div className={scss.chart_container}>
          <Pie Doughnut={true} chartData={[1, 2, 3, 4, 5]} labels={["UNO", "DOS", "TRES", "CUATRO", "CINCO"]} title={"Title"} subtitle={"Subtitle"} />
        </div>
      </div>
    </div >
  );
}

export default App;
