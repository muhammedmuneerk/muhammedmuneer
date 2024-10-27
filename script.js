// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a geometry for particles
const geometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
}

geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Create a material for particles
const material = new THREE.PointsMaterial({
    size: 0.005,
    color: 0x00ffff,
});

// Create the particle system
const particlesMesh = new THREE.Points(geometry, material);
scene.add(particlesMesh);

camera.position.z = 3;

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.001;

    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills data
const skills = [
    { name: 'JAVA', level: 'Advanced', experience: 7, icon: 'fa-brands fa-java', iconLibrary: 'fontawesome' }, 
    { name: 'HTML', level: 'Expert', experience: 10, icon: 'fa-brands fa-html5', iconLibrary: 'fontawesome' },  
    { name: 'CSS', level: 'Expert', experience: 9, icon: 'fa-brands fa-css3-alt', iconLibrary: 'fontawesome' },   // fa-brands fa-css3
    { name: 'JavaScript', level: 'Advanced', experience: 7, icon: 'fa-brands fa-js', iconLibrary: 'fontawesome' },  // fa-brands fa-square-js
    { name: 'Node.js', level: 'Expert', experience: 9, icon: 'fa-brands fa-node', iconLibrary: 'fontawesome' },   // fa-brands fa-node-js
    { name: 'React', level: 'Advanced', experience: 8, icon: 'fa-brands fa-react', iconLibrary: 'fontawesome' }, 
    { name: 'Express', level: 'Advanced', experience: 7, icon: 'server', iconLibrary: 'lucide' }, // fa-solid fa-server  - fontawesome
    { name: 'MongoDB', level: 'Advanced', experience: 8, icon: 'database', iconLibrary: 'lucide' },   // 
    { name: 'Tailwind CSS', level: 'Intermediate', experience: 6, icon: 'wind', iconLibrary: 'lucide' },
    { name: 'GitHub', level: 'Expert', experience: 9, icon: 'git-branch', iconLibrary: 'lucide' },
    { name: 'AWS', level: 'Intermediate', experience: 5, icon: 'cloud', iconLibrary: 'lucide' },  //<i class="fa-brands fa-aws"></i>
    { name: 'Firebase', level: 'Advanced', experience: 7, icon: 'flame', iconLibrary: 'lucide' },
    { name: 'Vercel', level: 'Expert', experience: 9, icon: 'triangle', iconLibrary: 'lucide' },
    { name: 'VS Code', level: 'Expert', experience: 10, icon: 'code', iconLibrary: 'lucide' },
    { name: 'Eclipse', level: 'Intermediate', experience: 6, icon: 'moon', iconLibrary: 'lucide' },
    { name: 'Render', level: 'Advanced', experience: 7, icon: 'images/android-chrome-512x512.png', iconLibrary: 'custom' }, // Custom image for Render
];

// Populate skills section
const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');
    skillCard.innerHTML = `
        <div class="skill-icon">
            ${skill.iconLibrary === 'lucide'
                ? `<div data-lucide="${skill.icon}"></div>`  // Lucide icons
                : skill.iconLibrary === 'custom' 
                    ? `<img src="${skill.icon}" alt="${skill.name} icon" class="custom-skill-icon"/>` // Custom image
                    : `<i class="fab fa-${skill.icon}"></i>` // Font Awesome icons
            }
        </div>
        <div class="skill-name">${skill.name}</div>
        
    `;
    //these goes after skill.name but inside of " `; ". ---->>>>>>
    // <div class="skill-level">Level: ${skill.level}</div>
    //     <div class="skill-experience">Experience: ${skill.experience}/10</div>
    //     <div class="experience-bar">
    //         <div class="experience-fill" style="width: ${skill.experience * 10}%;"></div>
    //     </div>
    skillsGrid.appendChild(skillCard);
});

// Initialize Lucide icons
lucide.createIcons();



