import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column/Column';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Biocop', adresse: '9 rue de la Verrerie', number: 1, type: 'Pick Up', time: '09:00 > 12:00' },
      'task-2': { id: 'task-2', content: 'Fleuriste', adresse: '11 rue des Olivettes', number: 2, type: 'Drop', time: '10:00 > 18:00', urgent: true },
      'task-3': { id: 'task-3', content: 'Pharmacie', adresse: '10 avenue des Lilas', number: 3, type: 'Drop', time: '09:15 > 13:00' },
      'task-4': { id: 'task-4', content: 'La bonne franquette', adresse: '2 rue Léon Say', number: 4, type: 'Pick Up', time: '17:30 > 19:00' },
      'task-5': { id: 'task-5', content: 'Honoré', adresse: '2 rue du calvaire', number: 5, type: 'Drop', time: '09:00 > 12:00', urgent: true },
      'task-6': { id: 'task-6', content: 'FreshSushi', adresse: '9 rue de la fourche', number: 6, type: 'Pick Up', time: '07:00 > 09:00' }
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Liste des commandes',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
      },
    },
    columnOrder: ['column-1'],
  };

class List extends Component {
    state=initialData;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if(!destination){
            return;
        }

        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
    }


  render() {
    return (
        <DragDropContext
            onDragEnd={this.onDragEnd}
        >
       {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />
        })}
        </DragDropContext>
    );
  }
}

export default List;