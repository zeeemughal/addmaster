# Engineering Test

## Welcome

Hi, welcome to the Engineer Test! This test is intended to give you an opportunity to interact with some of the ad technology and script techniques you will encounter during your time as an Engineer. It will test your debugging and troubleshooting skills with the type of techniques you will need to use on the job. The important thing to remember is that there are correct outcomes but not only a single way to complete every task. That said, the Zeus team is focused on performance and fast code loading and execution. You should look to complete the tasks *without* adding additional on-page libraries like jQuery, React or lodash. All the problems within are resolvable with vanilla Javascript.

Another important thing to note is that part of the Solution Engineer's work is documenting how code works and being capable of explaining that functionality internally to non-technical stakeholders and customers. Where you write functions that are not included in the test you receive you should document them. There is an explicit documentation task, but we will also look at inline documentation you provide. Feel free to be verbose and narrative in your documentation, we'd prefer to see a good explanation accessible to a non-technical reader over proper format. While the functions you write may be relatively simple to an engineer's eye, they need to be documented in such a way that a non-technical person can understand how to use them.

No matter what level of the test that you accomplish, we will credit the work you can show yourself doing. If you're unfamiliar with code or git documentation practices than you should open up a document where you can write what you are doing and what you have tried to do in a beat by beat format, so that we can see your work. If you do so, share that document when you turn in your test.

## Setup

Note: When running any of this code in your browser don't forget to turn off any ad blockers or tracking script blockers to avoid issues.

You may set up this project with git to submit via GitHub. If you do `git init` to activate this as a git managed project.

You can do the initial setup as follows on the command line, starting at the base of this project:

`npm install` to install the supporting libraries.

You can start a local server by running `npm run start` at the base level of this project.

You should be able to access the index page on `http://localhost:3000` and see the message `Your app is listening on http://localhost:3000 & http://127.0.0.1:3000` in your CLI.

You will need to refresh the browser to see any changes you make to each page.

## Test Process

We always appreciate seeing work, so do not hesitate to commit changes with git frequently. If you do, expressive git commit messages are helpful to other developers for understanding your work.

Each of the test pages have specific problems for you to solve and will require you to examine the page and any attached script files. Instructions around each will be inline as comments. You should also add additional inline documentation to help you work.

The entry point to your site is: `http://localhost:3000/`

The test pages do not need to be completed in any particular order, but you may find it helpful to do so in the listed order. We are looking to test a number of proficiencies so, if you must choose, it's better that you address all the tests than complete only one.

The test is comprised of 4 HTML pages, and one test question.

- [The index page](http://localhost:3000/)
- [The iFrame page](http://localhost:3000/frame-page)
- [The Cookie Page](http://localhost:3000/cookie.html)
- [The Ad Page](http://localhost:3000/ad-page)

It is expected that you will use outside sources to look up various functions and reference materials, you should include reference materials that might be useful to the examiner to understand your approach or to a non-technical user of your functions--who might be copy/pasting them into a browser console--in order to illustrate what the function is doing.

## Can't get the local server running?

If you find yourself stuck on getting the server running, you should skip to the Cookie and Ad pages, which you can run by opening the file in your browser *without* having to set up the server.

## Test Question

Please write an answer 1 sentence to 1 paragraph long explaining how you might identify that a site is using WordPress:

### Answer

Type Answer Paragraph Here

## Completing the test

### On Git

Once you're done with the test and have completed all the tasks you should make sure to make a final `git commit` and then publish that repository as a **private** repo to your GitHub account.

Then invite the current test examiner to the **private** repo as a collaborator to see your work:

Examiner GitHub account is:

https://github.com/AramZS

### Via file delivery

You may also take the folder this project is in and deliver it as a compressed (.zip) file to the examiner. Make sure you delete the `node_modules` folder if you have one before compressing the project for delivery.

_Do not, under any circumstances, make the repository public._ If you accidentally publish this project as a public repository please switch it to private immediately.
