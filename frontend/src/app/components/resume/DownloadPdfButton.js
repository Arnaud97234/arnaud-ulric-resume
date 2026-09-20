"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import ExperiencePDF from "./Pdf";
import { Button } from "@mui/material";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadResumeButton({ experienceData, profileData }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const blob = await pdf(
        <ExperiencePDF
          experienceData={experienceData}
          profileData={profileData}
        />,
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "arnaud-ulric-QaEngineer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      variant="contained"
      style={{ alignSelf: "center", width: 100, marginTop: 30 }}
    >
      {loading ? (
        "Generating PDF..."
      ) : (
        <>
          <FontAwesomeIcon icon={faCloudArrowDown} style={{ marginRight: 6 }} />
          pdf
        </>
      )}
    </Button>
  );
}
