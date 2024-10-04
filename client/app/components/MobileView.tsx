import React, { useState, useEffect } from "react";
import AnalysisScreen from "./AnalysisScreen";
import UploadPDFButton from "./UploadPDFButton";
import SyncEmailButton from "./SyncEmailButton";
import InvoiceScanner from "./InvoiceScanner";
import ProfileSection from "./ProfileScreen";
import ListOfInvoices from "./ListOfInvoices";
import InvoicesAnalysisScreen from "./InvoicesAnalysisScreen";
import MobileMenu from "./MobileMenu";

interface MobileViewProps {
  healthProfile: { [key: string]: boolean };
}
interface Invoice {
  dateUploaded: string;
  invoice: string; // Filename, could be a PDF or an image
}

const MobileView: React.FC<MobileViewProps> = () => {
  const [activeTab, setActiveTab] = useState<
    "Scan" | "Invoices" | "Invoice analysis" | "Analysis" | "Profile"
  >("Scan");
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    // Load invoices from localStorage on component mount
    const storedInvoices = localStorage.getItem("invoices");
    if (storedInvoices) {
      setInvoices(JSON.parse(storedInvoices));
    }
  }, []);

  useEffect(() => {
    // Save invoices to localStorage whenever it changes
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleUploadSuccess = (invoiceName: string) => {
    const newInvoice: Invoice = {
      dateUploaded: new Date().toLocaleDateString(),
      invoice: invoiceName,
    };
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
    setUploadMessage("File uploaded successfully!");
  };

  const handleUploadError = (error: string) => {
    setUploadMessage(`Failed to upload file: ${error}`);
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileSection />;
      case "Analysis":
        return <AnalysisScreen />;
      case "Invoices":
        return <ListOfInvoices invoices={invoices} />;
      case "Invoice analysis":
        return <InvoicesAnalysisScreen />;
      default:
        return (
          <div className="flex my-auto lg:my-0 flex-col items-center justify-center p-4 w-full">
            <InvoiceScanner
              onUploadSuccess={handleUploadSuccess}
              onUploadError={handleUploadError}
            />
            {uploadMessage && (
              <div
                className={`mt-4 p-2 rounded ${
                  uploadMessage.includes("Failed")
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {uploadMessage}
              </div>
            )}
            <div className="flex items-center justify-center my-6 w-full">
              <div className="border-t border-2 w-[120px] border-gray-900 flex-grow mr-2"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="border-t border-2 w-[120px] border-gray-900 flex-grow ml-2"></div>
            </div>

            <div className="w-full">
              <UploadPDFButton
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
              />
              <SyncEmailButton />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex bg-black flex-col px-[16px] w-screen lg:max-w-xs h-screen lg:h-full lg:rounded-md">
      <div className="overflow-auto grow py-[40px]">
        {renderActiveTabContent()}
      </div>
      <MobileMenu initialActiveTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default MobileView;
