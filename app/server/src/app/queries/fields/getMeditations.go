package queries

import (
	"fmt"
	"github.com/graphql-go/graphql"

	"database/sql"
	"github.com/lib/pq"

	"app/data"
	types "app/types"
)

type meditationStruct struct {
	ID          int
	TITLE       string
	KEYWORDS    []string
	MP3         string
}

var GetMeditations = &graphql.Field {
	Type:        graphql.NewList(types.Meditation),
	Description: "Get all meditations",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		rows, err := postgres.Client.Query("SELECT id, title, keywords, mp3 FROM meditations")
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		var id int
		var title string
		var keywords []string
		var mp3 string

		var meditations []meditationStruct

		for rows.Next() {
			switch err := rows.Scan(&id, &title, (*pq.StringArray)(&keywords), &mp3); err {
			case sql.ErrNoRows:
				fmt.Println("No rows were returned!")
			case nil:
				meditations = append(meditations, meditationStruct{ID: id, TITLE: title, KEYWORDS: keywords, MP3: mp3})
				fmt.Println(meditations)
			default:
				panic(err)
			}
		}

		err = rows.Err()
		if err != nil {
			panic(err)
		}

		return meditations, nil
	},
}

