```bash
git remote remove origin
git remote add origin https://github.com/jozef-rzadkosz/mmp-studio.git 
git remote set-url origin --push --add 	https://repo30.mydevil.net/git/priv/freestyle09/mmpstudio/
git remote set-url origin --push --add https://github.com/jozef-rzadkosz/mmp-studio.git

git remote add dev https://github.com/jozef-rzadkosz/mmp-studio.git 
git remote set-url dev --push --add https://repo30.mydevil.net/git/priv/freestyle09/dev-mmpstudio/
git remote set-url dev --push --add https://github.com/jozef-rzadkosz/mmp-studio.git

git remote -v 
```
