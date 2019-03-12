package queries

import (
	"fmt"
	"github.com/graphql-go/graphql"

	"database/sql"
	_ "github.com/lib/pq"

	"app/data"
	types "app/types"
)

type routineStruct struct {
	ID           int
	WORKOUT_ID   int
	TITLE        string
	REPS         int
	GIFFURL      string
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

var GetRoutines = &graphql.Field {
	Type:        graphql.NewList(types.Routine),
	Description: "Get all routines",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		rows, err := postgres.Client.Query("SELECT id, workout_id, title, reps, giffUrl FROM routines")
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		var id int
		var workout_id int
		var title string
		var reps int
		var giffUrl string

		var routines []routineStruct

		for rows.Next() {
			switch err := rows.Scan(&id, &workout_id, &title, &reps, &giffUrl); err {
			case sql.ErrNoRows:
				fmt.Println("No rows were returned!")
			case nil:
				routines = append(routines, routineStruct{ID: id, WORKOUT_ID: workout_id, TITLE: title, REPS: reps, GIFFURL: giffUrl})
				fmt.Println(routines)
			default:
				panic(err)
			}
		}

		err = rows.Err()
		if err != nil {
			panic(err)
		}

		return routines, nil
	},
}
