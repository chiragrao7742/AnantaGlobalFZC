// /**
//  * ANANTA GLOBAL F.Z.C. - Main Application Logic
//  */

// document.addEventListener('DOMContentLoaded', () => {
//   // === STICKY HEADER & ACTIVE LINKS ===
//   const header = document.querySelector('header');
//   const sections = document.querySelectorAll('section');
//   const navLinks = document.querySelectorAll('.nav-link');

//   window.addEventListener('scroll', () => {
//     // Sticky Header
//     if (window.scrollY > 50) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }

//     // Active Nav Link by Scroll Position
//     let current = '';
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop - 120;
//       const sectionHeight = section.clientHeight;
//       if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//         current = section.getAttribute('id');
//       }
//     });

//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       if (link.getAttribute('href') === `#${current}`) {
//         link.classList.add('active');
//       }
//     });
//   });

//   // === MOBILE NAVIGATION TOGGLE ===
//   const menuToggle = document.querySelector('.menu-toggle');
//   const navMenu = document.querySelector('.nav-menu');

//   if (menuToggle && navMenu) {
//     menuToggle.addEventListener('click', () => {
//       navMenu.classList.toggle('active');
      
//       // Animate hamburger lines
//       const spans = menuToggle.querySelectorAll('span');
//       spans[0].style.transform = navMenu.classList.contains('active') 
//         ? 'rotate(45deg) translate(6px, 6px)' : 'none';
//       spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
//       spans[2].style.transform = navMenu.classList.contains('active') 
//         ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
//     });

//     // Close menu when clicking navigation links
//     navMenu.querySelectorAll('.nav-link').forEach(link => {
//       link.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//         const spans = menuToggle.querySelectorAll('span');
//         spans[0].style.transform = 'none';
//         spans[1].style.opacity = '1';
//         spans[2].style.transform = 'none';
//       });
//     });
//   }

//   // === INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ===
//   const fadeUpElements = document.querySelectorAll('.fade-in-up');
//   const animationObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('active');
//         observer.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.1 });

//   fadeUpElements.forEach(el => animationObserver.observe(el));

//   // === STATISTICS COUNTER ANIMATION ===
//   const statNumbers = document.querySelectorAll('.stat-number');
//   let statsAnimated = false;

//   const animateStats = () => {
//     statNumbers.forEach(stat => {
//       const target = +stat.getAttribute('data-target');
//       const suffix = stat.getAttribute('data-suffix') || '';
//       let count = 0;
//       const speed = target / 50; // increment step

//       const updateCount = () => {
//         count += speed;
//         if (count < target) {
//           stat.innerText = Math.floor(count) + suffix;
//           setTimeout(updateCount, 25);
//         } else {
//           stat.innerText = target + suffix;
//         }
//       };
//       updateCount();
//     });
//   };

//   const statsSection = document.getElementById('stats');
//   if (statsSection) {
//     const statsObserver = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !statsAnimated) {
//         animateStats();
//         statsAnimated = true;
//       }
//     }, { threshold: 0.3 });
//     statsObserver.observe(statsSection);
//   }

//   // === PRODUCT FILTERING ===
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const productCards = document.querySelectorAll('.product-card');

//   filterButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       filterButtons.forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');

//       const filterValue = btn.getAttribute('data-filter');

//       productCards.forEach(card => {
//         if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
//           card.style.display = 'flex';
//           setTimeout(() => card.style.opacity = '1', 50);
//         } else {
//           card.style.opacity = '0';
//           setTimeout(() => card.style.display = 'none', 300);
//         }
//       });
//     });
//   });

//   // === INTERACTIVE MAP OPERATION INFOS ===
//   const mapPins = document.querySelectorAll('.map-pin');
//   const detailsCard = document.querySelector('.map-details-card');
//   const detailsCountry = document.querySelector('.map-details-country');
//   const detailsRole = document.querySelector('.map-details-role');
//   const detailsDesc = document.querySelector('.map-details-desc');
//   const detailsClose = document.querySelector('.map-details-close');

