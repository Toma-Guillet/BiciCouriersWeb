import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from "react-router-dom";

import imgArrow from '../../img/arrow.png';
import imgFlag from '../../img/flag.png';
import imgPin from '../../img/pin.png';
import imgBike from '../../img/bike.png';
import './task.scss';

class Task extends Component {
  render() {
    return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {provided => (
                <div
                    className="containerBox"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="header">EN COURS DE LIVRAISON</div>
                    <div className="content">
                        <div className="infos">
                            <div className="line">
                                <div className="cardType karla upper"><img src={imgPin} alt="Pick up" /> {this.props.task.type}</div>
                                <div className="cardStatus">{this.props.task.urgent ? 'Urgent' : null}</div>
                                <div className="idDelivery karla">#{this.props.task.number}</div>
                            </div>
                            <div className="customerName karla">{this.props.task.content}</div>
                            <div className="cardAddress">{this.props.task.adresse},<br />44000 Nantes</div>
                            <div className="line">
                                <div className="iconTypeDelivery"><img src={imgBike} alt="Bike" /></div>
                                <div className="cardStatus">{this.props.task.urgent ? 'Urgent' : null}</div>
                                <div className="cardStatus">Gaspard</div>
                                <div className="cardSchedule karla">{this.props.task.time}</div>
                            </div>
                        </div>
                        <Link
                            to={{
                                pathname: "/order",
                                order: this.props.tasks,
                            }}>
                            <button className="goTo" type="button">
                                <img src={imgArrow} alt="Détails" />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </Draggable>
    );
    
  }
}

export default Task;