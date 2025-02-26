import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LabButton from "../../components/LabButton";
import LabInput from "../../components/LabInput";
import LabTable from "../../components/LabTable";
import LabCheckBox from "../../components/CheckBox";
import PreviewDetails from "../TestResult/PreviewDetails";

const AuthTestResultScreen = ({ onClose }) => {
  const [selectedSection, setSelectedSection] = useState("Patient Details");
  const [selectedBold, setSelectedBold] = useState([]);
  const [selectedHide, setSelectedHide] = useState([]);
  const [fileName, setFileName] = useState("");
  const [auth, setAuth] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleBold = (row) => (
    <LabCheckBox
      checked={selectedBold.includes(row?.id)}
      onChange={() => {
        const newSelection = selectedBold.includes(row?.id)
          ? selectedBold.filter((id) => id !== row?.id)
          : [...selectedBold, row?.id];
        setSelectedBold(newSelection);
      }}
    />
  );

  const handleHide = (row) => (
    <LabCheckBox
      checked={selectedHide.includes(row?.id)}
      onChange={() => {
        const newSelection = selectedHide.includes(row?.id)
          ? selectedHide.filter((id) => id !== row?.id)
          : [...selectedHide, row?.id];
        setSelectedHide(newSelection);
      }}
    />
  );

  const renderDetails = (data) => (
    <Paper
      elevation={3}
      sx={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      {data === "Diagnosis" ? (
        <Box>
          <h6>Diagnosis</h6>
          <LabInput type="textarea" />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", color: "#333", fontWeight: "400" }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  );

  const uploadDoc = () => (
    <Paper
      elevation={3}
      sx={{
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      <Grid container spacing={2} alignItems="center" mb={2}>
        <Grid item xs={12} sm={6} md={3}>
          <LabInput
            label={"Document Type"}
            type="select"
            options={[
              { value: "lab", label: "Lab" },
              { value: "rad", label: "Radiology" },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} alignSelf={"self-end"}>
          <Button
            variant="outlined"
            component="label"
            sx={{
              color: "rgb(25, 131, 131)",
              borderColor: "rgb(25, 131, 131)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "4px 8px",
            }}
          >
            <span style={{ flexGrow: 1 }}>{fileName || "Choose File"}</span>
            {fileName && (
              <IconButton
                size="small"
                sx={{
                  marginLeft: "8px",
                  color: "rgb(25, 131, 131)",
                  padding: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setFileName("");
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </Grid>
        <Box className="btnAlign mb-0 ms-auto" alignSelf={"self-end"}>
          <LabButton label={"Upload"} />
          <LabButton label={"Close"} />
        </Box>
      </Grid>
    </Paper>
  );

  const columns = [
    { field: "hide", headerName: "Hide" },
    { field: "bold", headerName: "Bold" },
    { field: "testName", headerName: "Test Name" },
    { field: "result", headerName: "Result" },
    { field: "eqpResult", headerName: "EQP Result" },
    { field: "units", headerName: "Units" },
    { field: "normalRange", headerName: "Normal Range" },
  ];

  const rows = [
    {
      id: "1",
      testName: "WBC",
      result: "xxx",
      eqpResult: "xxx",
      units: "xxx",
      normalRange: "xxx",
    },
    {
      id: "2",
      testName: "RBC",
      result: "xxx",
      eqpResult: "xxx",
      units: "xxx",
      normalRange: "xxx",
    },
    {
      id: "3",
      testName: "Platelets",
      result: "xxx",
      eqpResult: "xxx",
      units: "xxx",
      normalRange: "xxx",
    },
  ];

  const patientData = [
    { label: "MRD Number", value: "DOC124563" },
    { label: "Patient Name", value: "John" },
    { label: "Age", value: "30" },
    { label: "Gender", value: "Male" },
    { label: "Lab Id No", value: "---" },
    { label: "Doctor", value: "Dr.Brett Clefford" },
    { label: "Insurar", value: "NEUTRON" },
    { label: "Sub Insurar", value: "QLM" },
    { label: "Speciality", value: "Cardiology" },
  ];

  const renderFormButtons = () => (
    <Box className="btnAlign" justifyContent={"center"} gap={"30px"}>
      <Box width={"300px"}>
        <LabInput
          label="Haematology"
          type="select"
          options={[
            { value: "Haematology", label: "Haematology" },
            { value: "Microbiology", label: "Microbiology" },
          ]}
        />
      </Box>
      <Box alignSelf="flex-end">
        <LabButton label="Update" colors="rgb(186, 137, 132)" />
      </Box>
      <Box alignSelf="flex-end">
        <LabButton label="Set as Abnormal" colors="rgb(132, 180, 162)" />
      </Box>
    </Box>
  );

  const renderActionButtons = () => (
    <Box>
      <Box className="my-3 w-50 mx-auto ">
        <LabInput label="Remarks" type="textarea" />
      </Box>
      <Box className="btnAlign" justifyContent={"center"} gap={"25px"}>
        <LabButton label="Save" colors="rgb(176, 230, 207)" textColor="black" />
        <LabButton
          label="Preview"
          colors="rgb(230, 230, 250)"
          textColor="black"
        />
        <LabButton
          label="Authenticate"
          colors="rgb(255, 218, 185)"
          textColor="black"
          onClick={() => setAuth(true)}
        />
      </Box>
      {auth && (
        <Dialog open={true} fullWidth onClose={() => setAuth(false)}>
          <DialogContent>
            <Box textAlign="center" mb={3}>
              {" "}
              Do you want to authenticate?
            </Box>
            <Box className="btnAlign">
              <LabButton label="YES" />
              <LabButton label="NO" colors="rgb(233, 106, 106)" />
            </Box>
          </DialogContent>
        </Dialog>
        // alert("Do you want to authenticate?")
      )}
    </Box>
  );

  const sections = ["Patient Details", "Diagnosis", "Scanned Documents"];

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "Patient Details":
        return renderDetails(patientData);
      case "Diagnosis":
        return renderDetails("Diagnosis");
      case "Scanned Documents":
        return uploadDoc();
      default:
        return null;
    }
  };
  return (
    <Dialog open={true} fullScreen>
      <DialogTitle>
        Test Results
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          {sections.map((section) => (
            <Button
              key={section}
              variant={selectedSection === section ? "contained" : "outlined"}
              onClick={() => setSelectedSection(section)}
              sx={{
                color: selectedSection === section ? "white" : "teal",
                borderColor: "teal",
                backgroundColor: selectedSection === section ? "teal" : "",
              }}
            >
              {section}
            </Button>
          ))}
        </Box>
        {renderSectionContent()}
        <Box>
          {renderFormButtons()}
          <Box mt={3}>
            <LabTable
              columns={columns}
              rows={rows}
              onBoldShow={handleBold}
              onHideShow={handleHide}
            />
          </Box>

          {renderActionButtons()}
        </Box>
        {showPreview && (
          <PreviewDetails onClose={() => setShowPreview(false)} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthTestResultScreen;