//   const countryData = {
//     uae: {
//       flag: '🇦🇪',
//       name: 'United Arab Emirates',
//       role: 'Corporate Headquarters & Trading Hub',
//       desc: 'Based in Ajman Free Zone, Ananta Global coordinates international scrap shipments, finances operations, regulates logistics compliance, and structures regional supplier agreements.'
//     },
//     india: {
//       flag: '🇮🇳',
//       name: 'India',
//       role: 'Supplier Partnerships & Procurement Network',
//       desc: 'Our procurement network in India maintains strong partnerships with major metal processing smelting firms, receiving premium ferrous and non-ferrous sorted scraps.'
//     },
//     namibia: {
//       flag: '🇳🇦',
//       name: 'Namibia',
//       role: 'African Sourcing & Mining Procurement',
//       desc: 'Namibian operations focus on mining sector partnerships and primary commodity collection, importing and exporting high-grade metals via Walvis Bay.'
//     },
//     madagascar: {
//       flag: '🇲🇬',
//       name: 'Madagascar',
//       role: 'Regional Sourcing & Commodity Trading',
//       desc: 'Madagascar operations secure regional scrap metal sorting and commodity sourcing, ensuring rigorous quality controls before global maritime dispatch.'
//     }
//   };

//   mapPins.forEach(pin => {
//     pin.addEventListener('click', (e) => {
//       e.stopPropagation();
//       const countryId = pin.getAttribute('data-country');
//       const data = countryData[countryId];
//       if (data) {
//         detailsCountry.innerHTML = `${data.flag} ${data.name}`;
//         detailsRole.innerText = data.role;
//         detailsDesc.innerText = data.desc;
//         detailsCard.classList.add('active');

//         // Center map card slightly above pins for visibility
//         // Highlighting active pin visually
//         mapPins.forEach(p => p.querySelector('circle.outer-ring').style.stroke = 'none');
//         pin.querySelector('circle.outer-ring').style.stroke = 'var(--secondary)';
//         pin.querySelector('circle.outer-ring').style.strokeWidth = '2px';
//       }
//     });
//   });

//   if (detailsClose) {
//     detailsClose.addEventListener('click', (e) => {
//       e.stopPropagation();
//       detailsCard.classList.remove('active');
//       mapPins.forEach(p => p.querySelector('circle.outer-ring').style.stroke = 'none');
//     });
//   }

//   // Close map popup when clicking elsewhere on document
//   document.addEventListener('click', () => {
//     if (detailsCard) detailsCard.classList.remove('active');
//     mapPins.forEach(p => p.querySelector('circle.outer-ring').style.stroke = 'none');
//   });

//   // === CLIENT TESTIMONIALS SLIDER ===
//   const track = document.querySelector('.testimonials-track');
//   const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
//   const prevBtn = document.querySelector('.slider-prev');
//   const nextBtn = document.querySelector('.slider-next');
//   const dotsContainer = document.querySelector('.slider-dots');
  
//   if (track && slides.length > 0) {
//     let currentIndex = 0;
    
//     // Create navigation dots
//     slides.forEach((_, index) => {
//       const dot = document.createElement('div');
//       dot.classList.add('slider-dot');
//       if (index === 0) dot.classList.add('active');
//       dot.addEventListener('click', () => moveToSlide(index));
//       dotsContainer.appendChild(dot);
//     });
    
//     const dots = Array.from(document.querySelectorAll('.slider-dot'));

//     const updateDots = (index) => {
//       dots.forEach(dot => dot.classList.remove('active'));
//       dots[index].classList.add('active');
//     };

//     const moveToSlide = (index) => {
//       if (index < 0) index = slides.length - 1;
//       if (index >= slides.length) index = 0;
//       currentIndex = index;
//       track.style.transform = `translateX(-${currentIndex * 100}%)`;
//       updateDots(currentIndex);
//     };

//     if (nextBtn) nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
//     if (prevBtn) prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));

//     // Auto slide every 6 seconds
//     let autoSlideInterval = setInterval(() => moveToSlide(currentIndex + 1), 6000);

//     // Reset interval on manual interaction
//     const resetInterval = () => {
//       clearInterval(autoSlideInterval);
//       autoSlideInterval = setInterval(() => moveToSlide(currentIndex + 1), 6000);
//     };

//     [prevBtn, nextBtn].forEach(btn => {
//       if (btn) btn.addEventListener('click', resetInterval);
//     });
//     dots.forEach(dot => dot.addEventListener('click', resetInterval));
//   }

//   // === RFQ FILE UPLOADER & FORM LOGIC ===
//   const rfqForm = document.getElementById('rfqForm');
//   const dropZone = document.getElementById('dropZone');
//   const fileInput = document.getElementById('fileInput');
//   const fileList = document.getElementById('fileList');
//   let uploadedFiles = [];

//   // Hook product inquiry button to RFQ product selector
//   const inquiryButtons = document.querySelectorAll('.product-action');
//   inquiryButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const productName = btn.getAttribute('data-product');
//       const productSelect = document.getElementById('rfqProduct');
      
