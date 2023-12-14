docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hotel-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t hotel-java/app ../../..
