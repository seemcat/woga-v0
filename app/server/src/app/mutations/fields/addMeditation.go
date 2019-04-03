package mutations

import (
	"github.com/graphql-go/graphql"

	"app/data"
	types "app/types"
	"fmt"
)

type meditationStruct struct {
	ID          int
	TITLE       string
	KEYWORDS    []string
	MP3         string
}

var AddMeditation = &graphql.Field {
	Type:        types.Meditation,
	Description: "Create a new meditation card",
	Args: graphql.FieldConfigArgument{
		"title": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"keywords": &graphql.ArgumentConfig{
			Type: graphql.NewList(graphql.String),
		},
		"mp3": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		fmt.Println("title: ", title);
		fmt.Println("keywords: ", keywords...);
		fmt.Println("mp3: ", mp3);

		title, _ := params.Args["title"].(string)
		keywords, _ := params.Args["keywords"].([]string)
		mp3, _ := params.Args["mp3"].(string)

		sqlStatement := `
		INSERT INTO meditations (title, keywords, mp3)
		VALUES ($1, $2, $3)
		RETURNING id`

		id := 0

		var err = postgres.Client.QueryRow(sqlStatement, title, keywords, mp3).Scan(&id)
		if err != nil {
			panic(err)
		}

		return meditationStruct{ID: id, TITLE: title, KEYWORDS: keywords, MP3: mp3}, nil
	},
}

