package mutations

import (
	"github.com/graphql-go/graphql"

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

var AddRoutine = &graphql.Field {
	Type:        types.Routine,
	Description: "Create a new routine",
	Args: graphql.FieldConfigArgument{
		"workout_id": &graphql.ArgumentConfig{
			Type: graphql.Int,
		},
		"title": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"reps": &graphql.ArgumentConfig{
			Type: graphql.Int,
		},
		"giffUrl": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		// get our params
		workout_id, _ := params.Args["workout_id"].(int)
		title, _ := params.Args["title"].(string)
		reps, _ := params.Args["reps"].(int)
		giffUrl, _ := params.Args["giffUrl"].(string)

		// add a new workouts row
		sqlStatement := `
		INSERT INTO routines (workout_id, title, reps, giffUrl)
		VALUES ($1, $2, $3, $4)
		RETURNING id`

		id := 0

		var err = postgres.Client.QueryRow(sqlStatement, workout_id, title, reps, giffUrl).Scan(&id)
		if err != nil {
			panic(err)
		}

		return routineStruct{ID: id, WORKOUT_ID: workout_id, TITLE: title, REPS: reps, GIFFURL: giffUrl}, nil
	},
}
