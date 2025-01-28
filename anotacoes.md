npm init -y

export USUARIO=flcs
export PROJETO=exemplo02

git init .
# git remote add origin https://gitlab.com/$(USUARIO)/$(PROJETO).git
git remote add origin https://gitlab.com/flcs/exemplo02_2025_01_28.git

echo 'node_modules/' >> .gitignore
echo 'dist/' >> .gitignore
git add .
git commit -m 'inicio'
git push -u origin main

npm install express
npm install -D @types/express

npm install -D typescript
npm install -D @types/node
npm install -D ts-node-dev


git pull ; git add . ; git commit -m 'alteracoes feitas' ; git push


