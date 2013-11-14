###################################################
# Include all TypoScript files
###################################################

options {
    # RTE
    RTESmallHeight = 800
    RTESmallWidth = 800

    # cache
    clearCache.pages = 1
    clearCache.all = 1

    # save new
    saveDocNew = 1
	saveDocNew.tt_content = 1
	saveDocNew.pages = 1

    # page tree option
    pageTree {
        # only if checked "Ist Anfang der Web-Site"
        showDomainNameWithTitle = 1
        # pid
        showPageIdWithTitle = 1
    }

    # Makes sure the clipboard doesn't clear:
    saveClipboard = 0

    # Reduces the amount of clipboards from 4 to 1:
    clipboardNumberPads = 1
}

admPanel {
    enable.edit = 1

    # Force re-loading the cache for external TS
    override.tsdebug.forceTemplateParsing = 1
}

# Default User value
# @doc typo3.org/documentation/document-library/core-documentation/doc_core_tsconfig/4.7.0/view/1/3/
setup.defaults {
    titleLen = 80
    thumbnailsByDefault = 1
    edit_RTE = 1
    copyLevels = 10
    recursiveDelete = 10
    noOnChangeAlertInTypeFields = 0
    navFrameWidth = 150
    startModule = web_list
}

# Overridden User value
setup.override {
    startModule = list
}

# snippets.typo3.org/c/10/
mod.web_list {
    hideTables=static_template,static_countries,static_country_zones,static_currencies,static_languages,static_territories,static_taxes,static_markets
    itemsLimitSingleTable = 1000
    itemsLimitPerTable = 50
}

# show new pages hidden or not
TCAdefaults.pages.hidden = 0