const circleElement = document.querySelector('.circle');
const blackcircleElement = document.querySelector('.blackcircle');
const craftingText = document.querySelector('.text-rgb-183-171-152');
const creativeText = document.querySelector('.text-rgb-255-98-0');
const sinceText = document.querySelector('.text-rgb-183-171-152:nth-of-type(3)');
const yearText = document.querySelector('.text-rgb-183-171-152:nth-of-type(4)');
const cornerIcon = document.querySelector('.corner-icon');
const ballIcon = document.querySelector('.vector-113');
const Menu = document.querySelector('.top-right-text');
const creativeIndustryText = document.querySelector('.text-rgb-255-98-0-1');
const node7CircleElement = document.querySelector('.work-top-container-node8');
const circleTextElement = document.querySelector('.circle-text');

const mouse = { x: 0, y: 0 },
    circle = { x: 0, y: 0 };



// Update mouse coordinates on mouse move
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Speed factor for smooth movement
const speed = 0.07;

const tick = () => {
    // Smoothly update circle position to follow the mouse
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    // Update circle element's position to center the mouse pointer
    circleElement.style.transform = `translate(${circle.x - circleElement.offsetWidth / 2}px, ${circle.y - circleElement.offsetHeight / 2}px)`;

    // Call function on next frame
    window.requestAnimationFrame(tick);
}

tick();

/* const applyHoverEffect = (element) => {
    if (!element) {
        console.error('Element not found:', element);
        return;
    }

    element.addEventListener('mouseenter', () => {
        console.log('Mouse entered:', element);
        circleElement.style.width = '500px'; // New size on hover
        circleElement.style.height = '500px';
    });

    element.addEventListener('mouseleave', () => {
        console.log('Mouse left:', element);
        circleElement.style.width = '40px'; // Original size
        circleElement.style.height = '40px';
        circleElement.style.mixBlendMode = 'normal'; // Original size
    });
};*/


//blackcircle

 node7CircleElement.addEventListener('mouseenter', () => {
     console.log('Mouse entered:', node7CircleElement);
     circleElement.style.width = '120px'; // New size on hover
     circleElement.style.height = '120px';
     circleElement.style.backgroundColor = 'black';
     circleElement.style.opacity = '0.9';
     circleTextElement.style.display = 'block'; // Show text
 });

 node7CircleElement.addEventListener('mouseleave', () => {
     circleElement.style.width = '40px'; // New size on hover
     circleElement.style.height = '40px';
     circleElement.style.backgroundColor = '#ff6200';
     circleTextElement.style.display = 'none'; // Hide text
 });

// Apply hover effect to each text element
//applyHoverEffect(craftingText);
//applyHoverEffect(creativeText);
//applyHoverEffect(sinceText);
//applyHoverEffect(yearText);

function applyParallaxEffect(elementSelector, movement, hoverImageSrc, originalImageSrc) {
    const element = document.querySelector(elementSelector);

    if (!element) return; // Exit if the element is not found

    console.log('Applying parallax effect to:', elementSelector);
    console.log('Element found:', element);

    if (typeof TweenMax === 'undefined') {
        console.error('TweenMax is not loaded.');
    } else {
        console.log('TweenMax is loaded.');
    }

    element.addEventListener('mouseenter', () => {
        TweenMax.to(element, 0.3, { scale: 1 });
        element.style.cursor = 'pointer';
        circleElement.style.width = '0px';
        circleElement.style.height = '0px'; // Show hand cursor
        if (hoverImageSrc) element.src = hoverImageSrc; // Change image on hover
    });

    element.addEventListener('mouseleave', () => {
        TweenMax.to(element, 0.3, { scale: 1, x: 0, y: 0 }); // Revert to original position
        element.style.cursor = 'default'; // Revert cursor
        circleElement.style.width = '40px';
        circleElement.style.height = '40px';
        if (originalImageSrc) element.src = originalImageSrc; // Revert image
    });

    element.addEventListener('mousemove', (e) => {
        callParallax(e, element, movement);
    });

    function callParallax(e, target, movement) {
        const boundingRect = target.getBoundingClientRect();
        const relX = e.pageX - boundingRect.left;
        const relY = e.pageY - boundingRect.top - window.scrollY;// Adjust for scroll position

        TweenMax.to(target, 0.3, {
            x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
            y: (relY - boundingRect.height / 2) / boundingRect.width * movement,
            ease: Power2.easeOut
        });
    }
}

