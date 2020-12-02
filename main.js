window.addEventListener("scroll", preventMotion, false);
function preventMotion(event)
{
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}
//center circle animation

const circle = document.getElementsByClassName('circle')[0]


document.addEventListener('mousemove', (e) => {
    let coteOpp = 0, coteAdj = 0, angle = 0;
    if (e.pageX > window.innerWidth * 0.4 && e.pageY < window.innerHeight * 0.65) {
        coteOpp = e.pageX - window.innerWidth * 0.4
        coteAdj = window.innerHeight * 0.65 - e.pageY
        angle = Math.atan(coteOpp / coteAdj) * (180 / Math.PI)
    }
    if (e.pageX > window.innerWidth * 0.4 && e.pageY > window.innerHeight * 0.65) {
        coteOpp = window.innerHeight * 0.35 - (window.innerHeight - e.pageY)
        coteAdj = e.pageX - window.innerWidth * 0.4
        angle = 90 + Math.atan(coteOpp / coteAdj) * (180 / Math.PI)
    }
    if (e.pageX < window.innerWidth * 0.4 && e.pageY > window.innerHeight * 0.65) {
        coteOpp = window.innerWidth * 0.4 - e.pageX
        coteAdj = window.innerHeight * 0.35 - (window.innerHeight - e.pageY)
        angle = 180 + Math.atan(coteOpp / coteAdj) * (180 / Math.PI)
    }
    if (e.pageX < window.innerWidth * 0.4 && e.pageY < window.innerHeight * 0.65) {
        coteOpp = window.innerHeight * 0.65 - e.pageY
        coteAdj = window.innerWidth * 0.4 - e.pageX
        angle = 270 + Math.atan(coteOpp / coteAdj) * (180 / Math.PI)
    }
    circle.style.transform = `rotate(${angle}deg)`
    if (angle > 359.5 || angle < 0.5) {
        circle.style.transition = 'none'
    }
})

//expanding sections onclick

let home = document.getElementById('main-page')
let closes = document.getElementsByClassName('close')
let categories = document.getElementsByClassName('category')

let aboutSection = document.getElementById('section1')
let projectsSection = document.getElementById('section2')
let contactSection = document.getElementById('section3')

let aboutPage = document.getElementById('about-details')
let projectsPage = document.getElementById('projects-details')
let contactPage = document.getElementById('contact-details')

let aboutDiv = document.getElementById('about-page-section')
let projectsDiv = document.getElementById('projects-page-section')
let contactDiv = document.getElementById('contact-page-section')

let aboutPageContent = document.getElementById('about-content')
let projectsPageContent = document.getElementById('square')
let contactPageContent = document.getElementById('contact-content')

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', () => {

        closes[i].classList.add('show')
        closes[i].classList.remove('hide')
        home.classList.add('opaque-background')
        if (i === 0) {
            aboutSection.classList.add('about-leave')
            aboutSection.classList.remove('about-enter')
            aboutPageContent.classList.add('circle-grow')
            setTimeout(() => {
                aboutPage.classList.add('expand-true')
                aboutPage.classList.remove('expand-false')
            }, 500)
            setTimeout(() => {
                aboutDiv.classList.remove("hide")
                aboutDiv.classList.add("show")
            }, 1500)
        }
        if (i === 1) {
            projectsSection.classList.remove("projects-enter")
            projectsSection.classList.add("projects-leave")
            projectsPageContent.classList.add('projects-circle-grow')
            setTimeout(() => {
                projectsPage.classList.add('expand-true')
                projectsPage.classList.remove('expand-false')
            }, 500)
            setTimeout(() => {
                projectsDiv.classList.remove("hide")
                projectsDiv.classList.add("show")
            }, 1500)
        }
        if (i === 2) {
            contactSection.classList.add('contact-leave')
            contactSection.classList.remove('contact-enter')
            contactPageContent.classList.add('circle-grow')
            setTimeout(() => {
                contactPage.classList.add('expand-true')
                contactPage.classList.remove('expand-false')
            }, 500)
            setTimeout(() => {
                contactDiv.classList.remove("hide")
                contactDiv.classList.add("show")
            }, 1500)


        }

    })
    closes[i].addEventListener('click', () => {
        home.classList.remove('opaque-background')

        if (i === 0) {
            aboutDiv.classList.add("hide")
            aboutDiv.classList.remove("show")
            // aboutPageContent.classList.remove('circle-grow')

            setTimeout(() => {
                aboutPage.classList.remove('expand-true')
                aboutPage.classList.add('expand-false')
            }, 800)
            setTimeout(() => {
                aboutSection.classList.remove('about-leave')
                aboutSection.classList.add('about-enter')
            }, 2000)

        }
        if (i === 1) {
            projectsDiv.classList.add("hide")
            projectsDiv.classList.remove("show")
            // projectsPageContent.classList.remove('projects-circle-grow')

            setTimeout(() => {
                projectsPage.classList.remove('expand-true')
                projectsPage.classList.add('expand-false')
            }, 800)
            setTimeout(() => {
                projectsSection.classList.add("projects-enter")
                projectsSection.classList.remove("projects-leave")
            }, 2000)


        }
        if (i === 2) {

            contactDiv.classList.add("hide")
            contactDiv.classList.remove("show")
            // contactPageContent.classList.remove('circle-grow')

            setTimeout(() => {
                contactPage.classList.remove('expand-true')
                contactPage.classList.add('expand-false')
            }, 800)
            setTimeout(() => {
                contactSection.classList.remove('contact-leave')
                contactSection.classList.add('contact-enter')
            }, 2000)
        }

    })
}

