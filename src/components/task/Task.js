import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from "react-router-dom";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
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
                        <button type="button">
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