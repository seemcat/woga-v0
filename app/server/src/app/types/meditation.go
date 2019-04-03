// typedefs
package types

import (
	"github.com/graphql-go/graphql"
)

var Meditation = graphql.NewObject(graphql.ObjectConfig {
	Name: "Meditation",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.Int,
		},
		"title": &graphql.Field{
			Type: graphql.String,
		},
		"keywords": &graphql.Field{
			Type: graphql.NewList(graphql.String),
		},
		"mp3": &graphql.Field{
			Type: graphql.String,
		},
	},
})

