nest new auth-api

<!-- Users creation  -->
created first users module and service by command - nest g module users and nest g service users

npm i --save @nestjs/passport passport passport-local
npm i --save-dev @types/passport-local

<!-- Auth Creation -->
created auth module and service by command - nest g module auth and nest g service auth


From user module i am exporting   ""exports: [UsersService]""    to     auth module , here i am importing   ""imports: [UsersModule]"",