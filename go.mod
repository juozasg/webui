module github.com/fluxcd/webui

go 1.16

require (
	github.com/eknkc/amber v0.0.0-20171010120322-cdade1c07385
	github.com/fluxcd/helm-controller/api v0.14.0
	github.com/fluxcd/kustomize-controller/api v0.18.1
	github.com/fluxcd/notification-controller/api v0.19.0
	github.com/fluxcd/source-controller/api v0.19.0
	github.com/google/go-cmp v0.5.6 // indirect
	github.com/labstack/echo v3.3.10+incompatible
	github.com/labstack/gommon v0.3.1 // indirect
	golang.org/x/crypto v0.0.0-20211117183948-ae814b36b871 // indirect
	gopkg.in/check.v1 v1.0.0-20201130134442-10cb98267c6c // indirect
	k8s.io/api v0.22.2
	k8s.io/apimachinery v0.22.2
	k8s.io/client-go v0.22.2
	sigs.k8s.io/controller-runtime v0.10.3
	sigs.k8s.io/yaml v1.3.0 // indirect
)
