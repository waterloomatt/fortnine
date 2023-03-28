# FortNine Demo Cart

![build_status](https://github.com/waterloomatt/fortnine/actions/workflows/main.yml/badge.svg)


The online application is accessible at http://fortnine.mattskelton.ca/

To bring the application up locally, open your terminal and enter the following commands. You must have Docker installed to continue,

```
# clone the repository,
git clone git@github.com:waterloomatt/fortnine.git && cd fortnine`

# start a container and install the PHP dependencies,
docker run --rm --interactive --tty -v $(pwd):/app composer install

# start Laravel Sail,
./vendor/bin/sail up -d

# copy and rename the environment file,
cp .env.example .env

# generate a new key for the application and run the migrations,
./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan migrate:fresh --seed --force

# Install the Node dependencies and start the development server,
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

If everything goes successfully, you should be able to hit http://localhost/ and access the application. 

If you run into issues when trying to bring up Laraval Sail, you may have existing containers running that are blocking the ports needed for the application. In that case, you can stop all existing containers with `docker kill $(ps -q)` and try to bring Laravel Sail up again. 