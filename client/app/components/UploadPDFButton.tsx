
import { useUser } from "@clerk/nextjs";
import React, { useRef, ChangeEvent, useState } from "react";

interface PdfUploadButtonProps {
  onUploadSuccess: (invoiceName: string) => void;
  onUploadError: (error: string) => void;
}

const UploadPdfButton: React.FC<PdfUploadButtonProps> = ({ onUploadSuccess, onUploadError }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { user } = useUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;
  
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedPdf(file);
      console.log("PDF file selected:", file.name);
      
      const now = new Date();
      const timestamp = now.toISOString().replace(/[:.]/g, "-");
      const newFileName = `${timestamp}_${userEmail}_${file.name}`;
      const newFile = new File([file], newFileName, { type: file.type });

      const formData = new FormData();
      formData.append("file", newFile);

      try {
        const response = await fetch("https://consciouscart-backend-production.up.railway.app/api/upload-file", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          onUploadSuccess(newFileName);
          setSelectedPdf(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        } else {
          const errorData = await response.json();
          onUploadError(`Failed to upload PDF: ${errorData.message}`);
        }
      } catch (error) {
        const errorMessage = (error as Error).message || "An unknown error occurred.";
        onUploadError(`Error: ${errorMessage}`);
      }
    } else {
      alert("Please select a PDF file.");
      setSelectedPdf(null);
    }
  };

  return (
    <>
      <button
        className="w-full justify-center font-light py-4 flex items-center space-x-3 bg-[#2B272D] text-white rounded-md mb-4"
        onClick={handleClick}
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.25 2.625C13.5108 2.62303 12.7785 2.76756 12.0955 3.05025C11.4124 3.33295 10.7922 3.74819 10.2705 4.272L3.37804 11.166C3.16659 11.3771 3.04765 11.6634 3.04736 11.9622C3.04708 12.2609 3.16549 12.5476 3.37653 12.759C3.58758 12.9704 3.87398 13.0894 4.17272 13.0897C4.47147 13.09 4.75809 12.9716 4.96953 12.7605L11.865 5.8635C12.5065 5.27379 13.351 4.95475 14.2222 4.97305C15.0933 4.99135 15.9237 5.34556 16.5398 5.9617C17.156 6.57783 17.5102 7.40821 17.5285 8.27937C17.5468 9.15052 17.2278 9.99504 16.638 10.6365L8.68353 18.591C8.47027 18.7897 8.1882 18.8979 7.89675 18.8928C7.6053 18.8876 7.32722 18.7696 7.1211 18.5634C6.91498 18.3573 6.79691 18.0792 6.79177 17.7878C6.78663 17.4963 6.89481 17.2143 7.09353 17.001L15.048 9.0465C15.2595 8.83526 15.3783 8.54867 15.3785 8.24979C15.3786 7.9509 15.26 7.6642 15.0488 7.45275C14.8375 7.24131 14.551 7.12244 14.2521 7.1223C13.9532 7.12216 13.6665 7.24076 13.455 7.452L5.49903 15.4095C4.90932 16.051 4.59028 16.8955 4.60858 17.7666C4.62688 18.6378 4.98109 19.4682 5.59723 20.0843C6.21336 20.7004 7.04374 21.0547 7.9149 21.073C8.78605 21.0913 9.63057 20.7722 10.272 20.1825L18.2265 12.228C18.7504 11.7067 19.1659 11.0867 19.4488 10.4039C19.7318 9.72116 19.8766 8.98909 19.875 8.25C19.8734 6.75865 19.2803 5.32883 18.2258 4.27428C17.1712 3.21974 15.7414 2.62659 14.25 2.625Z"
            fill="white"
          />
        </svg>
        <span>Upload PDF</span>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="application/pdf"
        style={{ display: "none" }}
      />
      {selectedPdf && <p>Selected PDF: {selectedPdf.name}</p>}
    </>
  );
};

export default UploadPdfButton;