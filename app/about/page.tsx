'use client'
import { generateAndDownloadPDF } from '../lib/utils'

export default function PDFGeneratorPage() {
  return (
    <div>
      <input type="text" id="input1" placeholder="Input 1" />
      <input type="text" id="input2" placeholder="Input 2" />
      <input type="text" id="input3" placeholder="Input 3" />
      <button onClick={generateAndDownloadPDF}>
        Generate and Download PDF
      </button>
    </div>
  )
}
