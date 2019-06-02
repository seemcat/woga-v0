package mutations

import (
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
)

type removeWorkoutStruct struct {
	ID         int
	TITLE      string
}

var RemoveWorkout = &graphql.Field {
	Type:        types.DeletedWO,
	Description: "Remove a workout",
	Args: graphql.FieldConfigArgument{
		"workoutId": &graphql.ArgumentConfig{
			Type: graphql.Int,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		workoutId, _ := params.Args["workoutId"].(int)

		sqlStatement := `
		DELETE FROM tempWorkouts
		WHERE id = $1
		RETURNING id, title
		`

		var id int
		var title string

		var err = postgres.Client.QueryRow(sqlStatement, workoutId).Scan(&id, &title)
		if err != nil {
			panic(err)
		}

		return removeWorkoutStruct{ID: id, TITLE: title}, nil
	},
}
