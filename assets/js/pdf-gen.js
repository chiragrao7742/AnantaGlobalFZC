/**
 * ANANTA GLOBAL F.Z.C. - Corporate Profile PDF Generator
 * Powered by jsPDF
 */

function downloadCorporateProfile() {
  const { jsPDF } = window.jspdf;
  // Create PDF document (A4 size: 210mm x 297mm)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Colors
  const colors = {
    primary: [11, 60, 109],     // #0B3C6D (Navy)
    secondary: [212, 175, 55],  // #D4AF37 (Gold)
    dark: [7, 21, 36],          // Deep Navy
    textDark: [30, 41, 59],     // Slate 800
    textMuted: [100, 116, 139], // Slate 500
    lightBg: [244, 247, 250],   // Light Grayish Blue
    white: [255, 255, 255]
  };

  // Helper to set fill color
  const setFill = (rgb) => doc.setFillColor(rgb[0], rgb[1], rgb[2]);
  // Helper to set text color
  const setText = (rgb) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  // Helper to set draw color
  const setDraw = (rgb) => doc.setDrawColor(rgb[0], rgb[1], rgb[2]);

  // Helper to add header/footer on content pages
  const addPageDecorations = (pageNumber, totalPages) => {
    // Top border accent (Gold line)
    setFill(colors.secondary);
    doc.rect(0, 0, 210, 3, 'F');

    // Header Logo mockup
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    setText(colors.primary);
    doc.text('ANANTA GLOBAL F.Z.C.', 15, 12);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setText(colors.textMuted);
    doc.text('Global Scrap Import & Export', 15, 16);

    // Header line
    setDraw(colors.lightBg);
    doc.setLineWidth(0.5);
    doc.line(15, 18, 195, 18);

    // Footer line
    doc.line(15, 280, 195, 280);

    // Footer Text
    doc.setFontSize(8);
    setText(colors.textMuted);
    doc.text('anantaglobalfzc@gmail.com | www.anantaglobalfzc.com', 15, 285);
    doc.text(`Page ${pageNumber} of ${totalPages}`, 180, 285);
  };

  // ==========================================
  // PAGE 1: COVER PAGE
  // ==========================================
  
  // Background Panel (Deep Navy)
  setFill(colors.dark);
  doc.rect(0, 0, 210, 297, 'F');

  // Decorative Shapes / Geometry
  // Golden Triangle/Polygon on the left edge
  setFill(colors.secondary);
  doc.triangle(0, 0, 0, 150, 40, 0, 'F');
  
  // Subtle Navy lighter panel
  setFill([18, 51, 89]);
  doc.rect(0, 200, 210, 97, 'F');
  
  // Gold accent bar separating deep navy & light navy panel
  setFill(colors.secondary);
  doc.rect(0, 198, 210, 2, 'F');

  // Logo Icon Symbol
  setFill(colors.primary);
  doc.rect(25, 60, 22, 22, 'F');
  setDraw(colors.secondary);
  doc.setLineWidth(1.5);
  doc.rect(25, 60, 22, 22, 'S');
  
  // 'A' inside logo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  setText(colors.secondary);
  doc.text('A', 31, 77);

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  setText(colors.white);
  doc.text('ANANTA GLOBAL', 25, 105);
  
  doc.setFontSize(24);
  setText(colors.secondary);
  doc.text('F.Z.C.', 25, 116);

  // Divider
  setDraw(colors.secondary);
  doc.setLineWidth(1.5);
  doc.line(25, 125, 95, 125);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(16);
  setText(colors.white);
  doc.text('CORPORATE PROFILE', 25, 137);

  doc.setFontSize(10);
  setText([160, 180, 200]);
  doc.text('Leading Partner in International Commodity & Scrap Trading', 25, 144);

  // Countries Served/Operations list
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setText(colors.white);
  doc.text('GLOBAL SOURCING & RECYCLING NETWORK', 25, 225);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setText([200, 210, 220]);
  
  const bullet = String.fromCharCode(149);
  doc.text(`${bullet} United Arab Emirates (Trading HQ)`, 25, 235);
  doc.text(`${bullet} India (Procurement Network)`, 25, 241);
  doc.text(`${bullet} Namibia (African Sourcing Operations)`, 25, 247);
  doc.text(`${bullet} Madagascar (Commodity Trading)`, 25, 253);

  // Bottom Copyright Info
  doc.setFontSize(8);
  setText(colors.textMuted);
  doc.text('CONFIDENTIAL | FOR CLIENT USE ONLY', 25, 278);

  // ==========================================
  // PAGE 2: ABOUT US & GLOBAL OPERATIONS
  // ==========================================
  doc.addPage();
  addPageDecorations(2, 4);

  // Section Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  setText(colors.primary);
  doc.text('About Ananta Global F.Z.C.', 15, 32);

  // Divider line
  setDraw(colors.secondary);
  doc.setLineWidth(0.8);
  doc.line(15, 36, 45, 36);

  // Body Text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  setText(colors.textDark);
  
  const aboutP1 = "Ananta Global F.Z.C. is established as a premier international trading corporation in the global scrap metal and recyclable material industry. Rooted in transparency, quality assurance, and seamless logistics coordination, we act as a secure bridge connecting large-scale industrial suppliers with reputable global smelters and manufacturers.";
  const splitP1 = doc.splitTextToSize(aboutP1, 180);
  doc.text(splitP1, 15, 44);

  const aboutP2 = "Our operational excellence is driven by a deep understanding of metal commodities, international trade compliance, and multi-modal freight strategies. We specialize in procurement, quality certification, containerized shipment coordination, and structured trade financing.";
  const splitP2 = doc.splitTextToSize(aboutP2, 180);
  doc.text(splitP2, 15, 66);

  // Statistics Box
  setFill(colors.lightBg);
  doc.rect(15, 88, 180, 36, 'F');
  setDraw(colors.primary);
  doc.setLineWidth(0.2);
  doc.rect(15, 88, 180, 36, 'S');

  // Stats Grid Column 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  setText(colors.primary);
  doc.text('4+', 35, 100);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setText(colors.textMuted);
  doc.text('Strategic Countries', 25, 106);

  // Stats Grid Column 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  setText(colors.primary);
  doc.text('50+', 80, 100);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setText(colors.textMuted);
  doc.text('Global Partners', 72, 106);

  // Stats Grid Column 3
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  setText(colors.primary);
  doc.text('1,200+', 125, 100);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setText(colors.textMuted);
  doc.text('Shipments Completed', 116, 106);

  // Stats Grid Column 4
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  setText(colors.primary);
  doc.text('10+', 172, 100);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  setText(colors.textMuted);
  doc.text('Years Combined Exp.', 160, 106);

  // Global Footprint Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  setText(colors.primary);
  doc.text('Global Footprint & Sourcing Networks', 15, 140);
  setDraw(colors.secondary);
  doc.line(15, 144, 45, 144);

  // Country 1: UAE
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setText(colors.primary);
  doc.text('United Arab Emirates (Trading & Corporate HQ)', 15, 154);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setText(colors.textDark);
  const uaeTxt = "Centrally based in Ajman Free Zone, our headquarters directs international trading operations, risk management, customs strategy, and financial transactions.";
  doc.text(doc.splitTextToSize(uaeTxt, 180), 15, 160);

  // Country 2: India
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setText(colors.primary);
  doc.text('India (Strategic Markets & Smelter Partnerships)', 15, 178);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setText(colors.textDark);
  const indiaTxt = "Acts as a primary destination for sorted scrap supplies, housing key relationships with major smelting companies and metal recycling networks.";
  doc.text(doc.splitTextToSize(indiaTxt, 180), 15, 184);

  // Country 3: Namibia
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setText(colors.primary);
  doc.text('Namibia (Primary Metal & Mining Sourcing Hub)', 15, 202);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setText(colors.textDark);
  const namTxt = "Serves as an essential procurement base for non-ferrous commodities. We maintain deep ties with mining firms, local metal collectors, and logistics networks via Walvis Bay.";
  doc.text(doc.splitTextToSize(namTxt, 180), 15, 208);

  // Country 4: Madagascar
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setText(colors.primary);
  doc.text('Madagascar (Regional Sourcing & Sourcing Network)', 15, 226);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setText(colors.textDark);
  const madTxt = "Focused on high-grade non-ferrous scrap metal collection and commodity sourcing, aligning with local logistics partnerships to safely export materials.";
  doc.text(doc.splitTextToSize(madTxt, 180), 15, 232);


  // ==========================================
  // PAGE 3: PRODUCT PORTFOLIO
  // ==========================================
  doc.addPage();
  addPageDecorations(3, 4);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  setText(colors.primary);
  doc.text('Product Portfolio', 15, 32);
  setDraw(colors.secondary);
  doc.line(15, 36, 45, 36);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setText(colors.textMuted);
  doc.text('Ananta Global supplies fully sorted, certified, and high-purity scrap commodities.', 15, 42);

  // Table header
  const tableTop = 50;
  setFill(colors.primary);
  doc.rect(15, tableTop, 180, 8, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  setText(colors.white);
  doc.text('Category', 20, tableTop + 5.5);
  doc.text('Scrap Item', 65, tableTop + 5.5);
  doc.text('Specifications / Key Trading Standards', 115, tableTop + 5.5);

  // Table rows
  const rows = [
    { cat: 'Ferrous Scrap', name: 'HMS 1 & 2', spec: 'ISRI Code 200-206, heavy melting steel' },
    { cat: 'Ferrous Scrap', name: 'Steel & Cast Iron Scrap', spec: 'Industrial scrap, machinery castings, structured plates' },
    { cat: 'Non-Ferrous Scrap', name: 'Copper Scrap', spec: 'ISRI codes Berry/Candy/Birch, high-grade wires & tubes' },
    { cat: 'Non-Ferrous Scrap', name: 'Aluminium Scrap', spec: 'ISRI codes Tense/Taint/Tabor, wheels, extrusion profiles' },
    { cat: 'Non-Ferrous Scrap', name: 'Brass & Stainless Steel', spec: 'Honey/Ebony brass, Grade 304 & 316 steel scrap' },
    { cat: 'Non-Ferrous Scrap', name: 'Lead, Zinc & Nickel', spec: 'Rains lead, Zinc die cast, high-purity nickel cathodes' },
    { cat: 'Battery Scrap', name: 'Dry & Industrial Battery', spec: 'Drained lead-acid battery scrap (ISRI code Rains)' },
    { cat: 'Industrial Recyclables', name: 'Mixed Metal Scrap', spec: 'Industrial assembly residues, mixed alloy recyclables' }
  ];

  let currentY = tableTop + 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  
  rows.forEach((row, index) => {
    // Alternating backgrounds
    if (index % 2 === 0) {
      setFill(colors.lightBg);
      doc.rect(15, currentY, 180, 10, 'F');
    }
    
    // Draw cells
    setText(colors.primary);
    doc.setFont('helvetica', 'bold');
    doc.text(row.cat, 20, currentY + 6.5);
    
    setText(colors.textDark);
    doc.setFont('helvetica', 'normal');
    doc.text(row.name, 65, currentY + 6.5);
    doc.text(row.spec, 115, currentY + 6.5);

    // Border line
    setDraw([226, 232, 240]);
    doc.setLineWidth(0.2);
    doc.line(15, currentY + 10, 195, currentY + 10);

    currentY += 10;
  });

  // Quality Assurance callout box
  currentY += 12;
  setFill(colors.lightBg);
  doc.rect(15, currentY, 180, 42, 'F');
  setDraw(colors.secondary);
  doc.setLineWidth(0.5);
  doc.line(15, currentY, 15, currentY + 42); // Left thick gold border
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  setText(colors.primary);
  doc.text('Strict Quality Control Systems', 22, currentY + 8);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setText(colors.textDark);
  const qcText = "All scrap consignments undergo comprehensive pre-loading inspection. We cooperate with renowned global testing companies (SGS, CCIC, Intertek) to verify weight, moisture content, chemical composition, and safety standards, ensuring every delivery matches contract terms and import laws.";
  doc.text(doc.splitTextToSize(qcText, 168), 22, currentY + 15);


  // ==========================================
  // PAGE 4: SERVICES & CONTACT INFORMATION
  // ==========================================
  doc.addPage();
  addPageDecorations(4, 4);

  // Section: Services
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  setText(colors.primary);
  doc.text('Logistics & Trading Services', 15, 32);
  setDraw(colors.secondary);
  doc.line(15, 36, 45, 36);

  // Service grid details
  const servicesList = [
    { title: 'Global Sourcing & Verification', desc: 'Pre-vetted supplier network ensuring reliable, high-grade scrap procurement.' },
    { title: 'Container Loading & Inspection Support', desc: 'On-site supervisors monitor loading to guarantee weight and material segregation.' },
    { title: 'International Freight Coordination', desc: 'Secure shipping pathways mapped out via major carriers for prompt container transit.' },
    { title: 'Customs Clearance & Documentation', desc: 'Full compliance with global export rules, customs codes, and regulatory filings.' }
  ];

  let servY = 46;
  servicesList.forEach((s) => {
    // Small bullet square
    setFill(colors.secondary);
    doc.rect(15, servY + 1, 3, 3, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    setText(colors.primary);
    doc.text(s.title, 22, servY + 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    setText(colors.textMuted);
    doc.text(doc.splitTextToSize(s.desc, 170), 22, servY + 9);

    servY += 18;
  });

  // Section: Contact details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  setText(colors.primary);
  doc.text('Get in Touch with Ananta Global', 15, 134);
  setDraw(colors.secondary);
  doc.line(15, 138, 45, 138);

  // Contact info card background
  setFill(colors.lightBg);
  doc.rect(15, 146, 180, 72, 'F');
  setDraw(colors.primary);
  doc.setLineWidth(0.2);
  doc.rect(15, 146, 180, 72, 'S');

  // Contact info table-like display
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  setText(colors.primary);
  doc.text('Headquarters:', 25, 160);
  doc.text('Email Inquiries:', 25, 186);
  doc.text('Business Hours:', 25, 196);

  doc.setFont('helvetica', 'normal');
  setText(colors.textDark);
  doc.text('Ananta Global F.Z.C.\nB.C. 1308669, C1 Building, Ajman Free Zone, Ajman, UAE', 60, 160);
  
  setText(colors.secondary);
  doc.setFont('helvetica', 'bold');
  doc.text('anantaglobalfzc@gmail.com', 60, 186);
  
  doc.setFont('helvetica', 'normal');
  setText(colors.textDark);
  doc.text('Monday to Friday | 9:00 AM – 6:00 PM (GST)', 60, 196);

  // Final Call to Action
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  setText(colors.primary);
  doc.text('“Delivering reliability, transparent procedures, and logistics efficiency globally.”', 105, 245, { align: 'center' });

  // Signature line
  setDraw(colors.secondary);
  doc.setLineWidth(0.5);
  doc.line(85, 258, 125, 258);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  setText(colors.textDark);
  doc.text('BOARD OF DIRECTORS', 105, 263, { align: 'center' });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  setText(colors.textMuted);
  doc.text('Ananta Global F.Z.C.', 105, 267, { align: 'center' });

  // Save the PDF
  doc.save('Ananta_Global_FZC_Corporate_Profile.pdf');
}
