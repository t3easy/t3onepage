lib.onepage = COA
lib.onepage {
	10 = COA 
	10 {		
		10 = COA 
		10 < lib.logo

		20 = HMENU
		20 {
			wrap = <nav class="navigation">|</nav>
	
			1 = TMENU
			1 {
				noBlur = 1
				expAll = 1
	
				NO = 1
				NO {
					wrapItemAndSub = <li>|</li>
					doNotLinkIt = 1
					
					stdWrap.cObject = CASE
					stdWrap.cObject {
						key.field = doktype
						default = TEXT
						default {
							typolink.parameter = #{field:subtitle}
							typolink.parameter.insertData = 1
							
							field = nav_title
							ifEmpty.field = title
							stdWrap.htmlSpecialChars = 1
							typolink.title.field = title // subtitle
						}
					}
				}
				wrap = <ul class="clearfix">|</ul>
			}
		}
		wrap = <header id="header"><div class="wrapper clearfix">|</div></header>
	}
	
	20 = CONTENT 
	20 {
		table = pages
		select.orderBy = sorting
		
		renderObj = COA
		renderObj {
			10 = CONTENT
			10 {
				table = tt_content
				select {
					pidInList.field = uid
					orderBy = sorting
				}
				wrap = <section id="{field:subtitle}">|</section>
				wrap.insertData = 1
			}
		}
	}
}