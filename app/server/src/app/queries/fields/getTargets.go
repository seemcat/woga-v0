package queries

import (
	"fmt"
	"github.com/graphql-go/graphql"

	"database/sql"
	_ "github.com/lib/pq"

	"app/data"
	types "app/types"
)

type targetsStruct struct {
	ID             int
	WORKOUT_KEY    int
}

var GetTargets = &graphql.Field {
	Type:        graphql.NewList(types.target),
	Description: "Get all targets",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		rows, err := postgres.Client.Query("SELECT id, workoutKey FROM workouts")
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		var id int
		var workoutKey int

		var targets []targetsStruct

		for rows.Next() {
			switch err := rows.Scan(&id, &workoutKey); err {
			case sql.ErrNoRows:
				fmt.Println("No rows were returned!")
			case nil:
				targets = append(targets, targetsStruct{ID: id, WORKOUT_KEY: workoutKey})
				fmt.Println(targets)
			default:
				panic(err)
			}
		}

		err = rows.Err()
		if err != nil {
			panic(err)
		}

		return targets, nil 
	},
}