// Projects data
const projects = [
    {
        name: 'Proshop',
        description: 'A full-stack e-commerce application with admin panel and PayPal integration.',
        image: '/placeholder.svg?height=300&width=500',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap'],
        github: 'https://github.com/yourusername/proshop',
        live: 'https://mmk-shop.onrender.com',
    },
    {
        name: 'Airbnb Clone',
        description: 'A full-stack Airbnb clone with modern UI and cloud image storage.',
        image: '/placeholder.svg?height=300&width=500',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Cloudinary'],
        github: 'https://github.com/yourusername/airbnb-clone',
        live: 'https://mmbnb.vercel.app',
    },
    {
        name: 'Shazzz',
        description: 'A static personal portfolio website showcasing the experiences and establishments of Shazzz.',
        image: '/placeholder.svg?height=300&width=500',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/yourusername/shazzz',
        live: 'https://shazzz.onrender.com',
    },
    {
        name: 'Netflix Clone',
        description: 'A Netflix clone built with React and TMDB API integration.',
        image: '/placeholder.svg?height=300&width=500',
        technologies: ['React', 'Node.js', 'CSS', 'TMDB API'],
        github: 'https://github.com/yourusername/netflix-clone',
        live: 'https://mmkflix.vercel.app',
    },
    {
        name: 'Nisahs',
        description: 'A modern 3D business portfolio for a premium spice brand.',
        image: '/placeholder.svg?height=300&width=500',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
        github: 'https://github.com/yourusername/nisahs',
        live: 'https://nisahs.vercel.app',
    },
    {
        name: 'ToDo App',
        description: 'A modern todolist application.',
        image: 'images/screencapture-mmk-todoapp-vercel-app-2024-10-24-06_39_05.png',
        technologies: ['React', 'CSS'],
        github: 'https://github.com/muhammedmuneerk/mmk-todoapp',
        live: 'https://mmk-todoapp.vercel.app',
    },
];

// Populate projects section
const projectGrid = document.querySelector('.project-grid');
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.dataset.project = `project${index + 1}`;
    projectCard.innerHTML = `
        <div class="project-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <button class="btn view-project">View Project</button>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Project modal functionality
const modal = document.getElementById('project-details');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.getElementsByClassName('close')[0];
const liveSiteBtn = document.getElementById('live-site-btn');
const viewSiteBtn = document.getElementById('view-site-btn');
const sitePreview = document.getElementById('site-preview');
const siteIframe = document.getElementById('site-iframe');
const closePreviewBtn = document.getElementById('close-preview');

document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectCard = e.target.closest('.project-card');
        const projectIndex = parseInt(projectCard.dataset.project.slice(-1)) - 1;
        const project = projects[projectIndex];
        modalTitle.textContent = project.name;
        modalImage.src = project.image;
        modalDescription.textContent = project.description;
        liveSiteBtn.href = project.live;
        siteIframe.src = '';
        sitePreview.style.display = 'none';
        modal.style.display = 'block';
    });
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
};

liveSiteBtn.onclick = (e) => {
    e.preventDefault();
    window.open(liveSiteBtn.href, '_blank');
};

viewSiteBtn.onclick = () => {
    siteIframe.src = liveSiteBtn.href;
    sitePreview.style.display = 'block';
};

closePreviewBtn.onclick = () => {
    sitePreview.style.display = 'none';
    siteIframe.src = '';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Form submission
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';

    try {
        const response = await fetch('https://formspree.io/f/mdkooekk', {
            method: 'POST',
            body: JSON.stringify({
                ...data,
                _replyto: 'muhammedmuneerk15@gmail.com'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
            formStatus.classList.add('success');
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formStatus.textContent = 'Oops! There was a problem submitting your form. Please try again.';
        formStatus.classList.add('error');
    } finally {
        // Re-enable submit button and remove loading state
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.querySelector('.btn-text').textContent = 'Send Message';
        formStatus.classList.remove('hidden');

        // Hide status message after 5 seconds
        setTimeout(() => {
            formStatus.classList.add('hidden');
            formStatus.classList.remove('success', 'error');
        }, 5000);
    }
});

// Initialize Lucide icons
lucide.createIcons();


// Added CSS for modal buttons
const style = document.createElement('style');
style.innerHTML = `
.modal-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

.modal-buttons .btn {
    min-width: 120px;
}
`;
document.head.appendChild(style);