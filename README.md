# action
Full scale responsive e-commerce/blog with some custom functionality.

build
: Contains concatenated/minfied/uglified files for deployment to server. For debugging and testing, consider skipping concatenation, minification, etc. **No pull requests needed on this folder!** Only 'src' will be considered and 'build' will be overwritten prior to first test. It may be advisable to just add this section to .gitignore, or just leave these files as 'untracked.'

src
: Primarily where front-end work is done. Add HTML to the root (and create subfolders for additional HTML as needed). Within this folder, also notice *css* and *js*. These can be divided however - feel free to make as many 'sub-files' as desired. Again, all will be prepped for build anyway, so we have the freedom to organize 'src' in virtually any fashion, but perhaps limit the number of subfolders.
