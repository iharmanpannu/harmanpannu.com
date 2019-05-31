import React from 'react';
import Footer from '../Footer';
import Myweb from '../../asset/mywebsite.png';
import Jamming from '../../asset/jamming.jpg';
import Ravenous from '../../asset/ravenous.jpg';
import GifSearch from '../../asset/gif-search.jpg';
import Taico from '../../asset/taico.jpg';
import Gif from '../../asset/giphy.gif';
import Form from '../../asset/form.gif';
import js100 from '../../asset/100.png';
import angapp from '../../asset/ang-app.png';

const projects = [
  {
    title: 'Simple Angular App ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/ang-app',
    link: 'https://ang-app.surge.sh/',
    desc:
      'Simple goal list app in Angular 5: Build using Angular Cli and Angular Animations',
    src: angapp
  },
  {
    title: 'Jamming ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/jamming-app',
    link: 'http://jamwithme.surge.sh/',
    desc:
      "Spotify Track search and Save Playlist Web App : <br /> Build using Spotify API'" +
      's and React JS',
    src: Jamming
  },
  {
    title: 'Ravenous ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/ravenous',
    link: 'https://iharmanpannu.github.io/ravenous',
    desc:
      'A restaurant search Web App created using Yelp API : Built With: React JS, Yelp ' +
      "API's, fetch",
    src: Ravenous
  },
  {
    title: 'Gif Search ',
    LiveDemo: 'Live Demo',

    github: 'https://github.com/iharmanpannu/gif-search',
    link: 'http://gifs-search.surge.sh',
    desc: "Giphy Search Web App created using Giphy.com API's and React JS",
    src: GifSearch
  },
  {
    title: 'Reddit Me',
    LiveDemo: 'Live Demo',

    github: 'https://github.com/iharmanpannu/RedditMe',
    link: 'https://github.com/iharmanpannu/RedditMe',
    desc:
      'A web app build in Pure ES6, fetch and Bootstrap to search articles in Reddit.com',
    src: 'https://media.giphy.com/media/fGO2HS1aYp7RzI5LIs/giphy.gif'
  },
  {
    title: 'Taico Restaurant ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/taico-restaurant',
    link: 'http://taicorestaurant.surge.sh',
    desc:
      'Restaurant Business Parallax Website <br />Built With: jQuery, HTML, CSS Transitio' +
      'ns and CSS Library Animations.css',
    src: Taico
  },
  {
    title: 'Design Agency ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/Design-Solutions',
    link: 'https://designagency.surge.sh/',
    desc:
      'Another side project website for design agency. <br />Built With: jQuery, HTML, CSS Transitio' +
      'ns and CSS Animations',
    src: Gif
  },
  {
    title: 'Find an Agent ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/find-agent',
    link: 'http://findagent.surge.sh ',
    desc:
      'Responsive Static Real Estate Agent Company website.  <br />Built With: HTML, SA' +
      'SS and CSS Transitions',
    src: 'https://media.giphy.com/media/3oFzmkH3TIrHbmVTDW/giphy.gif'
  },
  {
    title: 'Simple Portfolio ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/td-project-two',
    link: 'http://project-one-td.surge.sh',
    desc:
      'Frontend Tech Degree Project 1 : <br/> Built with: HTML, CSS Flexbox layout syst' +
      'em and CSS Transitions ',
    src: 'https://media.giphy.com/media/xULW8vXxaNz9xlRS3C/giphy.gif'
  },
  {
    title: 'Responsive Portfolio ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/td-project-one',
    link: 'http://td-project-2.surge.sh/',
    desc:
      'Frontend Tech Degree Project 2 : <br/> Built with: HTML, CSS Grid and Flexbox la' +
      'yout system. Also used CSS Animations.',
    src: 'https://media.giphy.com/media/l0HTYUDLAi6Nuyruw/giphy.gif'
  },
  {
    title: 'jQuery Blog ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/jQueryBlog',
    link: 'http://jqueryblog.surge.sh/',
    desc:
      'jQuery Blog where user can type in input field and immediately see results on the webpage : <br/> Built with: jQuery, HTML, CSS',
    src: 'https://media.giphy.com/media/3o7WIJ9Oscwu3AW0H6/giphy.gif'
  },
  {
    title: 'A Responsive Form ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/td-project-3',
    link: 'http://thecodereview.surge.sh',
    desc:
      "A responsive sign up form for 'The Code Review' website. <br/> Built with: HTML, CSS, FlexBox ",
    src: Form
  },
  {
    title: '100 JavaScript Projects',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu/100-JavaScript-Projects',
    link: 'https://github.com/iharmanpannu/100-JavaScript-Projects',
    desc: 'Build 100 projects in JavaScript to be proficient in language.',
    src: js100
  },
  {
    title: 'Harmanpannu.com ',
    LiveDemo: 'Live Demo',
    github: 'https://github.com/iharmanpannu',
    link: 'https://harmanpannu.com/',
    desc:
      'My personal portfolio website : <br/> Built with: Gatsby JS (ReactJs), SCSS and ' +
      'Used library Particle JS for background animations.',
    src: Myweb
  }
];

const Project = () => (
  <div>
    <section className="projects">
      <h1>Projects</h1>
      {/* <img className="project-gifs" src={Myweb} alt="projects" /> */}
      <ul>
        {projects.map(project => (
          <li>
            <div className="float-left">
              <h3 className="project-
      title">
                <a
                  target="_blank"
                  href={project.link}
                  style={{
                    color: '#16a085'
                  }}
                >
                  {project.title}
                </a>
                <h4>
                  <a
                    target="_blank"
                    href={project.github}
                    style={{
                      color: '#585758',
                      fontWeight: '700'
                    }}
                  >
                    Github
                  </a>
                </h4>
                <h4>
                  <a
                    target="_blank"
                    href={project.link}
                    style={{
                      color: '#F06C7D'
                    }}
                  >
                    {project.LiveDemo}
                  </a>
                </h4>
              </h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: project.desc
                }}
              />
            </div>

            <div style={{ padding: '1em 0' }}>
              <a target="_blank" href={project.link}>
                <img
                  style={{ padding: '1em 0' }}
                  className="project-gifs"
                  src={project.src}
                  alt="projects"
                />
              </a>
              <hr />
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </section>
  </div>
);

export default Project;
