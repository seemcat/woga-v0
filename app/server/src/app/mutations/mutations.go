package mutations

import (
	"github.com/graphql-go/graphql"
	fields "app/mutations/fields"
)

var RootMutation = graphql.NewObject(graphql.ObjectConfig{
	Name: "RootMutation",
	Fields: graphql.Fields{
		"addWorkout": fields.AddWorkout,
		"addRoutine": fields.AddRoutine,
		"addTempWorkout": fields.AddTempWorkout,
		"mapWorkoutToTarget": fields.MapWorkoutToTarget,
		"removeWorkout": fields.RemoveWorkout,
		"removeMap2Workout": fields.RemoveMap2Workout,
	},
})
