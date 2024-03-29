import gql from 'graphql-tag';

export const UPDATE_WORKOUT_FORM_TOGGLE_VALUE = gql`
  mutation updateWorkoutFormToggleValue($isDisplayingWorkoutForm: Boolean) {
    updateWorkoutFormToggleValue(isDisplayingWorkoutForm: $isDisplayingWorkoutForm) @client
  }
`;

export const ADD_TEMP_WORKOUT = gql`
  mutation AddTempWorkout($title: String, $giffUrl: String, $targets: [String]) {
	      addTempWorkout(title: $title, giffUrl: $giffUrl, targets: $targets) {
			    id
			    title
			    giffUrl
			    targets
			  }
	    }
`

export const MAP_WORKOUT_TO_TARGET = gql`
  mutation MapWorkoutToTarget($workoutKey: Int, $targetName: String) {
	      mapWorkoutToTarget(workoutKey: $workoutKey, targetName: $targetName) {
			    id
			    workoutKey
			    targetName
			  }
	    }
`
