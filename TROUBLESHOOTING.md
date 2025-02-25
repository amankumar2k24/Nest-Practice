# Troubleshooting: ninja-api submodule error

If you see an error like:
```
error: 'ninja-api/' does not have a commit checked out  
fatal: adding files failed
```
follow these steps:

## If ninja-api is meant to be a submodule:
- Run:
  git submodule update --init ninja-api

## If ninja-api should be a normal folder:
- Remove the submodule configuration by deleting the .git folder inside ninja-api:
  (On Windows Bash or Git Bash)
  rm -rf ninja-api/.git
- Then run:
  git add ninja-api
  git commit -m "Convert ninja-api from submodule to regular folder"
