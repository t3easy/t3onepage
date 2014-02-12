page = PAGE
page {

	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {
			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

			default = TEXT
			default.value = {$plugin.tx_t3onepage.filepaths.templates}main.html

			1 = TEXT
			1.value = {$plugin.tx_t3onepage.filepaths.templates}main.html

			2 = TEXT
			2.value = {$plugin.tx_t3onepage.filepaths.templates}home.html
		}
		partialRootPath = {$plugin.tx_t3onepage.filepaths.templates}Partials/
		layoutRootPath = {$plugin.tx_t3onepage.filepaths.templates}Layouts/
		variables {
			# Insert variables here
		}
	}

	# FavIcon
	shortcutIcon = {$plugin.tx_t3onepage.filepaths.images}Icons/favicon.ico

	# Include CSS Files
	includeCSS {
		style = {$plugin.tx_t3onepage.filepaths.css}style.css
		style.media = all
	}

	# Include JS Files
	includeJS {
		modernizr = {$plugin.tx_t3onepage.filepaths.javascript}vendor/modernizr-2.7.0-custom.min.js
	}

	includeJSFooter {
		webfont = {$plugin.tx_t3onepage.filepaths.javascript}vendor/webfont.js
		jquery = {$plugin.tx_t3onepage.filepaths.javascript}vendor/jquery-1.10.2.min.js
		responsivenav = {$plugin.tx_t3onepage.filepaths.javascript}vendor/responsive-nav.min.js
		custom = {$plugin.tx_t3onepage.filepaths.javascript}jquery.custom.js
	}

	# Meta
	meta {
		viewport = width=device-width, initial-scale=1.0
	}

}

# Google Analytics
[globalVar = LIT:1 = {$plugin.tx_t3onepage.settings.analyticsEnable}]
page.footerData.555 = TEXT
page.footerData.555.value (
<script>
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 ga('create', '{$plugin.tx_t3onepage.settings.analyticsUA}', '{$plugin.tx_t3onepage.settings.analyticsUrl}');
 ga('send', 'pageview');

</script>
)
[global]

## CE
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
	key.field = layout

	default = TEXT
	default.value = <div class="wrapper">|</div>

	101 = TEXT
	101.value = <div class="infos"><div class="wrapper">|</div></div>
}