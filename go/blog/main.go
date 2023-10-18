package main

import (
	"context"
	"database/sql"
	"fmt"
	"html/template"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	_ "github.com/mattn/go-sqlite3"
)

var router *chi.Mux
var db *sql.DB

type articleContextKey string // https://pkg.go.dev/context#example-WithValue

const key = articleContextKey("article")

type Article struct {
	ID      int           `json:"id"`
	Title   string        `json:"title"`
	Content template.HTML `json:"content"`
}

func catch(err error) {
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
}

func main() {
	router = chi.NewRouter()
	router.Use(middleware.Recoverer)
	var err error
	db, err = connect()
	catch(err)
	router.Use(ChangeMethod)
	router.Get("/", GetAllArticles)
	router.Route("/articles", func(r chi.Router) {
		r.Get("/", NewArticle)
		r.Post("/", CreateArticle)
		r.Route("/{articleID}", func(r chi.Router) {
			r.Use(ArticleCtx)
			r.Get("/", GetArticle)       // GET /articles/1234
			r.Put("/", UpdateArticle)    // PUT /articles/1234
			r.Delete("/", DeleteArticle) // DELETE /articles/1234
			r.Get("/edit", EditArticle)  // GET /articles/1234/edit
		})
	})
	err = http.ListenAndServe(":8005", router)
	catch(err)
}

func ChangeMethod(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			switch method := r.PostFormValue("_method"); method {
			case http.MethodPut:
				fallthrough
			case http.MethodPatch:
				fallthrough
			case http.MethodDelete:
				r.Method = method
			default:
			}
		}
		next.ServeHTTP(w, r)
	})
}

func ArticleCtx(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		articleID := chi.URLParam(r, "articleID")
		article, err := dbGetArticle(articleID)
		if err != nil {
			fmt.Println(err)
			http.Error(w, http.StatusText(404), 404)
			return
		}
		ctx := context.WithValue(r.Context(), key, article)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func GetAllArticles(w http.ResponseWriter, r *http.Request) {
	articles, err := dbGetAllArticles()
	catch(err)
	fmt.Println(articles)

	t, _ := template.ParseFiles("templates/base.html", "templates/index.html")
	err = t.Execute(w, articles)
	catch(err)
}

func NewArticle(w http.ResponseWriter, r *http.Request) {
	// http.ServeFile(w, r, "templates/new.html")
	t, _ := template.ParseFiles("templates/base.html", "templates/new.html")
	err := t.Execute(w, nil)
	catch(err)
}

func CreateArticle(w http.ResponseWriter, r *http.Request) {
	title := r.FormValue("title")
	content := r.FormValue("content")
	article := &Article{
		Title:   title,
		Content: template.HTML(content),
	}

	err := dbCreateArticle(article)
	catch(err)
	http.Redirect(w, r, "/", http.StatusFound)
}

func GetArticle(w http.ResponseWriter, r *http.Request) {
	article := r.Context().Value(key).(*Article)
	t, _ := template.ParseFiles("templates/base.html", "templates/article.html")
	err := t.Execute(w, article)
	catch(err)
}

func EditArticle(w http.ResponseWriter, r *http.Request) {
	article := r.Context().Value(key).(*Article)
	fmt.Println(article)
	// TODO: Render template
}

func UpdateArticle(w http.ResponseWriter, r *http.Request) {
	article := r.Context().Value(key).(*Article)
	title := r.FormValue("title")
	content := r.FormValue("content")
	newArticle := &Article{
		Title:   title,
		Content: template.HTML(content),
	}
	err := dbUpdateArticle(strconv.Itoa(article.ID), newArticle)
	catch(err)
	http.Redirect(w, r, fmt.Sprintf("/articles/%d", article.ID), http.StatusFound)
}

func DeleteArticle(w http.ResponseWriter, r *http.Request) {
	article := r.Context().Value(key).(*Article)
	err := dbDeleteArticle(strconv.Itoa(article.ID))
	catch(err)
	http.Redirect(w, r, "/", http.StatusFound)
}
