export default function Resume() {
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
                <h1>
                    Resumé
                </h1>
                <hr className="rounded"></hr>
                <p style={ { display: "flex", justifyContent: "center" } }>
                    You can view my resume directly below, which outlines my skills, education, and professional experience.
                </p>
                <iframe src="https://drive.google.com/file/d/1mrfw9SIzHmOpCZGkeGLz496ul8KgS6FB/preview" width="640" height="480" allow="autoplay"></iframe> <p style={ { display: "flex", justifyContent: "center" } }>
                    Or download my Resumé here:&emsp;
                    <a href="https://drive.google.com/uc?export=download&id=1sJRlg9IDy8cwv8iUYvSuHGspAtcL_pON">
                        Download (PDF)
                    </a>
                </p>
            </article>
        </>
    )
}