import React from 'react';
import {
  graphql, compose, Mutation, Query,
} from 'react-apollo';
import { Link } from 'react-router-dom';
import { GET_TEMP_WORKOUTS } from '../../db/queries';
import { REMOVE_MAP_2_WORKOUT, REMOVE_WORKOUT } from '../../db/mutations';
import './admin.css';

function Admin(props) {
  const { removeWorkout, removeMap2Workout } = props;

  const handleDelete = (workoutKey, muscles) => {
    if (muscles.length > 0) {
      const promises = muscles.map(targetName => removeMap2Workout({
        variables: {
          targetName,
          workoutKey,
        },
      }));

      Promise.all(promises).then(res => removeWorkout({
        variables: {
          workoutId: workoutKey,
        },
      }));
    } else {
      removeWorkout({
        variables: {
          workoutId: workoutKey,
        },
      });
    }
  };

  return (
    <Query query={GET_TEMP_WORKOUTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const workouts = data.getTempWorkouts.map((workout, idx) => (
          <div key={idx}>
            <button onClick={() => handleDelete(workout.id, workout.targets)}>
              Delete
            </button>
            <div>{workout.id}</div>
            <div>{workout.title}</div>
            <div>{workout.giffUrl}</div>
            <div>{workout.targets}</div>
          </div>
        ));

        return (
          <div>
            <div>ADMIN PAGE</div>
            <div>
              <Link to="/workoutform">ADD A NEW WORKOUT</Link>
            </div>
            <div>{workouts}</div>
          </div>
        );
      }}
    </Query>
  );
}

export default compose(
  graphql(REMOVE_WORKOUT, { name: 'removeWorkout' }),
  graphql(REMOVE_MAP_2_WORKOUT, { name: 'removeMap2Workout' }),
)(Admin);