//       if (productSelect && productName) {
//         // Set selected value in dropdown
//         for (let i = 0; i < productSelect.options.length; i++) {
//           if (productSelect.options[i].text.toLowerCase().includes(productName.toLowerCase()) || 
//               productSelect.options[i].value.toLowerCase().includes(productName.toLowerCase())) {
//             productSelect.selectedIndex = i;
//             break;
//           }
//         }
//       }

//       // Scroll to RFQ section
//       const rfqSection = document.getElementById('rfq');
//       if (rfqSection) {
//         rfqSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     });
//   });

//   // Drag and Drop Uploader
//   if (dropZone && fileInput) {
//     ['dragenter', 'dragover'].forEach(eventName => {
//       dropZone.addEventListener(eventName, (e) => {
//         e.preventDefault();
//         dropZone.classList.add('dragover');
//       }, false);
//     });

//     ['dragleave', 'drop'].forEach(eventName => {
//       dropZone.addEventListener(eventName, (e) => {
//         e.preventDefault();
//         dropZone.classList.remove('dragover');
//       }, false);
//     });

//     dropZone.addEventListener('drop', (e) => {
//       const dt = e.dataTransfer;
//       const files = dt.files;
//       handleFiles(files);
//     });

//     fileInput.addEventListener('change', () => {
//       handleFiles(fileInput.files);
//     });
//   }

//   const handleFiles = (files) => {
//     const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];
    
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const ext = file.name.split('.').pop().toLowerCase();
      
//       if (allowedExtensions.includes(ext)) {
//         if (!uploadedFiles.some(f => f.name === file.name)) {
//           uploadedFiles.push(file);
//           renderFileList();
//         }
//       } else {
//         alert(`File format .${ext} not supported. Please upload PDF, Word (.doc, .docx) or Excel (.xls, .xlsx) files.`);
//       }
//     }
//   };

//   const renderFileList = () => {
//     if (!fileList) return;
//     fileList.innerHTML = '';
    
//     uploadedFiles.forEach((file, index) => {
//       const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      
//       const fileItem = document.createElement('div');
//       fileItem.classList.add('file-item');
//       fileItem.innerHTML = `
//         <span>📎 <strong>${file.name}</strong> (${sizeInMB} MB)</span>
//         <button type="button" class="file-remove" data-index="${index}">✕</button>
//       `;
      
//       fileList.appendChild(fileItem);
//     });

//     // Wire up removal button
//     document.querySelectorAll('.file-remove').forEach(btn => {
//       btn.addEventListener('click', (e) => {
//         const idx = parseInt(btn.getAttribute('data-index'));
//         uploadedFiles.splice(idx, 1);
//         renderFileList();
//       });
//     });
//   };

//   // RFQ Submission
//   const successModal = document.getElementById('successModal');
//   const closeModalBtn = document.getElementById('closeModal');

//   if (rfqForm) {
//     rfqForm.addEventListener('submit', (e) => {
//       e.preventDefault();

//       // Collect form values
//       const companyName = document.getElementById('rfqCompany').value;
//       const contactPerson = document.getElementById('rfqContact').value;
//       const email = document.getElementById('rfqEmail').value;
//       const phone = document.getElementById('rfqPhone').value;
//       const country = document.getElementById('rfqCountry').value;
//       const product = document.getElementById('rfqProduct').value;
//       const quantity = document.getElementById('rfqQuantity').value;
//       const port = document.getElementById('rfqPort').value;
//       const message = document.getElementById('rfqMessage').value;

//       // Mock console validation & notification
//       console.log('--- RFQ Inbound Submission ---');
//       console.log(`Company: ${companyName}`);
//       console.log(`Contact: ${contactPerson} (${email} / ${phone})`);
//       console.log(`Location: ${country} | Dest Port: ${port}`);
//       console.log(`Product: ${product} | Quantity: ${quantity}`);
//       console.log(`Message: ${message}`);
//       console.log(`Files Attached:`, uploadedFiles.map(f => f.name));

//       // Simulate Email Dispatch Notification console warning
//       console.info(`[SMTP Simulator] Dispatched email notification to anantaglobalfzc@gmail.com`);
//       console.info(`[SMTP Simulator] Sent automated receipt verification to ${email}`);

//       // Display Success Modal
//       if (successModal) {
//         successModal.style.display = 'flex';
//       }

//       // Reset form and attachments
//       rfqForm.reset();
//       uploadedFiles = [];
//       renderFileList();
//     });
//   }

//   if (closeModalBtn) {
//     closeModalBtn.addEventListener('click', () => {
//       successModal.style.display = 'none';
//     });

//     // Close modal by clicking outside content
//     successModal.addEventListener('click', (e) => {
//       if (e.target === successModal) {
//         successModal.style.display = 'none';
//       }
//     });
//   }

