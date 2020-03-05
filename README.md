# React App from scratch with Webpack 4

### Installation

Clone the directory

```
> git clone https://github.com/gordana16/react-app-from-scratch.git
```

or download this application by clicking "Clone or download" and then choose "Download ZIP". Once downloaded extract the zip file to your local computer.

Install dependencies by running the next command from the project directory:

```
> npm install
```

Start webpack dev server with HMR enabled:

```
> npm run start
```

Build for production:

```
> npm run build
```

### Deploying to GitHub Pages

```
# Create an orphan branch named gh-pages
> git checkout --orphan gh-pages# Remove all files from staging
> git rm -rf .
# Create an empty commit so that you will be able to push on the branch next
> git commit --allow-empty -m "Init empty branch"
# Push the branch
> git push origin gh-pages
```

The dist dir under master should have already been added to .gitignore. Configure the worktree.

```
> git checkout master
> git worktree add dist gh-pages
```

Build the app

```
> npm run build
```

then change working dir to dist. You will be in gh-pages branch.

```
> cd dist
> git add .
> git commit -m 'your commit msg'
> git push origin gh-pages
```

In repository settings choose 'gh-branch' as source for building your website.
