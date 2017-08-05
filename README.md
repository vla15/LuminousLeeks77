# nQu

An application that enables business owners to monitor customers who are currently waiting in the queue through a real time, intuitive and clean UI.  In addition, it will allow business owners to track the location of customers who have added themselves to the queue list and automatically send an SMS alert after a predefined time.

Customers can also utilize this application to enqueue themselves to available wait lists within their proximity. It also enables the customer to actively monitor their expected wait times and the number of parties ahead of them.

## Team

- Shyan Kashani
- Sheyda Rezaei
- Michael Clausen
- Vincent La

## Roadmap

View the project roadmap:

System Architecture [Here](https://drive.google.com/open?id=0B2MVZ2bkuc1oMDljVm5VdXlQTzg)
Host Wireframe[Host](https://drive.google.com/open?id=0B2MVZ2bkuc1ocFVSajlpV01WSDg)
Customer Wireframe [Customer](https://drive.google.com/open?id=0B2MVZ2bkuc1oQnRkbFFuS3FHTk0)
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

Demo
![](http://i.imgur.com/G0Dvfos.gif?raw=true)

Host View
![](http://i.imgur.com/mB5M539.gif?raw=true)


## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- Socket.IO 2.0.x
- Redux 3.7.x
- RabbitMQ 3.6.x

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
brew install rabbitmq
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
```

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable. 

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run server-dev`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`


