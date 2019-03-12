package queries

import (
	"github.com/graphql-go/graphql"
	fields "app/queries/fields"
)

var RootQuery = graphql.NewObject(graphql.ObjectConfig{
	Name: "RootQuery",
	Fields: graphql.Fields{
		"getWorkouts": fields.GetWorkouts,
		"getRoutines": fields.GetRoutines,
	},
})
