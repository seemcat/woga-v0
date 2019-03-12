// typedefs
package types

import (
	"github.com/graphql-go/graphql"
)

var Workout = graphql.NewObject(graphql.ObjectConfig {
	Name: "Workout",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.Int,
		},
		"title": &graphql.Field{
			Type: graphql.String,
		},
		"target": &graphql.Field{
			Type: graphql.String,
		},
	},
})
