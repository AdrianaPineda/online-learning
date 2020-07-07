## Basic config
[mandatory] git config --global user.email email@gmail.com

[mandatory] git config --global user.name "Adriana Pineda"

[optional] git config --global color.ui true

[optional] git config --global core.editor [vim | "atom --wait"]

## Git Commands
Untracked files: files in working directory

**git add -A**: adds all files to staging area

**git rm -f**: removes a file from the staging area and from the working directory

**git add -n == git add --dry-run**: shows if the file exists but doesn't add it

**git tag -a _version_ -m "message"**: annotated tag

**git tag _version_ _sha_**: lightweight tag

**git tag -f -a _version_ -m "message" _sha_**: replace lightweight tag

**git log --oneline**: sha(short) + message

**git log --oneline --graph**: sha(short) + message + graph

**git log -3**: last 3 commits

**git diff _sha_**: difference between sha and the current state

**git diff _sha1_ _sha2_**: difference between sha1 and sha2

**git reset --soft _sha_**: removes commits after _sha_ and it leaves files changed in those commits in the staging area

**git reset --mixed _sha_**: removes commits after _sha_ and it leaves files changed in those commits in the working directory (i.e. it doesn't leave them in the staging area as the reset --soft)

**git reset --hard**:
- removes all files from the staging area and from the working directory
- untracked files in the working directory won't be affected

**git reset --hard _sha_**:
- removes commits after _sha_ altogether.
- if the sha is from a commit removed with this command, it will put back the commits until the _sha_

**git branch -[d|D]**: removes branch

**git branch -m _old_branch_name_ _new_branch_name_**: rename branch

**git stash apply**: apply latest stash to the current branch
https://git-scm.com/book/en/v1/Git-Tools-Stashing

**git rebase _branch_**: https://git-scm.com/docs/git-rebase

## Github pages
Hosts static code