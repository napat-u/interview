import React from 'react';
import "./book.css"
import { decrement } from '../../modules/bookRedux'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const BookList = () => {
	const booklist = useSelector(state => state.book.value)
	const convertDate = (date) => {
		if (date !== undefined) {
			const dateFunction = new Date(date)
			if (dateFunction.getMonth() < 12) {
				return <div>{`${dateFunction.getMonth() + 1}/${dateFunction.getDate()}/${dateFunction.getFullYear()}`}</div>
			}
			return <div>{`${dateFunction.getMonth()}/${dateFunction.getDate()}/${dateFunction.getFullYear()}`}</div>
		}
		return <></>
	}
	const dispatch = useDispatch();

	const deleteBeforeStore = (list) => {
		let removeList = booklist.filter(item => item !== list)
		dispatch(decrement(removeList))
	}

	const MapBookList = () => {
		return booklist.map((list, index) => {
			return (
				<Row key={index} className="row_container">
					<Col sm={2}><img src={list?.img_url} className="img_style" /></Col>
					<Col sm={2}>
						<h5>{list?.book_name}</h5>
					</Col>
					<Col sm={2}>
						<h5>{list?.writer}</h5>
					</Col>
					<Col sm={2}>
						{convertDate(list?.start_date)}
					</Col>
					<Col sm={2}>
						{convertDate(list?.end_date)}
					</Col>
					<Col sm={2}>
						<Link to={{pathname:`/edit/${index}`, data:list, index}}><button className="link_style">edit</button></Link>
						<button onClick={() => deleteBeforeStore(list)}>delete</button>
					</Col>
				</Row>
			)
		})
	}

	return (
		<div>
			<h1 className="header">Reading List</h1>
			<Container>
				<Row className="row_container">
					<Col sm={2}>
						<h5>IMG</h5>
					</Col>
					<Col sm={2}>
						<h5>BOOK NAME</h5>
					</Col>
					<Col sm={2}>
						<h5>WRITER</h5>
					</Col>
					<Col sm={2}>
						<h5>START DATE</h5>
					</Col>
					<Col sm={2}>
						<h5>END DATE</h5>
					</Col>
					<Col sm={2}>
						<h5>ACTIONS</h5>
					</Col>
				</Row>

				<MapBookList />
			</Container>
		</div>
				
	)
}

export default BookList