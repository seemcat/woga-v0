package mutations

import (
	"fmt"
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
)

type targetsStruct struct {
	ID             int
	WORKOUT_KEY    int
}

var MapWorkoutToTarget = &graphql.Field {
	Type:        types.Target,
	Description: "Create a new mapping of workout to target",
	Args: graphql.FieldConfigArgument{
		"workoutKey": &graphql.ArgumentConfig{
			Type: graphql.Int,
		},
		"targetName": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		workoutKey, _ := params.Args["workoutKey"].(int)
		targetName, _ := params.Args["workoutKey"].(string)

		sqlStatement := fmt.Sprintf(`
		INSERT INTO %q (workoutKey)
		VALUES ($1)
		RETURNING id`, targetName)

		id := 0

		var err = postgres.Client.QueryRow(sqlStatement, workoutKey).Scan(&id)
		if err != nil {
			panic(err)
		}

		return targetsStruct{ID: id, WORKOUT_KEY: workoutKey}, nil
	},
}


