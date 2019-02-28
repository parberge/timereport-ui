#### TIMEREPORT-UI

#### Requirements

.env file with the following values

```
REACT_APP_okta_baseurl=https://dev-845133.okta.com
REACT_APP_okta_client_id=abcdefgh
REACT_APP_backend_url
```

#### Installation

```
npm install
npm start
```
### Packaing .env secrets for travis-ci
```
$ tar cvf secrets.tar src/.env.production 

$ travis encrypt-file secrets.tar --add
storing result as chalice_secrets.tar.enc
storing secure env variables for decryption

Make sure to add secrets.tar.enc to the git repository.
Make sure not to add secrets.tar to the git repository.
Commit all changes to your .travis.yml.

$ git add secrets.tar.enc .travis.yml

```
