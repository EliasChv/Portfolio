// import { useState } from 'react'
import data from "./assets/home/c++data.png"
import energy from "./assets/home/energy.png"
import watervalve from "./assets/home/watervalve.png"

function App() {
return (
  <>
    <article>
      	<header>
        	<a href="/">
          		<input type="button" value={ "Home" }/>
        	</a>
        	<a href="/resume">
          		<input type="button" value={ "Resumé" }/>
        	</a>
			<a href="/Credentials">
          		<input type="button" value={ "Credentials" }/>
        	</a>
			<a href="/Projects">
          		<input type="button" value={ "Projects" }/>
        	</a>
      	</header>
      	<section>
          	<h1>
            	Elias Chavelaz
          	</h1>
          	<hr className="rounded"></hr>
			<br/>
			<div className="icons">
				<a href="http://www.linkedin.com/in/elias-chavelaz">
					<svg viewBox="0 0 128 128">
						<path d="M 39.17 107 H 21.06 V 48.73 h 18.11 z m -9 -66.21 a 10.5 10.5 0 1 1 10.49 -10.5 a 10.5 10.5 0 0 1 -10.54 10.48 z M 107 107 H 88.89 V 78.65 c 0 -6.75 -0.12 -15.44 -9.41 -15.44 s -10.87 7.36 -10.87 15 V 107 H 50.53 V 48.73 h 17.36 v 8 h 0.24 c 2.42 -4.58 8.32 -9.41 17.13 -9.41 C 103.6 47.28 107 59.35 107 75 z"></path>
					</svg>
				</a>
				<a href="https://github.com/EliasChv">
					<svg viewBox="0 0 128 128">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
					</svg>
				</a>
				<a href="https://app.joinhandshake.com/profiles/tuuv6n">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.728 0 16.49 24h-4.583l1.87-10.532-4.743 3.893L7.856 24H3.272L7.51 0h4.582L9.806 13.012l4.729-3.862L16.145 0h4.583z"/>
					</svg>
				</a>
			</div>
			<p>
				Electrical Engineering Student at the University of Notre Dame. This is my portfolio website showcasing my projects, skills, and experience as a web developer, game designer and Electrical Engineer! Explore my projects, learn more about my professional journey, and connect with me through the sites above.
			</p>
  			<hr className="rounded"></hr>
      		<br/>
			<h4>
  				Realted Projects
    		</h4>
			<br/>
    		<div className="list">
    			<span className="horizontal">
					<span className="verticle">
						<a href="/energy-app">
							Matlab Energy Usage App 
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
							Using Matlab, and thousands of data values for nuclear, fossil fuel, renewable and hydroelectric energy our team constructed an app to allow users to cross compare different energy usages in states. The ultimate goal for this project is to bring awareness to the sources different states get their energy from as well as to quantify the large-scale usage and production of harmful fuels. The potential users in mind for this app are environmentalists, students, researchers, and lawmakers.
						</p>
					</span>
                	<img src={ energy }/>
                </span>

                <span className="horizontal">
					<span className="verticle">
						<a href="/data-visualization">
							C++ Data Visualization
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
							Final projectvisualizing the specifications of the Central Processing Unit (CPU) and the Graphics Processing Unit (GPU), with an aim to determine the trend of technological advancement in the processing units throughout the years as well as explore the correlation between the specifications and compare the specifications of CPU and GPU.
						</p>
					</span>
                	<img src={ data }/>
                </span>

                <span className="horizontal">
					<span className="verticle">
						<a href="/water-valve">
							Water Valve Fabrication
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-up-right" id="Arrow-Up-Right--Streamline-Feather" height="16" width="16">
								<path d="M4.375 10.625 10.625 4.375" stroke-width="1"></path>
								<path d="m4.375 4.375 6.25 0 0 6.25" stroke-width="1"></path>
							</svg>
						</a>
						<p>
							The goal is to design a system that is capable of releasing chlorinated water into nearby bodies which would disinfect bodies of water. Collaborating within a team of three, to design, test and develop the two prototypes below using Soild-Works. The prototypes had to be temperature, water, and stress resistant insuring it can efficiently close and open with minimal leakage.
						</p>
					</span>
                	<img src={ watervalve }/>
                </span>
              </div>
        </section>
	</article>
	</>
)}

export default App
