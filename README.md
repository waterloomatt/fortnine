# FortNine Demo Cart

![build_status](https://github.com/waterloomatt/fortnine/actions/workflows/main.yml/badge.svg)

The online application is accessible at http://fortnine.mattskelton.ca/

![image](https://user-images.githubusercontent.com/1981303/228292160-48988c59-06c2-4eb6-a7e2-8a8300f02010.png)

## Stack
- React for front end
  - Tailwind for CSS
  - Jest for test runner
- Laravel for back end
  - PHPUnit for test runner
  
## Design decisions
 - designed for mobile and desktop screens
 - max 10 items can be added for each product. This was an arbitrary decision used to show some business logic
 - the checkout process was not implemented
 - all cart items are stored in the database. The session ID was used as the identifier.
 - only implemented tax for Quebec (QST and GST)

To bring the application up locally, open your terminal and enter the following commands. You must have Docker and Git installed to continue,

```
# clone the repository,
git clone git@github.com:waterloomatt/fortnine.git && cd fortnine`

# start a container and install the PHP dependencies,
docker run --rm --interactive --tty -v $(pwd):/app composer install

# start Laravel Sail. If you get errors on this step see the ** note below,
./vendor/bin/sail up -d

# copy and rename the environment file,
cp .env.example .env

# generate a new key for the application and run the migrations,
./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan migrate:fresh --seed --force

# install the Node dependencies and start the development server,
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

To run tests,
```
> back end tests,
./vendor/bin/sail test

> front end tests,
./vendor/bin/sail npm test

```


If everything goes successfully, you should be able to hit http://localhost/ and access the application. 

** If you run into issues when trying to bring up Laravel Sail, you may have existing containers running that are blocking the ports needed for the application. In that case, you can stop all existing containers with `docker kill $(ps -q)` and try to bring Laravel Sail up again.
