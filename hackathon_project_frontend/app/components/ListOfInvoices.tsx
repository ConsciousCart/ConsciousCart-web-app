import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Image } from "lucide-react";

interface Invoice {
  dateUploaded: string;
  invoice: string; // Filename, could be a PDF or an image
}

interface ListOfInvoicesProps {
  invoices: Invoice[];
}

const ListOfInvoices: React.FC<ListOfInvoicesProps> = ({ invoices }) => {
  if (invoices.length === 0) {
    return (
      <div className="text-white h-screen flex items-center justify-center">
        <p>No invoices uploaded yet.</p>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h2 className="text-lg font-bold mb-4">Your Invoices</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Filename</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => {
            const isImage = invoice.invoice.toLowerCase().endsWith(".jpg") || 
                            invoice.invoice.toLowerCase().endsWith(".png") ||
                            invoice.invoice.toLowerCase().endsWith(".jpeg");
            const isPDF = invoice.invoice.toLowerCase().endsWith(".pdf");
            
            return (
              <TableRow key={index}>
                <TableCell>
                  {isImage ? (
                    <Image className="w-4 h-4" />
                  ) : isPDF ? (
                    <FileText className="w-4 h-4" />
                  ) : (
                    <FileText className="w-4 h-4" />
                  )}
                  {isImage ? "Image" : isPDF ? "PDF" : "Unknown"}
                </TableCell>
                <TableCell>{invoice.dateUploaded}</TableCell>
                <TableCell>{invoice.invoice}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListOfInvoices;