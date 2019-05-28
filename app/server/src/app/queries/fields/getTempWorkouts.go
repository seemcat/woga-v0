package queries

import (
	"fmt"
	"github.com/graphql-go/graphql"

	"database/sql"
	"github.com/lib/pq"

	"app/data"
	types "app/types"
)

type tempWorkoutStruct struct {
	ID         int
	TITLE      string
	GIFF_URL   string
	TARGETS    []string
}

var GetTempWorkouts = &graphql.Field {
	Type:        graphql.NewList(types.TempWorkout),
	Description: "Get all temp workouts",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		rows, err := postgres.Client.Query("SELECT id, title, giffUrl, targets FROM tempworkouts")
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		var id int
		var title string
		var giffUrl string
		var targets []string

		var tempWorkouts []tempWorkoutStruct

		for rows.Next() {
			switch err := rows.Scan(&id, &title, &giffUrl, (pq.Array)(&targets)); err {
			case sql.ErrNoRows:
				fmt.Println("No rows were returned!")
			case nil:
				tempWorkouts = append(tempWorkouts, tempWorkoutStruct{ID: id, TITLE: title, GIFF_URL: giffUrl, TARGETS: targets})
			default:
				panic(err)
			}
		}

		err = rows.Err()
		if err != nil {
			panic(err)
		}

		return tempWorkouts, nil
	},
}
