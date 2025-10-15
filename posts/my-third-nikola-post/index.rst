.. title: My Third Nikola Post
.. slug: my-third-nikola-post
.. date: 2025-10-15 15:36:32 UTC-04:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text

Write your post here.

You've encountered a configuration detail, not a real error. The good news is that your post was created successfully.

Let's break down what happened and how to fix it for the future.

The Problem: What is $EDITOR?

You used the command nikola new_post -e.

The -e flag is a shortcut that tells Nikola: "After you create the post file, please edit it for me by opening it in my default text editor."

Your system responded by saying it doesn't have a default editor configured. The $EDITOR environment variable is the system setting that stores this preference.

Because it didn't know which program to open (like VS Code, Vim, or Nano), Nikola stopped after creating the file and showed you that message.

The Immediate Solution: Edit Manually

The file is ready and waiting for you. Just like with your first post, you can simply:

Go to your code editor.

Open the newly created file: posts/my-second-nikola-post.rst.

Start writing your content.

The Permanent Fix: Set Your Default Editor

If you want the -e shortcut to work in the future, you can tell your Mac that VS Code is your preferred editor for the command line.

Open your terminal.

Run this command: This command adds a line to your shell's configuration file (.zshrc, which is the default for modern macOS).

code
Bash
download
content_copy
expand_less
echo 'export EDITOR="code --wait"' >> ~/.zshrc

code is the command for VS Code.

The --wait flag is important: it tells the terminal to wait until you have closed the file in VS Code before it continues.

Apply the changes. For the change to take effect, you need to either close and reopen your terminal or run this command in your existing terminal window:

code
Bash
download
content_copy
expand_less
source ~/.zshrc

Now, the next time you run nikola new_post -e, it will automatically open the new file in VS Code.
