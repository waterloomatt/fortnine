# FortNine Demo Cart

![build_status](https://github.com/waterloomatt/fortnine/actions/workflows/main.yml/badge.svg)

The online application is accessible at http://fortnine.mattskelton.ca/

![cart](https://user-images.githubusercontent.com/1981303/228567609-d008ee1d-a33a-4e7d-80e1-d24acf5ed224.png)

## Stack
- React for front end
  - Tailwind for CSS
  - Jest for test runner
- Laravel for back end
  - MySQL for database
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
git clone https://github.com/waterloomatt/fortnine.git && cd fortnine

# start a container and install the PHP dependencies,
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
   composer install


# copy and rename the environment file,
cp .env.example .env

# start Laravel Sail,
./vendor/bin/sail up -d

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

If everything goes successfully, you should be able to access the application at http://localhost/
