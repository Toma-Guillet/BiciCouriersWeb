import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from "react-router-dom";

import './task.scss';

const Container = styled.div`
    position: relative;
    border: 1px solid lightgrey;
    border-radius: 2px;
    height: 200px;
    margin-bottom: 8px;
    background-color: white;
`;

class Task extends Component {
  render() {
    return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {provided => (
                <Container
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
                            Détails
                        </button>
                    </Link>
                </Container>
            )}
        </Draggable>
    );
    
  }
}

export default Task;