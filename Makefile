.PHONY: clean all test assets dev proto download-crd-deps
SOURCE_VERSION := v0.13.2
KUSTOMIZE_VERSION := v0.12.2
HELM_CRD_VERSION := v0.10.1

all: test build

dist/index.html:
	npm run build

test:
	go test ./...

build: dist/index.html
	CGO_ENABLED=0 go build -o ./bin/webui .

dev: dist/index.html
	reflex -r '.go' -s -- sh -c 'go run main.go'
