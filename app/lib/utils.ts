import { jsPDF } from 'jspdf';

export function generateAndDownloadPDF() {
  // Collect data from inputs
  const input1 = (document.getElementById('input1') as HTMLInputElement)?.value || '';
  const input2 = (document.getElementById('input2') as HTMLInputElement)?.value || '';
  const input3 = (document.getElementById('input3') as HTMLInputElement)?.value || '';

  // Create a new PDF document
  const doc = new jsPDF();

  // Add content to the PDF
  doc.text(`Input 1: ${input1}`, 10, 10);
  doc.text(`Input 2: ${input2}`, 10, 20);
  doc.text(`Input 3: ${input3}`, 10, 30);

  // Generate and download the PDF
  doc.save('generated.pdf');
}

