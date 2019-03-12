package mutations

import (
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
)

type workoutStruct struct {
	ID        int
	TITLE     string
	TARGET    string
}

var AddWorkout = &graphql.Field {
	Type:        types.Workout,
	Description: "Create a new workout card",
	Args: graphql.FieldConfigArgument{
		"title": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"target": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		title, _ := params.Args["title"].(string)
		target, _ := params.Args["target"].(string)

		sqlStatement := `
		INSERT INTO workouts (title, target)
		VALUES ($1, $2)
		RETURNING id`

		id := 0

		var err = postgres.Client.QueryRow(sqlStatement, title, target).Scan(&id)
		if err != nil {
			panic(err)
		}

		return workoutStruct{ID: id, TITLE: title, TARGET: target}, nil
	},
}
