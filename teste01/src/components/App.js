import React from 'react';
import {Header, Footer} from './Layout';
import Exercicios from './Exercises';
import {muscles, exercises} from '../store';

export default class App extends React.Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles = () => {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }),{})

    return Object.entries(this.state.exercises.reduce((exs, ex) => {
        const {muscles} = ex;

        exs[muscles] = [...exs[muscles], ex] ;

        return exs;
      }, initExercises)
    );
  };
  handleCategorySelected = category =>
    this.setState({
      category
    })

  handleExerciseSelect = id =>
    this.setState(({exercises}) =>({
      exercise: exercises.find(ex => ex.id ===id)
    }));

  handleExerciseCreate = data =>
    this.setState(({exercises})=> ({
        exercises: [
          ...exercises,
          data
        ]
      })
    );

  handleExerciseDelete = id =>
    this.setState(({exercises}) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  handleExerciseSelectEdit = id =>
    this.setState(({exercises}) =>({
      exercise: exercises.find(ex => ex.id ===id),
      editMode:true
    }));

  render(){
    const exercises = this.getExercisesByMuscles(),
          {category, exercise, editMode} = this.state;

    return(
      <>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercicios
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
        />
        <Footer
          category={category}
          onSelect={this.handleCategorySelected}
          muscles={muscles}
        />
      </>
    );
  }
}
