import gql from 'graphql-tag';

export const UPDATE_WORKOUT_FORM_TOGGLE_VALUE = gql`
  mutation updateWorkoutFormToggleValue($isDisplayingWorkoutForm: Boolean) {
    updateWorkoutFormToggleValue(isDisplayingWorkoutForm: $isDisplayingWorkoutForm) @client
  }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout($title: String, $target: String) {
	      addWorkout(title: $title, target: $target) {
			    id
			    title
			    target
			  }
	    }
`

export const ADD_ROUTINE = gql`
  mutation AddRoutine($workout_id: Int, $title: String, $reps: Int, $giffUrl: String) {
	      addRoutine(workout_id: $workout_id, title: $title, reps: $reps, giffUrl: $giffUrl) {
			    workout_id
			    title
			    reps
			    giffUrl
			  }
	    }
`
