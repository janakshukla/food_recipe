import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Home = () => {
    const [meals, setmeals] = useState([])
  useEffect(() => {
 async function set(){
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`
        );
       setmeals(res.data.meals)
       console.log(res)
      } catch (error) {
        console.log(error);
      }
    };
    set();
  }, []);

  return (
    <>
    {
        meals && 
            meals.map((meal)=>{
               
                  return (
                    <Card key={meal.idMeal} className="mt-6 w-96">
                      <CardHeader color="blue-gray" className="relative h-56">
                        <img
                          src={`${meal.strMealThumb}`}
                          alt="card-image"
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                          {meal.strMeal}
                        </Typography>
                       
                      </CardBody>
                      <CardFooter className="pt-0">
                        <Button >Read More</Button>
                      </CardFooter>
                    </Card>
                  );
                
            })
        
    }    

    
    </>
      )
};

export default Home;
