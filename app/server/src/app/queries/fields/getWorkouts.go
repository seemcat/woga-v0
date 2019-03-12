package queries

import (
	"fmt"
	"github.com/graphql-go/graphql"

	"database/sql"
	_ "github.com/lib/pq"

	"app/data"
	types "app/types"
)

type workoutStruct struct {
	ID        int
	TITLE     string
	TARGET    string
}

var GetWorkouts = &graphql.Field {
	Type:        graphql.NewList(types.Workout),
	Description: "Get all workouts",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		rows, err := postgres.Client.Query("SELECT id, title, target FROM workouts")
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		var id int
		var title string
		var target string

		var workouts []workoutStruct

		for rows.Next() {
			switch err := rows.Scan(&id, &title, &target); err {
			case sql.ErrNoRows:
				fmt.Println("No rows were returned!")
			case nil:
				workouts = append(workouts, workoutStruct{ID: id, TITLE: title, TARGET: target})
				fmt.Println(workouts)
			default:
				panic(err)
			}
		}

		err = rows.Err()
		if err != nil {
			panic(err)
		}

		return workouts, nil 
	},
}
