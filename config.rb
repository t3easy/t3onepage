# Require any additional compass plugins here.
# Set this to the root of your project when deployed:

http_path = "/"
css_dir = "Resources/Public/Stylesheets"
sass_dir = "Resources/Private/Sass"
images_dir = "Resources/Public/Images"
javascripts_dir = "Resources/Public/JavaScript"
fonts_dir = "Resources/Public/Fonts"
generated_images_dir = "Resources/Public/Images"

#environment = :development
environment = :production

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
#output_style = :compact
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

asset_cache_buster :none
#asset_cache_buster {|*args| nil }
