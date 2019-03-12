package postgres

import (
	"os"
	"fmt"
	"database/sql"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
)

var (
	user     = os.Getenv("USER")
	dbname   = os.Getenv("DBNAME")
)

var psqlInfo = fmt.Sprintf("host=%s port=%d user=%s dbname=%s sslmode=disable",
host, port, user, dbname)

var Client, err = sql.Open("postgres", psqlInfo)
