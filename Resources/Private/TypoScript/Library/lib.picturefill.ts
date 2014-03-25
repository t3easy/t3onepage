# picturefill rendering
tt_content.image.20.1.layout.picturefill {
	element (
		<span data-picture="">
        ###SOURCECOLLECTION###
        <noscript>
            <img src="###SRC###" ###PARAMS### ###ALTPARAMS######SELFCLOSINGTAGSLASH###>
        </noscript>
    </span>
	)
	source = <span data-src="###SRC###" data-media="###MEDIAQUERY###"</span>
}

tt_content.image.20.1.sourceCollection {
	small.maxW = 300px
	small.mediaQuery = (max-width: 400px)
	
	middle.maxW = 500px
	middle.mediaQuery = (min-width: 401px) AND (max-width: 600px)
	
	large.maxW = 900px
	large.mediaQuery = (min-width: 601px)
}

