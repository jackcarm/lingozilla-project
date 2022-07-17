import React, { useState } from "react";
import styled from "styled-components";
import { postFeedback } from "./LingozillaService";

const Form = styled.form`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  background: #c996cc;
  padding: 20px;
  margin-bottom: 40px;
  border: 10px solid #ccc;
  border-radius: 25px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  border-radius: 0.375rem;
  display: block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const Select = styled.select`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  border-radius: 0.375rem;
  display: block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  border-radius: 0.375rem;
  display: block;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const SubmitButton = styled.input`
  & {
    display: block;
    margin: 20px auto;
    background: #9d7bf4;
    color: #ffffff;
    font-size: 18px;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-in-out;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;

const FeedBackForm = ({ addFeedback }) => {
  const [formData, setFormData] = useState({
    name: "",
    ageGroup: "",
    rating: "",
    feedback: "",
    date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    postFeedback(formData).then((data) => {
      addFeedback(data);
    });
    alert("Thanks for your feedback!");
    setFormData({
      name: "",
      ageGroup: "",
      rating: "",
      feedback: "",
      date: "",
    });
  };

  const onChange = (event) => {
    const newFormData = Object.assign({}, formData);
    newFormData[event.target.name] = event.target.value;
    setFormData(newFormData);
  };

  return (
    <div className="FeedBackForm">
      <Form onSubmit={handleSubmit} id="feedback-Form">
        <h2>We'd love to hear some feedback about your lesson!</h2>
        <div className="wrapper">
          <Label for="name">Name</Label>
          <Input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            value={formData.name}
          />
        </div>
        <div className="wrapper">
          <Label for="ageGroup">Age Group</Label>
          <Select name="ageGroup" id="ageGroup">
            <option value="under5>">Under 5 years old</option>
            <option value="5-14">5 - 14 years old</option>
            <option value="15-24">15 - 24 years old</option>
            <option value="25-54">25 - 54 years old</option>
            <option value="55+">55+ years old</option>
          </Select>
        </div>
        <div className="wrapper">
          <Label for="rating">Rating</Label>
          <input type="radio" id="1-star" name="rating" value="1-star" />
          <label for="1-star">1 Star</label>
          <input type="radio" id="2-stars" name="rating" />
          <label for="2-stars">2 Stars</label>
          <input type="radio" id="3-stars" name="rating" />
          <label for="3-stars">3 Stars</label>
          <input type="radio" id="4-stars" name="rating" />
          <label for="4-stars">4 Stars</label>
          <input type="radio" id="5-stars" name="rating" />
          <label for="5-stars">5 Stars</label>
        </div>
        <div className="wrapper">
          <Label for="feedback">Feedback</Label>
          <TextArea
            onChange={onChange}
            type="text"
            id="feedback"
            name="feedback"
            value={formData.feedback}
            rows="4"
            cols="50"
          />
        </div>
        <div className="wrapper">
          <Label for="date">Date</Label>
          <Input
            onChange={onChange}
            type="date"
            id="date"
            name="date"
            value={formData.date}
          />
        </div>
        <SubmitButton type="submit" value="Submit" id="submit" />
      </Form>
    </div>
  );
};

export default FeedBackForm;
