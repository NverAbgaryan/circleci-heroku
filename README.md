# circleci-heroku-delpoy


**What do you need for using this circle ci configuration**
1. Set up your heroku application
2. Connect it with the github
3. Go to Circle ci and make connection with github
4. Add your application repo to circle ci    
5. Go to circle ci entailment variables config page and add 
   1. HEROKU_API_KEY  
       *for getting heroku app key you shoold run this command 
        ``heroku auth:token``* it will generate long term token for your user
        
   2. YOUR_HEROKU_APP_NAME 
         
**How it works**
After pushing your changes into github repo it will deploy
your application  

    Steps
        * It will make a deployment to dev server
        * After deploying for dev it will wait for approval to deploy to staging server  
        * After deploying for staging it will wait for approval to deploy to production  server 

**GITHUB ROPO**
 * you need to have 3 branches `master`, `staging`, `dev`  
   