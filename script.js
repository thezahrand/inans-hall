document.addEventListener('DOMContentLoaded', () => {
    const hall = document.getElementById('hall');
    const instructionOverlay = document.getElementById('instruction');
    const enterBtn = document.getElementById('enter-btn');
    const scene = document.getElementById('scene');
    const vignette = document.getElementById('vignette');
    const navDotsContainer = document.getElementById('navigation-dots');
    const bgMusic = document.getElementById('bg-music');

    // Letter Elements
    const letterTrigger = document.getElementById('letter-trigger');
    const letterOverlay = document.getElementById('letter-overlay');
    const closeLetterBtn = document.querySelector('.close-letter');

    // Image Data
    const galleryImages = [
        { file: "1.png", title: "First Design", date: "July 2023", caption: "Desain lu yang pertama kali. Lengkap dengan wiggly text trademark lu." },
        { file: "2.jpg", title: "MMSL24!", date: "April 2024", caption: "Memperjuangin event pertama ." },
        { file: "3.jpg", title: "Menang FLS2N!", date: "April 2024", caption: "Yah keliatan banget capeknya. But congratulations!" },
        { file: "4.jpg", title: "Medpub is Calling Out!", date: "July 2024", caption: "First time ngumpul, udah meledak aja ide-idenya." },
        { file: "5.JPG", title: "PPOV, Unite!", date: "August 2024", caption: "Shining in colors!" },
        { file: "6.JPG", title: "Hari Guru Nasional", date: "November 2024", caption: "Tetap bekerja walau saat libur." },
        { file: "7.JPG", title: "MOVIE NIGHT!", date: "March 2024", caption: "Kira-kira mau nonton apa ya..." },
        { file: "8.JPG", title: "FBK 2024", date: "October 2024", caption: "Drew a cutie, me happy." },
        { file: "9.JPG", title: "STUKOLOLOLOL", date: "Mei 2025", caption: "A ride to freedom (from ic)." },
        { file: "10.jpg", title: "Rest Area Kesayangan", date: "Mei 2025", caption: "Kayanya kita udah berkali kali keluar, rest areanya disini mulu deh." },
        { file: "11.jpg", title: "Girlfriends", date: "Mei 2025", caption: "Cant have life without them." },
        { file: "12.JPG", title: "Hati Hati Ada Pegasus", date: "Mei 2025", caption: "PLTS dibajak ama medpub." },
        { file: "13.JPG", title: "Pesantren Kilat", date: "November 2024", caption: "Pertama kali sanlat bukannya ikut, malah jagain." },
        { file: "14.jpg", title: "Koboi", date: "December 2024", caption: "Date with keicik always fun deh." },
        { file: "15.JPG", title: "Mentorin Ophel", date: "January 2025", caption: "Mbaknya jadi ngurusin bocil mau masuk ic." },
        { file: "16.JPG", title: "Ophelia 2025", date: "January 2025", caption: "Akhirnya event tanpa jadi dokum/mm." },
        { file: "33.JPG", title: "LPJ 2025", date: "January 2025", caption: "Top 3 Division. Did our best." },
        { file: "17.JPG", title: "BATIK DAY!", date: "October 2025", caption: "Hari Batik pertama dan paling berkesan." },
        { file: "18.jpg", title: "ERCAVERSARYYY", date: "February 2025", caption: "ERCAVA BERULANG TAHUN. Sekarang lu yang ultah." },
        { file: "19.JPG", title: "Piring Ashils", date: "February 2025", caption: "Lucu deh makan sambil liat ashila gitu." },
        { file: "19.mp4", title: "PPOV BER JJ", date: "February 2025", caption: "HAIIIKKKK." },
        { file: "20.jpg", title: "STRAWBERRIEE", date: "October 2025", caption: "Mami told us to eat fruits. So yummy." },
        { file: "21.png", title: "Girlfriends", date: "October 2025", caption: "Cant have a stukol without them." },
        { file: "22.JPG", title: "SONICCCC LINGUISTICCC", date: "April 2025", caption: "Kemarin menggambar, sekarang menggambar (?) lewat kamera." },
        { file: "23.jpg", title: "DAY 1 DONEE", date: "April 2025", caption: "Extravagant opening, unforgettable days." },
        { file: "24.png", title: "24->25", date: "April 2024-25", caption: "Some things never change, dont they?" },
        { file: "25.jpg", title: "Idul Adha", date: "Mei 2025", caption: "Potong kambing? Makan kambing?" },
        { file: "26.jpg", title: "Al Isra, di jalan?", date: "August 2025", caption: "Kak Inan populer juga ya." },
        { file: "27.jpg", title: "kamerawati juga lapar", date: "August 2025", caption: "yum." },
        { file: "34.jpg", title: "kamerawan/wati goes on a trip", date: "August 2025", caption: "lagi acara, izin makan sushi dulu yah." },
        { file: "28.JPG", title: "Muthia :(", date: "August 2025", caption: "Mbaknya lagi sibuk memperjuangkan OSP nih." },
        { file: "29.JPG", title: "MANTRA final days", date: "August 2025", caption: "Mading kebanggan kita, dan saatnya beristirahat." },
        { file: "30.JPG", title: "Succession", date: "August 2025", caption: "Leading medpub is no easy task." },
        { file: "31.jpg", title: "MANTRA", date: "August 2025", caption: "Mantra menyaksikan sertijab nih." },
        { file: "32.jpg", title: "PPOV, Signing Out!", date: "August 2025", caption: "Cheers." }
    ];

    // Generate Gallery Sections
    const finalSection = document.querySelector('.final-section');

    galleryImages.forEach((image, index) => {
        const section = document.createElement('div');
        section.className = 'wall-section';

        // Alternate frame styles
        const frameStyles = ['gold-frame', 'wood-frame', 'black-frame'];
        const frameStyle = frameStyles[index % frameStyles.length];

        section.innerHTML = `
            <div class="painting-container">
                <div class="frame ${frameStyle}">
                    ${image.file.toLowerCase().endsWith('.mp4')
                ? `<video src="assets/gallery/${image.file}" controls class="gallery-video" style="max-width: 100%; max-height: 45vh; display: block;"></video>`
                : `<img src="assets/gallery/${image.file}" alt="${image.title}">`
            }
                </div>
                <div class="plaque">
                    <h3>${image.title}</h3>
                    <p class="date">${image.date}</p>
                    <p class="caption">${image.caption}</p>
                </div>
            </div>
        `;

        // Insert before the final section
        hall.insertBefore(section, finalSection);
    });

    // Re-select sections after generation
    const sections = document.querySelectorAll('.wall-section');
    let currentIndex = 0;
    const totalSections = sections.length;
    let isNavigating = false;

    // Generate Navigation Dots
    sections.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            if (!isNavigating && currentIndex !== index) {
                currentIndex = index;
                updateGallery();
            }
        });

        navDotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.nav-dot');

    // Enter Museum
    enterBtn.addEventListener('click', () => {
        instructionOverlay.classList.add('hidden');

        // Play Audio
        if (bgMusic) {
            bgMusic.volume = 0.5;
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
        }

        // Trigger opening sequence
        setTimeout(() => {
            scene.classList.remove('opening-view');
        }, 500);
    });

    // Navigation Logic
    function updateGallery() {
        // Fade out vignette
        vignette.classList.add('fade-out');
        isNavigating = true;

        // Move hall
        hall.style.transform = `translateX(-${currentIndex * 100}vw)`;

        // Update Dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
            // Scroll dot into view if needed
            dots[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        // Handle Lighting Effect for Final Section & Audio
        if (currentIndex === totalSections - 1) {
            // Last slide: Pause audio, light up cake
            if (bgMusic) bgMusic.pause();

            setTimeout(() => {
                finalSection.classList.add('lit');
            }, 1000);
        } else {
            // Not last slide: Ensure audio is playing, dim cake
            if (bgMusic && bgMusic.paused && !instructionOverlay.classList.contains('hidden') === false) {
                bgMusic.play().catch(e => console.log("Audio resume failed:", e));
            }
            finalSection.classList.remove('lit');
        }

        // Fade vignette back in after transition
        setTimeout(() => {
            vignette.classList.remove('fade-out');
            isNavigating = false;
        }, 1000);
    }

    function navigate(direction) {
        if (isNavigating) return;

        if (direction === 'next') {
            if (currentIndex < totalSections - 1) {
                currentIndex++;
                updateGallery();
            }
        } else if (direction === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
                updateGallery();
            }
        }
    }

    // Keyboard Events
    document.addEventListener('keydown', (e) => {
        if (instructionOverlay.classList.contains('hidden') && !letterOverlay.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                navigate('next');
            } else if (e.key === 'ArrowLeft') {
                navigate('prev');
            }
        }

        // Close letter on Escape
        if (e.key === 'Escape' && letterOverlay.classList.contains('active')) {
            letterOverlay.classList.remove('active');
        }
    });

    // Letter Interaction
    if (letterTrigger) {
        letterTrigger.addEventListener('click', () => {
            letterOverlay.classList.add('active');
        });
    }

    if (closeLetterBtn) {
        closeLetterBtn.addEventListener('click', () => {
            letterOverlay.classList.remove('active');
        });
    }

    // Close letter when clicking outside content
    letterOverlay.addEventListener('click', (e) => {
        if (e.target === letterOverlay) {
            letterOverlay.classList.remove('active');
        }
    });
});
