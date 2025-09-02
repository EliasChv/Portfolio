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
                <iframe src="https://drive.google.com/file/d/1R_ErzHYjyhfGqYbmaPIvJngsEuzSTn69/preview" width="640" height="480" allow="autoplay"></iframe> <p style={ { display: "flex", justifyContent: "center" } }>
                    Or download my Resumé here:&emsp;
                    <a href="https://drive.google.com/uc?export=download&id=1R_ErzHYjyhfGqYbmaPIvJngsEuzSTn69">
                        Download (PDF)
                    </a>
                </p>

            
                <h1>
                     Curriculum Vitae
                </h1>
                <hr className="rounded"></hr>
                <p style={ { display: "flex", justifyContent: "center" } }>
                You can also view my CV directly below, for a more detailed showcase of my skills.
                </p>
                <iframe src="https://drive.google.com/file/d/1GgbgypmvCfwIUaXHjAiGzvWD0_pwkTFM/preview" width="640" height="480" allow="autoplay"></iframe> <p style={ { display: "flex", justifyContent: "center" } }>
                    Or download my CV here:&emsp;
                    <a href="https://drive.google.com/uc?export=download&id=1GgbgypmvCfwIUaXHjAiGzvWD0_pwkTFM">
                        Download (CV)
                    </a>
                </p>

                
            </article>
        </>
    )
}