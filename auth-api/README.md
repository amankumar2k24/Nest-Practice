nest new auth-api

<!-- Users creation  -->
created first USERS module and service by command - nest g module users and nest g service users

<!-- install these packages for verification -->
npm i --save @nestjs/passport passport passport-local
npm i --save-dev @types/passport-local

<!-- Auth Creation -->
created AUTH module and service by command - nest g module auth and nest g service auth

From USERS module i am exporting   ""exports: [UsersService]""    to     AUTH module , here i am importing   ""imports: [UsersModule]"",

In USER service
   - i have created a dummy user data 
   - i have createa a findOne function which is accepting username in parameter
   - i have created a create function which is accepting user object in parameter

In AUTH service
   - i have created a validateUser function which is accepting username, password in parameter

In local strategy
   - i have created a validate function which is accepting username and password in parameter and passing data into validateUser function, if this user is not valid then it will throw an error
   - in localStrategy , i have extends PassportStrategy  which is coming from  above packages (website - https://www.passportjs.org/)

In Auth module 0
   - i have added LocalStrategy in providers array and 
   - i have added PassportModule in imports array

