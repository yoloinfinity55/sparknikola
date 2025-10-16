.. title: My Second Nikola Post
.. slug: my-second-nikola-post
.. date: 2025-10-15 15:32:56 UTC-04:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

That is a fantastic question that gets to the very heart of this specific workflow. You've noticed that Nikola is doing something different from the standard Git process you might be used to.

Here is the direct answer, followed by the crucial explanation of why.

The Direct Answer

No, you should not use "git push origin main" to update your live website. In your current setup, the main branch is effectively unused and outdated.

The difference between src and main is that src is your new, primary branch for your website's source code (your .rst files, conf.py, etc.), while main was just a temporary starting point.

The Critical Difference: Source Code vs. Generated Site

This is the most important concept: your Nikola project has two different parts, and they should be stored separately.

The Source (Your Recipe): This is the code you write. It's your .rst posts, your configuration in conf.py, and your images. This is your "work". In your new setup, this lives in the src branch.

The Output (The Cake): This is the final, generated website that Nikola builds. It's a folder full of HTML, CSS, and JS files. Your browser can read it, but you never edit it directly. This lives in the master branch.

Think of it this way: You don't want to store your raw ingredients and your finished cake in the same box.

Branch Name	Its Purpose	What's Inside It?	How Do You Update It?
src	Your Source Code	.rst files, conf.py	You work here. Use git add, git commit, git push origin src to back it up.
master	Your Live Website	The contents of the output/ folder (HTML, CSS)	Only with nikola github_deploy. This command builds the site and pushes it here.
main	Unused	An old version of your source code.	You don't. You can safely ignore it or even delete it.
What git push origin main Would Do

If you were to run git push origin main, you would be pushing your source code to the main branch on GitHub. Since your GitHub Pages is configured to look at the master branch, your live website would not change at all.

The Correct Workflow Summarized

Your process for updating your site will always be this:

Make sure you are on your source branch:

code
Bash
download
content_copy
expand_less
git checkout src

Create a new post or edit an existing one.

code
Bash
download
content_copy
expand_less
nikola new_post
# ...then edit the .rst file...

Deploy the website. This is the magic command that builds the site and pushes it to the master branch.

code
Bash
download
content_copy
expand_less
nikola github_deploy

(Optional, but good practice) Separately, back up the changes to your source code.

code
Bash
download
content_copy
expand_less
git add .
git commit -m "Added a new blog post about X"
git push origin src