# mod.SHARED {
# 	defaultLanguageFlag = de.gif
# 	defaultLanguageLabel = Deutsch
# }
# 
# # PAGE DEFAULT PERMISSIONS
# TCEMAIN.permissions {
# 
#     # Configure default permission for new created pages.
#     # do anything (default):
#     user = show,editcontent,edit,delete,new
# 
#     # do anything (normally "delete" is disabled)
#     group = show,editcontent,edit,delete,new
# 
#     # (normally everybody can do nothing)
#     everybody =
# 
#     # user: default user
#     # userid = 6
# 
#     # group _Users
#     groupid = 1
# }
# 
# // Full screen for bodytext (tt_content)
# TCEFORM.tt_content.bodytext.RTEfullScreenWidth= 100%
# 
# 
# TCEFORM.tt_content.layout.altLabels {
#     1 = Lightbox
#     2 = Grey
# }
# 
# TCEMAIN.table.tt_content {
#     disablePrependAtCopy = 1
#     disableHideAtCopy = 0
# }
# 
# TCEFORM.pages{
#   # remove "Frontend Layout" and "Backend Layout"
#   layout.disabled = 1
#   backend_layout.disabled = 1
#   backend_layout_next_level.disabled = 1
#   newUntil.disabled = 1
# }

TCEFORM.tt_content.layout{
	addItems {
		101 = infos
	}
}