//project card function

const project = ([titleContent, descriptionContent, techContent, video, link1, link2]) => {
    const project = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = titleContent;
    const description = document.createElement('h2')
    description.textContent = descriptionContent;
    const tech = document.createElement('h2')
    tech.innerHTML = techContent;
    //screenshots
    let video1 = document.createElement('video')
    video1.src = video
    video1.loop = true
    video1.autoplay = true
    video1.mute = true
    //button code
    const buttonDiv = document.createElement('div')
    const toCode = document.createElement('button')
    toCode.textContent = 'To Code'
    const aCode = document.createElement('a')
    aCode.href = link1;
    aCode.target = '_blank';
    aCode.appendChild(toCode)
    //button demo
    const toDemo = document.createElement('button')
    toDemo.textContent = 'To Demo'
    const aDemo = document.createElement('a')
    aDemo.href = link2;
    aDemo.target = '_blank';
    aDemo.appendChild(toDemo)
    buttonDiv.appendChild(aCode)
    buttonDiv.appendChild(aDemo)
    buttonDiv.classList.add('button-wrapper')
    //appending to project div
    project.appendChild(title)
    project.appendChild(description)
    project.appendChild(tech)
    project.appendChild(video1)
    project.appendChild(buttonDiv)
    projectsPageContent.appendChild(project)
    project.classList.add('project')
}

const one = ['The Spacesuit Store',
    'A responsive single page application for a fictional store that sells spacesuits.',
    'Built with React.js (with hooks), Node JS (Express, Nodemailer), and using Sass as a CSS preprocessor. <br/><br/> Features: Contact Form with validation that sends a reception email to the client and a notification to the site owner', './screenshots/space-mobile.mov', 'https://github.com/marine-bre/the-spacesuit-store', 'https://the-spacesuit-store.herokuapp.com/']

const two = ['Movie Finder',
    'An app useful for couples who cannot find a movie to watch! After connecting to the app from their own devices and completing a quiz, the app will offer movie suggestions.',
    'Built with React.js (with React hooks, React Portal), Node.js (Express, Socket.io), Bootstrap. <br/><br/> Features: Fetching data from a public API & using Socket.io rooms', './screenshots/movie.mov', 'https://github.com/marine-bre/movieFinder', 'https://movie-finder-app-react.herokuapp.com/']

const three = ['TicTacToe',
    'A classic TicTacToe game against the computer with two levels of difficulty. Responsive for mobile screens.', 'Built with HTML5, CSS3, Vanilla JavaScript', './screenshots/tictactoe-mobile.mov', 'https://github.com/marine-bre/nebulabender', 'https://marine-bre.github.io/nebulabender/menu.html']

const first = project(one)
const second = project(two)
const third = project(three)
