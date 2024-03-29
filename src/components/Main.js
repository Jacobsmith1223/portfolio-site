import PropTypes from 'prop-types'
import React from 'react'
import pic01 from './profile-pic.jpg'
import pic02 from './gamebuddies.png'
import pic03 from './fakeestate.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          React • Node.js • PostgreSQL • Express • Sockets • HTML5 • Axios • Bcrypt
          </p>
          <h3>September 2019 - Game Buddies</h3>
          <p>
            A personally built project aimed to connect gamers. Users can create a profile and join specific forums to begin chatting about the different games. 
          </p>
          <p>Live Site: gamebuddieslfg.com</p>
          <p>GitHub Repo: https://github.com/Jacobsmith1223/Game-Buddies-LFG </p>

          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
          React • Node.js • PostgreSQL • Express • Mapbox • HTML5 • Axios • Bcrypt
          </p>
          <h3>October 2019 - Real Estate of Utah</h3>
          <p>
            A group built project created to assist both realtors and homebuyers in their daily efforts to find and sell homes. Realtors can log in and add and delete homes. Homebuyers can browse the homes and find the best option for them 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          After working as a sales professional in the SaaS space for several years, I decided to change career paths and become a web developer. Working as a sales professional in both start-ups and large corporations, taught me how to collaborate across teams, communicate effectively, and meet a deadline month over month.
          </p>
          <p>
          Some of my strengths include, attacking problems efficiently and with a high attention to detail. I enjoy learning new things and live for the challenge of pushing myself to become an even better web developer.  
          </p>
          <p>
          When I am not developing, my passions include cars, the Utah Jazz, and spending time with my wife Rebecca and our two children
          </p>
          {close}
        </article>

        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <h2 className='skillsbd'>Languages</h2>
          <div className='skills'>
          <p>JavaScript</p> <span className='icon fa-circle'></span>
          <p>HTML5</p><span className='icon fa-circle'></span>
          <p>CSS3</p>
          </div>
          <h2 className='skillsbd'>Frameworks & Libraries</h2>
          <div className='skills'>
          <p>React</p><span className='icon fa-circle'></span>
          <p>Node.js</p><span className='icon fa-circle'></span>
          <p>Express.js</p><span className='icon fa-circle'></span>
          <p>Massive.js</p><span className='icon fa-circle'></span>
          <p>Redux.js</p><span className='icon fa-circle'></span>
          <p>React Redux</p><span className='icon fa-circle'></span>
          <p>Jest</p><span className='icon fa-circle'></span>
          
          
          </div>
          <h2 className='skillsbd'>Databases</h2>
          <div className='skills'>
          <p>PostgreSQL</p><span className='icon fa-circle'></span>
          </div>

          <h2 className='skillsbd'>Extra Technologies</h2>
          <div className='skills'>
          <p>Gatsby.js</p><span className='icon fa-circle'></span>
          <p>Axios</p><span className='icon fa-circle'></span>
          <p>Bcrypt</p><span className='icon fa-circle'></span>
          <p>Postman</p><span className='icon fa-circle'></span>
          
          
          <p>Git</p><span className='icon fa-circle'></span>
          <p>Netlify</p>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a href="mailto:jacob_smith1223@me.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jacob-smith1223/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jacobsmith1223"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
