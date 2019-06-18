import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from "react-router-dom";

import imgArrow from '../../img/arrow.png';
import './task.scss';

class Task extends Component {
  render() {
    return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {provided => (
                <div
                    className="container"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {this.props.task.content}
                    <Link
                    to={{
                        pathname: "/order",
                        order: this.props.task,
                    }}>
                        <button className="goTo" type="button">
                            <img src={imgArrow} alt="Détails" />
                        </button>
                    </Link>
                </div>
            )}
        </Draggable>
    );
    
  }
}

export default Task;