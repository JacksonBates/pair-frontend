# How to contribute

Firstly, thanks for taking an interset in this project! You are already an awesome person.

I have never maintained a project before that has other contributors, so if things get bumpy, we'll all try to remain patient and forgiving with each other.

The good news is, even the most beginner level contributor can feel right at home here - we are all beginners. If you've been thinking 'how can I find a beginner friendly opensource project to contribute to that still has a small codebase that won't overwhelm me' this is the project for you!

## Table of Contents

- [You will need](#you-will-need)
- [Prefer a screencast?](#prefer-a-screencast)
- [Getting started](#getting-started)
- [Your first PR (Pull Request)](#your-first-pr-pull-request)
- [How to sync your local repo with the original repo](#how-to-sync-your-local-repo-with-the-original-repo)
- [Making real contributions](#making-real-contributions)


## You will need

+ A GitHub account
+ [Git installed on your system](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
+ [Node/NPM](https://nodejs.org/en/)
+ [MongoDB](https://www.mongodb.com/download-center)
+ Windows users should use `gitbash` as their terminal for working with Git.
+ Mac and Linux users can use any terminal they prefer.
+ A can-do attitude

## Prefer a screencast?

If you would rather see this process in action first, we have a 10 minute screencast tutorial available on YouTube:

[Your First GitHub Pull Request](https://www.youtube.com/watch?v=dSl_qnWO104)

## Getting started

+ Fork this repo before making any changes - you will be initially pushing commits to your fork, not this repo.
+ Create issues on **this** repo, not your fork, if you encounter bugs, non-ideal behaviour/css, or wish to request features.

## Your first PR (pull request)

To keep things beginner friendly, you can make a completely innocuous contribution first. You can add a comment to FIRST_PR_CLUB.md!

+ On your forked verision of the repo on GitHub, click the green 'clone or download' button and copy the link.
  + The link will look something like this: `https://github.com/jacksonbates/pair-frontend.git` (but with your username, not mine)
+ In the terminal write the following command to clone the repo. This will give you a local copy to work on:
  + `git clone <paste-the-link-of-your-repo.git-here>`
  + eg: `git clone https://github.com/jacksonbates/pair-frontend.git`
+ In your terminal navigate to the folder that was just created.
  + The command for this is `cd`
  + eg: `cd pair-frontend`
+ If your version of the repo is ever out of sync with the original repo, i.e. there are new commits on the master branch of the original that you don't have, you need to sync your repo before adding your contributions. **See below, in the section called 'How to sync your local repo with the original repo' for details**
+ On your fork of this repo, locate the FIRST_PR_CLUB markdown file. It's in the root folder. Open it in your editor of choice (Atom, VS Code, Sublime, Vim, Notepad++...)
+ **Create a new branch to work on** (you'll do this for your real contributions, too).
  + At the terminal, in the correct folder, run `git checkout -b <new-branch-name>` (read example below)
  + `<new-branch-name>` should be replaced with something sensible, like `jack-first-PR`
  + For your real contributions, you might choose a branch name like `issue-101` or `feature-info-modal`
  + All together: `git checkout -b jack-first-PR`
+ Make the change you want to FIRST_PR_CLUB.
  + I recommend using a horizontal line (Markdown: `--------`) to separate your entry
  + Include your name, your location, your experience level, and what fix you think you'll contriubute to the project!
  + Save your work!
+ Commit your change:
  + `git add FIRST_PR_CLUB`
  + `git commit -m <your-commit-message>`
    + e.g. `git commit -m 'adds Jackson\'s first pr'`
+ Push your change to your fork:
  + `git push origin <your-branch-name>`
+ Open a pull request. Follow the guide here: [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
  + @mention anyone you specifically want to review your PR
+ From there, a reviewer will go through the rest of the process with you.
  + You may be required to make changes to your code before it gets pulled in to the master branch - have patience and know that the difficult bits are done.
+ Celebrate! Now you are ready to contribute to this project more meaningfully! Welcome aboard!

+ Now you can delete your local and remote branches:
  + switch to `master` branch:  
    `git checkout master`
  + list all branches:  
    `git branch`  
    you should see `* master` and the second branch you created previously
  + now delete that second branch:  
    `git branch -d <name-of-the-branch>`
  + delete second branch from your GitHub:  
    `git push origin --delete <name-of-the-branch>`

## How to sync your local repo with the original repo

This setup should be done only once for the repo.  
[source](https://help.github.com/articles/configuring-a-remote-for-a-fork/)  

+ List the current configured remote repository for your fork:  
  `git remote -v`  
  You should see two links with `origin` in front of them.  
  The links will begin either with `https` or `git@`
+ Specify a new remote upstream repository that will be synced with the fork:  
  `git remote add upstream https://github.com/JacksonBates/pair-frontend.git`  
  or  
  `git remote add upstream git@github.com:JacksonBates/pair-frontend.git`  
  depending on which protocol you saw in the first step.
+ Verify the new upstream repository you've specified for your fork:  
  `git remote -v`  
  now you should see four links: two `origin` and two `upstream`

This should be done to check for updates on the remote repo:  
[source](https://help.github.com/articles/syncing-a-fork/)
+ Get data from original repo:  
  `git fetch upstream`  
+ Switch to the `master` branch of your local repo:  
  `git checkout master`
+ Merge changes from the original repo into your local `master` branch:  
  `git merge upstream/master`
+ Now push changes to your GitHub repo:  
  `git push`

Now your local repo and your GitHub repo is up to date with the original repo you forked from.
**You need to do this whenever you are about to work on the code - it means you are working on the most recent version of all the files and will limit the number of merge conflicts. (These are bad (for me, mostly).)**

## Making real contributions

If there is a particular issue you want to fix, communicate your intention via the comments on the specific issue. This will ensure that you are not working on something someone else is close to finishing, and also gives you the opportunity to discuss your approach and get any help or advice you may need before starting.

If the bug or feature you wish to work on is not yet in the existing issues, add it to the issues thread first and comment regarding your intention to work on it straight away.

Aside from that, stick to the fork-pull workflow outlined above under the section 'Your first PR.'

### Important
Please keep your commits and pull requests focused purely on the objectives discussed in your communications with the team (currently just me, but team sounds more legit). If you find _other minor bugs_, _typos_ or _whitespace issues_ while working on your feature / fix, rather than fixing them, please open a **new issue** and **leave it out of your current contribution**. Reviewing Pull Requests and comparing diffs will be much easier that way!


## Any questions?

Could this CONTRIBUTING file be improved? Was anything inaccurate or unclear? Please open up an issue and suggest appropriate fixes. Good documentation is just as crucial as good code - so documentation contributions are just as valued as fancy code contributions!
