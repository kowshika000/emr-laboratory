import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Components.css";
import HeaderTabs from "./components/HeaderTabs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DisplayLabOrder from "./Lab/LabOrderDashboard/DisplayLabOrder";
import DisplaySample from "./Lab/SampleCollection/DisplaySample";
import DisplaySubmitted from "./Lab/SubmittedSample/DisplaySubmitted";
import DisplayAccession from "./Lab/Accession/DisplayAccession";
import DisplayTestResult from "./Lab/TestResult/DisplayTestResult";
import DisplayAuthApproval from "./Lab/AuthApproval/DisplayAuthApproval";
import DisplayPrintReport from "./Lab/PrintReport/DisplayPrintReport";
import DisplayRejectSamples from "./Lab/RejectSamples/DisplayRejectSamples";
import DisplayTAT from "./Lab/TAT/DisplayTAT";
import DisplayConsumption from "./Lab/Consumption/DisplayConsumption";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <HeaderTabs />
        <Routes>
          <Route path="/" element={<Navigate to="/labOrder" />} />
          <Route path="/labOrder" element={<DisplayLabOrder />} />
          <Route path="/sampleCollection" element={<DisplaySample />} />
          <Route path="/submittedSamples" element={<DisplaySubmitted />} />
          <Route path="/accession" element={<DisplayAccession />} />
          <Route path="/testResult" element={<DisplayTestResult />} />
          <Route
            path="/authenticateApproval"
            element={<DisplayAuthApproval />}
          />
          <Route path="/printReport" element={<DisplayPrintReport />} />
          <Route path="/rejectedSamples" element={<DisplayRejectSamples />} />
          <Route path="/TAT" element={<DisplayTAT />} />
          <Route path="/consumption" element={<DisplayConsumption />} />
        </Routes>
      </BrowserRouter> */}
      <HeaderTabs/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("lab-app"));
root.render(<App />);

export default App;