// Example usage:
applyParallaxEffect('.corner-icon', 80, 'images/orangeIcons/AdarshlogoOrange.svg', 'images/AdarshLogo.svg');
applyParallaxEffect('.vector-113', 40, 'images/orangeIcons/vector-113Org.svg', 'images/vector-113.svg');
applyParallaxEffect('.vector-114', 30, 'images/orangeIcons/vector-114Org.svg', 'images/vector-114.svg');
applyParallaxEffect('.vector-115', 30, 'images/orangeIcons/vector-115Org.svg', 'images/vector-115.svg');
applyParallaxEffect('.vector-116', 30, 'images/orangeIcons/vector-116Org.svg', 'images/vector-116.svg');


//hide circle on About
Menu.addEventListener('mouseenter', () => {
    TweenMax.to(Menu, 0.3, { scale: 1 });
    Menu.style.cursor = 'pointer';
    circleElement.style.width = '0px';
    circleElement.style.height = '0px'; // Show hand cursor
});

Menu.addEventListener('mouseleave', () => {
    TweenMax.to(Menu, 0.3, { scale: 1, x: 0, y: 0 }); // Revert to original position
    Menu.style.cursor = 'default'; // Revert cursor
    circleElement.style.width = '40px';
    circleElement.style.height = '40px';
});

// Parallax effect for text and image
const parallaxElements = [
    document.querySelector('.image-2-13')
    //document.querySelector('.node4')
];

const parallaxFactor = 0.5; // Adjust this value to change the parallax intensity

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    parallaxElements.forEach(element => {
        if (element) {
            const offset = scrollPosition * parallaxFactor;
            element.style.transform = `translateY(${offset}px)`;
        }
    });
});

// text scrolling effect

gsap.registerPlugin(ScrollTrigger)

//   const splitTypes = document.querySelectorAll('.text-27, .text-34')

// Select all text elements except the specific one to exclude
const textElements = document.querySelectorAll('.text-27:not(.text-rgb-255-98-0-1)');

// Create the animation for all other text elements
textElements.forEach((element) => {
    const text = new SplitType(element, { types: 'words' });

    gsap.fromTo(text.words,
        { opacity: 0.20, y: 2 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                markers: false,
                toggleActions: 'play none none reverse'
            }
        }
    );
});


const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)

})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// what i do hover effect

//gsap.registerPlugin(ScrollTrigger);

const text34Elements = gsap.utils.toArray('.work-top-text');

text34Elements.forEach((element) => {
    const text = new SplitType(element, { types: 'chars' });

    gsap.fromTo(text.chars,
        { opacity: 0.20, y: 2 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                end: 'top 65%',
                scrub: true,
                markers: false,
                toggleActions: 'play none none reverse'
            }
        }
    );
});


 
const lenis1 = new Lenis()

lenis1.on('scroll', (e) => {
    console.log(e)

})

function raf(time) {
    lenis1.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// experienceElements hover effect

//gsap.registerPlugin(ScrollTrigger);

const experienceElements = gsap.utils.toArray('.overlay-text-secondary-node4');

experienceElements.forEach((element) => {
    const text = new SplitType(element, { types: 'words' });

    gsap.fromTo(text.words,
        { opacity: 0.20, y: 2 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                markers: false,
                toggleActions: 'play none none reverse'
            }
        }
    );
});


 
const lenis2 = new Lenis()

