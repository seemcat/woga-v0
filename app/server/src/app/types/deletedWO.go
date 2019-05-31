package types

import (
	"github.com/graphql-go/graphql"
)

var DeletedWO = graphql.NewObject(graphql.ObjectConfig {
	Name: "DeleteWO",
	Fields: graphql.Fields{
		"woId": &graphql.Field{
			Type: graphql.Int,
		},
		"title": &graphql.Field{
			Type: graphql.String,
		},
	},
})
