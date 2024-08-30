import { jsPDF } from 'jspdf';

export function generateAndDownloadPDF(formData: Record<string, string>) {
  const doc = new jsPDF();
  
  Object.entries(formData).forEach(([key, value], index) => {
    doc.text(`${key}: ${value}`, 10, 10 + (index * 10));
  });

  doc.save('generated.pdf');
}