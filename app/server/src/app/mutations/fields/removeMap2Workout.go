package mutations

import (
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
	"fmt"
)

type removeMap2WorkoutStruct struct {
	ID             int
	WORKOUTID     int
}

var RemoveMap2Workout = &graphql.Field {
	Type:        types.DeletedMap2WO,
	Description: "Remove mapping of workout from muscle",
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
		targetName, _ := params.Args["targetName"].(string)

		sqlStatement := fmt.Sprintf(`
		DELETE FROM %q (workoutKey)
		WHERE workoutKey = $1
		RETURNING id, workoutKey
		`, targetName)

		var id int
		var workoutKeyDeleted int

		// does the return value need to be the same as &?
		var err = postgres.Client.QueryRow(sqlStatement, workoutKey).Scan(&id, &workoutKeyDeleted)
		if err != nil {
			panic(err)
		}

		return removeMap2WorkoutStruct{ID: id, WORKOUTID: workoutKeyDeleted}, nil
	},
}