lenis2.on('scroll', (e) => {
    console.log(e)

})

function raf(time) {
    lenis2.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// experienceElements hover effect

//gsap.registerPlugin(ScrollTrigger);

const artistSectionElements = gsap.utils.toArray('.text-27-node6');

artistSectionElements.forEach((element) => {
    const text = new SplitType(element, { types: 'words' });

    gsap.fromTo(text.words,
        { opacity: 0.20, y: 2 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                markers: false,
                toggleActions: 'play none none reverse'
            }
        }
    );
});


 
const lenis3 = new Lenis()

lenis3.on('scroll', (e) => {
    console.log(e)

})

function raf(time) {
    lenis3.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const text18Element = document.querySelector('.text-18');
const text19Element = document.querySelector('.text-19');
const text17Element = document.querySelector('.text-17');
const node4Element = document.querySelector('.node-4');
const node10Element = document.querySelector('.node-10');
const node2Element = document.querySelector('.node-2');
const profileIconElement = document.querySelector('.corner-icon');
const node1Element = document.querySelector('.node-1');

//icon links
const vector113Element = document.querySelector('.vector-113');
const vector114Element = document.querySelector('.vector-114');
const vector115Element = document.querySelector('.vector-115');
const vector116Element = document.querySelector('.vector-116');

//connect links
//const vector113Element = document.querySelector('.vector-113');
//const vector114Element = document.querySelector('.vector-114');
//const vector115Element = document.querySelector('.vector-115');
//const vector116Element = document.querySelector('.vector-116');

text18Element.addEventListener('click', () => {
    node4Element.scrollIntoView({ behavior: 'smooth' });
    text18ElementId.style.color = '#f2e3cc';
    text17ElementId.style.color = '#8B806E';
    text19ElementId.style.color = '#8B806E';
});

text17Element.addEventListener('click', () => {
    node2Element.scrollIntoView({ behavior: 'smooth' });
    text17ElementId.style.color = '#f2e3cc';
    text18ElementId.style.color = '#8B806E';
    text19ElementId.style.color = '#8B806E';
});

profileIconElement.addEventListener('click', () => {
    node1Element.scrollIntoView({ behavior: 'smooth' });
});

text19Element.addEventListener('click', () => {
    node10Element.scrollIntoView({ behavior: 'smooth' });
    text19ElementId.style.color = '#f2e3cc';
    text18ElementId.style.color = '#8B806E';
    text17ElementId.style.color = '#8B806E';
});


vector113Element.addEventListener('click', () => {
    window.open('https://dribbble.com/adarshkiran', '_blank'); // Opens the URL in a new tab
});

vector114Element.addEventListener('click', () => {
    window.open('https://www.instagram.com/adarshkiran89/', '_blank'); // Opens the URL in a new tab
});

vector115Element.addEventListener('click', () => {
    window.open('https://www.behance.net/adarshkiran', '_blank');    // Opens the URL in a new tab
});

vector116Element.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/adarsh-kiran-narayanadas-28ab7165/', '_blank'); // Opens the URL in a new tab
});


//text hover effect
const text17ElementId = document.getElementById('text-17-hover');
const text18ElementId = document.getElementById('text-18-hover');
const text19ElementId = document.getElementById('text-19-hover');

// Select all sections or elements you want to observe
const sections = document.querySelectorAll('.node-1, .node-2, .node-3, .node-4, .node-5, .node-6, .node-7, .node-8, .node-9, .node-10');

const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Currently in view:', entry.target.className);

                switch (entry.target.className) {
                    case 'node-1' || 'node-2' || 'node-3':
                        text17ElementId.style.color = '#f2e3cc';
                        text18ElementId.style.color = '#8B806E';
                        text19ElementId.style.color = '#8B806E';
                        break;
                    case 'node-4' || 'node-5' || 'node-6' || 'node-7':
                        text18ElementId.style.color = '#f2e3cc';
                        text17ElementId.style.color = '#8B806E';
                        text19ElementId.style.color = '#8B806E';
                        break;
                    case 'node-10':
                        text19ElementId.style.color = '#f2e3cc';
                        text18ElementId.style.color = '#8B806E';
                        text17ElementId.style.color = '#8B806E';
                        break;
                }
            }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

