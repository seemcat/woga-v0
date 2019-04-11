// typedefs
package types

import (
	"github.com/graphql-go/graphql"
)

var TempWorkout = graphql.NewObject(graphql.ObjectConfig {
	Name: "Temp Workout",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.Int,
		},
		"title": &graphql.Field{
			Type: graphql.String,
		},
		"giffUrl": &graphql.Field{
			Type: graphql.String,
		},
		"targets": &graphql.Field{
			// How to add array type?
			Type: graphql.NewList(graphql.String),
		},
	},
})

