import React from "react";
import { motion } from "framer-motion";
import { 
  Printer, Download, ShieldCheck, HardDrive, 
  ChevronLeft, Share2, Info, Box, PenTool
} from "lucide-react";

// Animation Variants
const drawIn = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { 
    opacity: 1, 
    scaleY: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerItems = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function BlueprintInvoice() {
  const invoiceData = {
    id: "VST-9920-X102",
    date: "17 DEC 2025",
    client: "Project: Sector 7 Deployment",
    total: "₹9,263.00"
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#f8f9fa] min-h-screen pt-10 md:pt-24 pb-24 px-4 md:px-6 font-mono selection:bg-red-600 selection:text-white print:p-0 print:bg-white"
    >
      {/* STRICT PRINT OVERRIDE: 
          This style block ensures that everything except the #printable-invoice 
          is hidden when printing.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Hide everything in the body */
          body * {
            visibility: hidden;
          }
          /* Show the invoice container and its children */
          #printable-invoice, #printable-invoice * {
            visibility: visible;
          }
          /* Position the invoice at the very top of the printed page */
          #printable-invoice {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: 3px solid black !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
          /* Fix for background colors and images */
          * { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
          }
          @page {
            margin: 1cm;
          }
        }
      `}} />

      {/* TACTICAL HEADER ACTIONS - Explicitly hidden via print:hidden */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-wrap justify-between items-center gap-4 print:hidden">
        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
          <ChevronLeft size={14} /> Back to Manifest
        </button>
        <div className="flex gap-3">
          <button 
            onClick={handlePrint} 
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm"
          >
            <Printer size={14} /> Print Schematic
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">
            <Download size={14} /> Save Source
          </button>
        </div>
      </div>

      {/* BLUEPRINT CONTAINER - Targeted by ID for printing */}
      <motion.div 
        variants={drawIn}
        initial="hidden"
        animate="visible"
        id="printable-invoice"
        className="max-w-5xl mx-auto bg-white border-[3px] border-black shadow-[20px_20px_0px_rgba(0,0,0,0.05)] relative overflow-hidden print:shadow-none print:border-black"
      >
        {/* GRID OVERLAY */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none print:opacity-[0.03]" 
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        {/* HEADER SECTION */}
        <div className="border-b-[3px] border-black flex flex-col md:flex-row relative z-10">
          <div className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white shrink-0">
                <HardDrive size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-black">SENSE</h1>
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase leading-loose">
              Technical Procurement Division<br/>
              Industrial Hub-01, Southern Sector<br/>
              Auth. Registry: 9902-X-2025
            </p>
          </div>
          
          <div className="p-8 md:p-12 bg-black text-white md:w-80 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Doc Type</p>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Final Manifest</h2>
            </div>
            <div className="mt-8">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Doc Number</p>
              <p className="text-xl font-black italic">{invoiceData.id}</p>
            </div>
          </div>
        </div>

        {/* INFO STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b-[3px] border-black relative z-10 bg-white">
          <InfoBox label="Deployment Date" value={invoiceData.date} />
          <InfoBox label="Payment Terms" value="Auth: Instant" />
          <InfoBox label="Client ID" value="S7-PROJECT" />
          <InfoBox label="Tolerances" value="±0.001mm" />
        </div>

        {/* ITEM TABLE */}
        <div className="relative z-10 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-[3px] border-black bg-gray-50">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest">Spec Description</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest border-l-[3px] border-black w-20 md:w-24 text-center">Qty</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest border-l-[3px] border-black w-28 md:w-32 text-right">Unit Price</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest border-l-[3px] border-black w-32 md:w-40 text-right">Ext. Value</th>
              </tr>
            </thead>
            <motion.tbody 
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              <InvoiceRow name="HIGH-PERFORMANCE VENTILATED DISC" sku="VW-99021-PL" qty="01" price="4250.00" />
              <InvoiceRow name="CERAMIC BRAKE PADS (FRONT SET)" sku="VW-PAD-002" qty="02" price="1800.00" />
              <InvoiceRow name="LOGISTICS & HANDLING" sku="SVC-GRND-01" qty="01" price="250.00" />
              
              {/* FILLER ROWS FOR AESTHETIC */}
              {[1, 2].map((i) => (
                <tr key={i} className="border-b border-gray-100 h-16 opacity-30 print:opacity-10">
                  <td className="p-6 border-r-[3px] border-black text-[8px] italic text-gray-300 uppercase">...SECTION EMPTY</td>
                  <td className="border-r-[3px] border-black"></td>
                  <td className="border-r-[3px] border-black"></td>
                  <td></td>
                </tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* FOOTER TOTALS */}
        <div className="border-t-[3px] border-black flex flex-col md:flex-row relative z-10">
          <div className="p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex-1 bg-gray-50/50">
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <ShieldCheck size={14} className="text-red-600" /> Technical Guarantee
            </h3>
            <p className="text-[9px] text-gray-500 font-bold uppercase leading-relaxed max-w-sm">
              ALL COMPONENTS LISTED HAVE PASSED ISO-9001 STRESS TESTING. 24-MONTH PRECISION WARRANTY VOID IF SEAL IS BROKEN BY NON-CERTIFIED PERSONNEL.
            </p>
            
            {/* DIGITAL SIGNATURE */}
            <div className="mt-8 flex items-center gap-4">
               <motion.div 
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 2, delay: 1 }}
                 className="text-red-600 italic font-serif text-xl"
               >
                 <span className="text-[8px] font-mono text-gray-400 block uppercase not-italic mb-1">Authorization Signature</span>
                 Sense Systems Lead Engineer
               </motion.div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 md:w-80 space-y-4">
            <TotalLine label="Sub-Total" value="₹8,100.00" />
            <TotalLine label="Service GST (18%)" value="₹1,163.00" />
            <div className="pt-4 border-t-2 border-dashed border-black">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase text-red-600">Total Asset Value</span>
                <span className="text-3xl font-black tracking-tighter text-black">{invoiceData.total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BRAND BAR */}
        <div className="bg-black py-3 px-8 text-center">
            <p className="text-[8px] text-white/40 font-black uppercase tracking-[0.5em]">
              Sense • Engineering Integrity • 2025 Internal Doc
            </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper Components
function InfoBox({ label, value }) {
  return (
    <div className="p-4 md:p-6 border-r-[3px] last:border-r-0 border-black">
      <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[10px] md:text-[11px] font-black uppercase text-black">{value}</p>
    </div>
  );
}

function InvoiceRow({ name, sku, qty, price }) {
  const total = (parseFloat(price) * parseInt(qty)).toFixed(2);
  return (
    <motion.tr variants={staggerItems} className="border-b-[3px] border-black group">
      <td className="p-4 md:p-6 border-r-[3px] border-black">
        <p className="text-[11px] md:text-xs font-black uppercase tracking-tight text-black group-hover:text-red-600 transition-colors">{name}</p>
        <p className="text-[8px] font-bold text-gray-400 mt-1 uppercase">Part ID: {sku}</p>
      </td>
      <td className="p-4 md:p-6 border-r-[3px] border-black text-center text-xs font-black">{qty}</td>
      <td className="p-4 md:p-6 border-r-[3px] border-black text-right text-xs font-bold text-gray-500 italic">₹{price}</td>
      <td className="p-4 md:p-6 text-right text-sm font-black tracking-tighter italic text-black">₹{total}</td>
    </motion.tr>
  );
}

function TotalLine({ label, value }) {
  return (
    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
      <span className="text-gray-400">{label}</span>
      <span className="text-black">{value}</span>
    </div>
  );
}