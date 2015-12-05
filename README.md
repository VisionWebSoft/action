# action
Full scale responsive e-commerce/blog with some custom functionality.

## Folders
build
: Contains concatenated/minfied/uglified files for deployment to server. For debugging and testing, consider skipping concatenation, minification, etc. **No pull requests needed on this folder!** Only 'src' will be considered and 'build' will be overwritten prior to first test. It may be advisable to just add this section to .gitignore, or just leave these files as 'untracked.'

src
: Primarily where front-end work is done. Add HTML to the root (and create subfolders for additional HTML as needed). Within this folder, also notice *css* and *js*. These can be divided however - feel free to make as many 'sub-files' as desired. Again, all will be prepped for build anyway, so we have the freedom to organize 'src' in virtually any fashion, but perhaps limit the number of subfolders.

## Other Notes

1. Inside 'images,' images, create any necessary subfolders for clarity/organization. For example, 'carousel' folder or 'backgrounds' or 'logos' or 'animations.'
2. It is recommended that you use a task runner like Gulp or Grunt to seamlessly address: concatenation, linting, minification and image compression (e.g. imagemin). Note that all HTML files link to just 1 CSS and JS file (excluding CDN resources like jQuery). Therefore, if you do not use a task runner, then you may wish to change these links manually as you need. Before performing a pull request, please remove these. Even just commenting these out will be fine as Grunt/Gulp can remove the comments automatically for build/deployment.

For more information: https://udacity.github.io/git-styleguide/
