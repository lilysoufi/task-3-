import "./Navigate.css"
import Container from "../Container/Container"
import SectionHeader from "../SectionHeader/SectionHeader"
import NavigateCard from "./NavigateCard"


const Navigate =() => {
     let NavigateCardsData = [
        {
            title : "About Us",
            image : "./img/NavigateLine.png",
            description : "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
        }
        ,
        {
            title : "Academics",
            image : "./img/NavigateLine.png",
            description :"Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."
        }
        ,
        {
            title : "Student Life",
            image : "./img/NavigateLine.png",
            description :"Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."
        }
        ,
        {
            title : "Admissions",
            image : "./img/NavigateLine.png",
            description : "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
        }

     ]
    return (
       
        <div>
          <div>
            <SectionHeader
               comment ="Explore More"
               title ="Navigate through our Pages"
               description = "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school" />
          </div>
          <div className="nav-card-container">
          {NavigateCardsData?.map ((cardData) => {

            return (
                 <NavigateCard 
                     title = {cardData.title}
                     image ="./img/NavigateLine.png"
                     description = {cardData.description}
                   />
            )})
          }
          </div>
          
        </div>
    )
}

export default Navigate 