//   // === COOKIE CONSENT BANNER ===
//   const cookieBanner = document.getElementById('cookieBanner');
//   const acceptCookies = document.getElementById('acceptCookies');
//   const declineCookies = document.getElementById('declineCookies');

//   if (cookieBanner) {
//     // Show banner after 2 seconds if not accepted before
//     if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesDeclined')) {
//       setTimeout(() => {
//         cookieBanner.classList.add('active');
//       }, 2000);
//     }

//     if (acceptCookies) {
//       acceptCookies.addEventListener('click', () => {
//         localStorage.setItem('cookiesAccepted', 'true');
//         cookieBanner.classList.remove('active');
//       });
//     }

//     if (declineCookies) {
//       declineCookies.addEventListener('click', () => {
//         localStorage.setItem('cookiesDeclined', 'true');
//         cookieBanner.classList.remove('active');
//       });
//     }
//   }
// });



/**
 * ANANTA GLOBAL F.Z.C. - Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // === STICKY HEADER & ACTIVE LINKS ===
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Sticky Header
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Nav Link by Scroll Position
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // === MOBILE NAVIGATION TOGGLE ===
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate hamburger lines
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translate(6px, 6px)' : 'none';
      spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
    });

    // Close menu when clicking navigation links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // === INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ===
  const fadeUpElements = document.querySelectorAll('.fade-in-up');
  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeUpElements.forEach(el => animationObserver.observe(el));

  // === STATISTICS COUNTER ANIMATION ===
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const animateStats = () => {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const suffix = stat.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 50; // increment step

      const updateCount = () => {
        count += speed;
        if (count < target) {
          stat.innerText = Math.floor(count) + suffix;
          setTimeout(updateCount, 25);
        } else {
          stat.innerText = target + suffix;
        }
      };
      updateCount();
    });
  };

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsAnimated) {
        animateStats();
        statsAnimated = true;
      }
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // === PRODUCT FILTERING ===
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  // === INTERACTIVE MAP OPERATION INFOS ===
  const mapPins = document.querySelectorAll('.map-pin');
  const detailsCard = document.querySelector('.map-details-card');
  const detailsCountry = document.querySelector('.map-details-country');
  const detailsRole = document.querySelector('.map-details-role');
  const detailsDesc = document.querySelector('.map-details-desc');
  const detailsClose = document.querySelector('.map-details-close');

  const countryData = {
    uae: {
      flag: '🇦🇪',
      name: 'United Arab Emirates',
      role: 'Corporate Headquarters & Trading Hub',
      desc: 'Based in Ajman Free Zone, Ananta Global coordinates international scrap shipments, finances operations, regulates logistics compliance, and structures regional supplier agreements.'
    },
    india: {
      flag: '🇮🇳',
      name: 'India',
      role: 'Supplier Partnerships & Procurement Network',
      desc: 'Our procurement network in India maintains strong partnerships with major metal processing smelting firms, receiving premium ferrous and non-ferrous sorted scraps.'
    },
    namibia: {
      flag: '🇳🇦',
      name: 'Namibia',
      role: 'African Sourcing & Mining Procurement',
      desc: 'Namibian operations focus on mining sector partnerships and primary commodity collection, importing and exporting high-grade metals via Walvis Bay.'
    },
    madagascar: {
      flag: '🇲🇬',
      name: 'Madagascar',
      role: 'Regional Sourcing & Commodity Trading',
      desc: 'Madagascar operations secure regional scrap metal sorting and commodity sourcing, ensuring rigorous quality controls before global maritime dispatch.'
    }
  };

  mapPins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const countryId = pin.getAttribute('data-country');
      const data = countryData[countryId];
      if (data) {
        detailsCountry.innerHTML = `${data.flag} ${data.name}`;
        detailsRole.innerText = data.role;
        detailsDesc.innerText = data.desc;
        detailsCard.classList.add('active');

        // Center map card slightly above pins for visibility
        // Highlighting active pin visually
        mapPins.forEach(p => p.querySelector('circle.outer-ring').style.stroke = 'none');
        pin.querySelector('circle.outer-ring').style.stroke = 'var(--secondary)';
        pin.querySelector('circle.outer-ring').style.strokeWidth = '2px';
      }
    });
  });

  if (detailsClose) {
    detailsClose.addEventListener('click', (e) => {
      e.stopPropagation();
      detailsCard.classList.remove('active');
      mapPins.forEach(p => p.querySelector('circle.outer-ring').style.stroke = 'none');
    });
  }

  // Close map popup when clicking elsewhere on document
  document.addEventListener('click', () => {
    if (detailsCard) detailsCard.classList.remove('active');
    mapPins.forEach(p => p.querySelector('circle.outer-ring').style.stroke = 'none');
  });

  // === CLIENT TESTIMONIALS SLIDER ===
  const track = document.querySelector('.testimonials-track');
  const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (track && slides.length > 0) {
    let currentIndex = 0;
    
    // Create navigation dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => moveToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(document.querySelectorAll('.slider-dot'));

    const updateDots = (index) => {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    };

    const moveToSlide = (index) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots(currentIndex);
    };

    if (nextBtn) nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));

    // Auto slide every 6 seconds
    let autoSlideInterval = setInterval(() => moveToSlide(currentIndex + 1), 6000);

    // Reset interval on manual interaction
    const resetInterval = () => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => moveToSlide(currentIndex + 1), 6000);
    };

    [prevBtn, nextBtn].forEach(btn => {
      if (btn) btn.addEventListener('click', resetInterval);
    });
    dots.forEach(dot => dot.addEventListener('click', resetInterval));
  }

  // === RFQ FILE UPLOADER & FORM LOGIC ===
  const rfqForm = document.getElementById('rfqForm');
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const fileList = document.getElementById('fileList');
  let uploadedFiles = [];

  // Hook product inquiry button to RFQ product selector
  const inquiryButtons = document.querySelectorAll('.product-action');
  inquiryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.getAttribute('data-product');
      const productSelect = document.getElementById('rfqProduct');
      
      if (productSelect && productName) {
        // Set selected value in dropdown
        for (let i = 0; i < productSelect.options.length; i++) {
          if (productSelect.options[i].text.toLowerCase().includes(productName.toLowerCase()) || 
              productSelect.options[i].value.toLowerCase().includes(productName.toLowerCase())) {
            productSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Scroll to RFQ section
      const rfqSection = document.getElementById('rfq');
      if (rfqSection) {
        rfqSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Drag and Drop Uploader
  if (dropZone && fileInput) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFiles(files);
    });

    fileInput.addEventListener('change', () => {
      handleFiles(fileInput.files);
    });
  }

  const handleFiles = (files) => {
    const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split('.').pop().toLowerCase();
      
      if (allowedExtensions.includes(ext)) {
        if (!uploadedFiles.some(f => f.name === file.name)) {
          uploadedFiles.push(file);
          renderFileList();
        }
      } else {
        alert(`File format .${ext} not supported. Please upload PDF, Word (.doc, .docx) or Excel (.xls, .xlsx) files.`);
      }
    }
  };

  const renderFileList = () => {
    if (!fileList) return;
    fileList.innerHTML = '';
    
    uploadedFiles.forEach((file, index) => {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      
      const fileItem = document.createElement('div');
      fileItem.classList.add('file-item');
      fileItem.innerHTML = `
        <span>📎 <strong>${file.name}</strong> (${sizeInMB} MB)</span>
        <button type="button" class="file-remove" data-index="${index}">✕</button>
      `;
      
      fileList.appendChild(fileItem);
    });

    // Wire up removal button
    document.querySelectorAll('.file-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-index'));
        uploadedFiles.splice(idx, 1);
        renderFileList();
      });
    });
  };

  // RFQ Submission
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModal');

  
if (rfqForm) {
  rfqForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = rfqForm.querySelector("button[type='submit']");
    const old = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    const fd = new FormData(rfqForm);
    uploadedFiles.forEach(f=>fd.append("attachment",f));
    try{
      const res = await fetch("https://api.web3forms.com/submit",{method:"POST",body:fd});
      const result = await res.json();
      console.log(result);
      if(result.success){
        if(successModal) successModal.style.display='flex';
        rfqForm.reset();
        uploadedFiles=[];
        renderFileList();
      }else{
        alert(result.message || "Submission failed");
      }
    }catch(err){
      console.error(err);
      alert("Network error");
    }finally{
      btn.disabled=false;
      btn.innerHTML=old;
    }
  });
}


  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      successModal.style.display = 'none';
    });

    // Close modal by clicking outside content
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.style.display = 'none';
      }
    });
  }

  // === COOKIE CONSENT BANNER ===
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');
  const declineCookies = document.getElementById('declineCookies');

  if (cookieBanner) {
    // Show banner after 2 seconds if not accepted before
    if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesDeclined')) {
      setTimeout(() => {
        cookieBanner.classList.add('active');
      }, 2000);
    }

    if (acceptCookies) {
      acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('active');
      });
    }

    if (declineCookies) {
      declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesDeclined', 'true');
        cookieBanner.classList.remove('active');
      });
    }
  }
});
