// typedefs
package types

import (
	"github.com/graphql-go/graphql"
)

var Target = graphql.NewObject(graphql.ObjectConfig {
	Name: "Target",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.Int,
		},
		"workoutKey": &graphql.Field{
			Type: graphql.Int,
		},
		"targetName": &graphql.Field{
			Type: graphql.String,
		},
	},
})
