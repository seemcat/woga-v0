package mutations

import (
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
	"fmt"
)

type removeMap2WorkoutStruct struct {
	ID             int
	WORKOUTID      int
}

var RemoveMap2Workout = &graphql.Field {
	Type:        types.DeletedMap2WO,
	Description: "Remove mapping of workout from muscle",
	Args: graphql.FieldConfigArgument{
		"targetName": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"workoutKey": &graphql.ArgumentConfig{
			Type: graphql.Int,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		targetName, _ := params.Args["targetName"].(string)
		workoutKey, _ := params.Args["workoutKey"].(int)

		sqlStatement := fmt.Sprintf(`
		DELETE FROM %s
		WHERE workoutKey = $1
		RETURNING id, workoutKey
		`, targetName)

		var id int
		var workoutKeyDeleted int

		var err = postgres.Client.QueryRow(sqlStatement, workoutKey).Scan(&id, &workoutKeyDeleted)

		if err != nil {
			panic(err)
		}

		return removeMap2WorkoutStruct{ID: id, WORKOUTID: workoutKeyDeleted}, nil
	},
}

