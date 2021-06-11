import React, { Component, useState } from 'react';
import "./page.css"
import "react-datepicker/dist/react-datepicker.css"
import { increment, decrement } from '../../modules/bookRedux'
import { useDispatch } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const Page = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [data, setData] = useState({
		img_url: '',
		book_name: '',
		writer: '',
		description: '',
	})
	const dispatch = useDispatch()

	const handleChange = e => {
		const val = e.target.value
		const name = e.target.name
		setData({
			...data,
			[name]: val
		})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const obj = {
			...data,
			start_date: startDate,
			end_date: endDate
		}
		setData({
			img_url: '',
			book_name: '',
			writer: '',
			description: ''
		})
		setStartDate(new Date())
		setEndDate(new Date())
		dispatch(increment(obj))
	}
	return (
		<div>
			<h1 className="header">Read</h1>
			<Container>
				<form onSubmit={onSubmit}>
					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}><label>Image URL: </label></Col>
							<Col sm={6}><input type="text" name="img_url" value={data.img_url} onChange={handleChange} style={{ width: '100%' }} /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>
					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}><label>Book Name:</label></Col>
							<Col sm={6}><input type="text" name="book_name" value={data.book_name} onChange={handleChange}  style={{ width: '100%' }} /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>

					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}><label>Writer:</label></Col>
							<Col sm={6}><input type="text" name="writer" value={data.writer} onChange={handleChange} style={{ width: '100%' }} /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>

					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}><label>Description:</label></Col>
							<Col sm={6}><textarea name="description" value={data.description} onChange={handleChange} rows="4" style={{ width: '100%' }} /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>

					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}><label>Start Reading:</label></Col>
							<Col sm={6}><DatePicker  selected={startDate} onChange={date => setStartDate(date)} /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>

					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}><label>End Reading:</label></Col>
							<Col sm={6}><DatePicker  selected={endDate} onChange={date => setEndDate(date)} /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>
					<div className="margin-line">
						<Row>
							<Col sm={2}></Col>
							<Col sm={2}></Col>
							<Col sm={4}><input type="submit" /></Col>
							<Col sm={2}></Col>
						</Row>
					</div>
				</form>
			</Container>
		</div>
				
	)
}

export default Page