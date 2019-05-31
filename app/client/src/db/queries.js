import gql from 'graphql-tag';

// todo: delete unused gql schemas
export const GET_WORKOUT_FORM_TOGGLE_VALUE = gql`
  {
    isDisplayingWorkoutForm @client
  }
`;

export const GET_ROUTINES = gql`
  query GetRoutines{
	      getRoutines {
			    id
			    workout_id
			    title
			    reps
			    giffUrl
			  }
	    }
`

export const GET_WORKOUTS = gql`
  query GetWorkouts{
	      getWorkouts {
			    id
			    title
			    target
			  }
	    }
`

export const GET_TEMP_WORKOUTS = gql`
  query GetTempWorkouts{
	      getTempWorkouts {
			    id
			    title
			    giffUrl
			    targets
			  }
	    }
`
