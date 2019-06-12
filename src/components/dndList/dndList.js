import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column/Column.js';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'lol' },
      'task-2': { id: 'task-2', content: 'lojihl' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'todo',
        taskIds: ['task-1', 'task-2'],
      },
    },
    columnOrder: ['column-1'],
  };

class DndList extends Component {
    state=initialData;

    onDragEnd = result => {

    }

  render() {
    return (
        <DragDropContext
            onDragStart
            onDragUpdate
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

export default DndList;