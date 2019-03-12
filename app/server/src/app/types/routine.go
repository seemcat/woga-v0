// typedefs
package types

import (
	"github.com/graphql-go/graphql"
)

var Routine = graphql.NewObject(graphql.ObjectConfig {
	Name: "Routine",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.Int,
		},
		"workout_id": &graphql.Field{
			Type: graphql.Int,
		},
		"title": &graphql.Field{
			Type: graphql.String,
		},
		"reps": &graphql.Field{
			Type: graphql.Int,
		},
		"giffUrl": &graphql.Field{
			Type: graphql.String,
		},
	},
})

