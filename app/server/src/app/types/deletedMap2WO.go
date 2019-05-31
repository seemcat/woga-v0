package types

import (
	"github.com/graphql-go/graphql"
)

var DeletedMap2WO = graphql.NewObject(graphql.ObjectConfig {
	Name: "DeleteMap2WO",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.Int,
		},
		"workoutId": &graphql.Field{
			Type: graphql.Int,
		},
	},
})

