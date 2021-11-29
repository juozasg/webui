package main

import (
	"context"
	"fmt"
	"html/template"
	"io"
	"net/http"

	"github.com/eknkc/amber"
	kustomizev1 "github.com/fluxcd/kustomize-controller/api/v1beta1"
	"github.com/fluxcd/webui/pkg/util"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	client "sigs.k8s.io/controller-runtime/pkg/client"
)

type TemplatesMap struct {
	templates map[string]*template.Template
}

var kc client.Client

func (tm *TemplatesMap) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return tm.templates[name].Execute(w, data)
}

func getKustomizations(c echo.Context) error {
	// pp := Peeps{Peep1: "Peep1-str", Foo: "bar"}

	result := kustomizev1.KustomizationList{}
	ctx := context.Background()
	opts := client.ListOptions{}
	// opts.Namespace = "flux-system"
	opts.Namespace = ""

	if err := kc.List(ctx, &result, &opts); err != nil {
		fmt.Errorf("could not list kustomizations: %w", err)
	}

	return c.Render(http.StatusOK, "index", result)
}

func getKustomization(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusOK, fmt.Sprintf("<div>Kustomization id=%s</div>", id))
}

func main() {
	templates, err := amber.CompileDir("views/", amber.DefaultDirOptions, amber.DefaultOptions)
	if err != nil {
		fmt.Printf("amber.CompileDir error: %v", err)
		return
	}

	e := echo.New()
	e.Debug = true
	e.Renderer = &TemplatesMap{
		templates: templates,
	}

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/kustomizations", getKustomizations)
	e.GET("/kustomizations/:id", getKustomization)

	kc, err = util.NewKubeClient("kind-kind")

	e.Logger.Info(e.Start("0.0.0.0:8080"))
}
