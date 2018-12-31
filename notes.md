## Basic config
[mandatory] git config --global user.email email@gmail.com

[mandatory] git config --global user.name "Adriana Pineda"

[optional] git config --global color.ui true

## Git Commands
Untracked files: files in working directory

git add -A: adds all files to staging area

git rm -f: removes a file from the staging area and from the working directory

git add -n == git add --dry-run: shows if the file exists but doesn't add it

git tag -a _version_ -m "message": annotated tag

git tag _version_ _sha_: lightweight tag

git tag -f -a _version_ -m "message" _sha_: replace lightweight tag

git log --oneline: sha(short) + message

git log --oneline --graph: sha(short) + message + graph

git log -3: last 3 commits

