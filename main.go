package main

import (
	"log"
	"net/http"
	"utils"
)

const (
	port = ":8085"
)

var (
	thisDir   = utils.GetThisDir()
	staticDir = thisDir + "/data/static"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, staticDir+r.URL.Path)
	})

	log.Printf("Site running on %s...\n", port)
	http.ListenAndServe(port, nil)
}