//circle animation
const mask = document.getElementById('mask-text-node1');
//const hoverText = document.getElementById('crafting-text');
const hoverText = document.getElementById('orginal-text-node1');
let isHovered = false;
let mouseX = 0;
let mouseY = 0;
let targetSize = 0;
let currentSize = 0;
let animationFrame;

// Smooth size interpolation
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

// Update mouse position with requestAnimationFrame for smooth animation
function updateMaskPosition() {
    // Smooth size update
    currentSize = lerp(currentSize, targetSize, 0.1);
    
    // Update clip-path with centered position
    mask.style.clipPath = `circle(${currentSize}px at ${mouseX}px ${mouseY}px)`;
 
    animationFrame = requestAnimationFrame(updateMaskPosition);
}

// Update mouse position
document.addEventListener('mousemove', (e) => {
    // Get the position relative to the viewport
    mouseX = e.clientX;
    mouseY = e.clientY + window.scrollY; // Adjust for scroll position
    
    if (!animationFrame) {
        updateMaskPosition();
    }
});

// Handle hover state
hoverText.addEventListener('mouseenter', () => {
    const screenWidth = window.screen.width;
    isHovered = true;
    targetSize = screenWidth/8;
});

hoverText.addEventListener('mouseleave', () => {
    isHovered = false;
    targetSize = 0;
});

// Initialize mask position
function initMask() {
    const rect = hoverText.getBoundingClientRect();
    mouseX = rect.left + rect.width / 2;
    mouseY = rect.top + rect.height / 2;
    updateMaskPosition();
}

// Initialize on load
window.addEventListener('load', initMask);

// Clean up animation frame when leaving the page
window.addEventListener('beforeunload', () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
}); 


document.addEventListener("DOMContentLoaded", function() {
    let progress = document.getElementById('progress');
    let loadingScreen = document.getElementById('loading-screen');
    let offset = 1256.6;
    let interval = setInterval(function() {
        if (offset <= 0) {
            clearInterval(interval);
            loadingScreen.style.display = 'none'; // Hide loading screen
            document.querySelector('.Main-container').style.display = 'block'; // Show main content
            
            // CREATIVE : Split Lines
            const effectOnCreative = gsap.timeline({ paused: true });
            effectOnCreative.to(".text-rgb-255-98-0 .line-inner", {
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: {
                amount: 0.3
                }
            });

            effectOnCreative.restart();

            // SINCE: Split Lines
            const SinceEffect = gsap.timeline({ paused: true });
            SinceEffect.to(".text-rgb-183-171-152 .line-inner", {
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: {
                amount: 0.3
                }
            });

            SinceEffect.restart();
            
        } else {
            offset -= 12.566; // Decrease offset to simulate progress
            progress.style.strokeDashoffset = offset;
        }
    }, 30); // Adjust the speed of the loading animation
});


function scrollToNode10() {
    node10Element.scrollIntoView({ behavior: 'smooth' });
}

function scrollToNode2() {
    node2Element.scrollIntoView({ behavior: 'smooth' });
}

function scrollToNode4() {
    node4Element.scrollIntoView({ behavior: 'smooth' });
}

function scrollToNode1() {
    node1Element.scrollIntoView({ behavior: 'smooth' });
}

function behance() {
    window.open('https://www.behance.net/adarshkiran', '_blank');
}

function dribbble() {
    window.open('https://dribbble.com/adarshkiran', '_blank');
}

function linkedin() {
    window.open('https://www.linkedin.com/in/adarsh-kiran-narayanadas-28ab7165/', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/adarshkiran89/', '_blank');
}

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});



