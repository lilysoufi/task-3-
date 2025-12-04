import { useState } from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./FAQ.css"


function FAQ() {
   const [activeIndex, setActiveIndex] = useState(null);

   const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   let FAQData = [ 
    {
        
        btnQuestion : "What are the school hours at Little Learners Academy?",
        answer :"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    }
    ,
    {
      btnQuestion :"How do you handle food allergies and dietary restrictions?" ,
      answer :"we have a chef"
    }
    ,
    {
      btnQuestion : "Is there a uniform policy for students?",
      answer : "No"
    }
    ,
    {
      btnQuestion:"What is the teacher-to-student ratio at Little Learners Academy?",
      answer:" for every 15 students there is 2 teachers"
    }
    ,
    {
      btnQuestion :"How do you handle discipline and behavior management?",
      answer :"we contact the parents"
    }
    ,
    {
      btnQuestion:"What extracurricular activities are available for students?" ,
      answer : " Swimming , Football"
    }
    , {
      btnQuestion :"How do I apply for admission to Little Learners Academy?",
      answer :""
    }
    ,
    {
      btnQuestion:"What extracurricular activities are available for students?",
      answer:""
    }
   ]
  return (
    <div>
       <SectionHeader
          comment ="Solutions For The Doubts"
          title ="Frequently Asked Questions"
          description ="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
       />
        <div className="accordion">
      {FAQData?.map((faqData, index) => (
       <div key={index} className="faqAccordion">
          <button
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <h4>{faqData.btnQuestion}</h4>
            <div className="accordion-icon">
              {activeIndex === index ? '−' : '+'}
            </div>
          </button>
          <div
            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="accordion-body">
              {faqData.answer}
            </div>
          </div>
        </div>
      ))
   }
  
    </div>
    </div>
  )
}

export default FAQ
