package mutations

import (
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
)

type tempWorkoutStruct struct {
	ID         int
	TITLE      string
	GIFF_URL   string
	TARGETS    []string
}

var AddTempWorkout = &graphql.Field {
	Type:        types.TempWorkout,
	Description: "Create a new temp workout",
	Args: graphql.FieldConfigArgument{
		"title": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"giffUrl": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"targets": &graphql.ArgumentConfig{
			Type: graphql.NewList(graphql.String),
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		title, _ := params.Args["title"].(string)
		giffUrl, _ := params.Args["giffUrl"].(string)
		var targets []string
		for _, target := range params.Args["target"].([]interface{}) {
			targets = append(targets, target.(string))
		}

		sqlStatement := `
		INSERT INTO tempWorkouts (title, giffUrl, targets)
		VALUES ($1, $2, $3)
		RETURNING id`

		id := 0

		var err = postgres.Client.QueryRow(sqlStatement, title, giffUrl, targets).Scan(&id)
		if err != nil {
			panic(err)
		}

		return tempWorkoutStruct{ID: id, TITLE: title, GIFF_URL: giffUrl, TARGETS: targets}, nil
	},
}

