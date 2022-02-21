# Flux Web UI

## Project Status

:warning: This project is currently **on hold**, because the maintainers do not have capacity to
develop it further at present. We (the Flux project) will try to keep it up to date with the Flux
APIs so it will still run, but it will remain experimental and may not always work (please file an
issue if you find it does not work!).

Please get in touch in [#flux-contributors](https://slack.cncf.io/) if you are interested in helping
to get this project moving again.

See [the monitoring section of the Flux documentation](https://fluxcd.io/docs/guides/monitoring/)
for how to install Flux's Grafana dashboards.

## Installation

To install the Flux Web UI:

1. Download the latest release from the [releases page](https://github.com/fluxcd/webui/releases)
2. Extract the binary from the downloaded archive
3. Run the server in your terminal: `./flux-webui`
4. You will see a log message letting you know startup was successful: `2021-06-03T13:26:37.552-0700 INFO Serving on port 9000`
5. Navigate to <http://localhost:9000>

## Development

To set up a development environment

1. Install `go` v1.16
2. Install `Node.js v16.x.x`
3. Install `reflex` for automated server builds: `go get github.com/cespare/reflex`
4. [Install `kubebuilder`](https://book.kubebuilder.io/quick-start.html#installation)
5. `npm install` to install UI dependencies
6. `npm start` to start the frontend dev server (with hot-reloading)

To run tests:

```shell
make test
```
