import {
    makeStyles,
    Container,
    Typography,

  } from "@material-ui/core";
  import { useForm } from "react-hook-form";
  import { useState } from "react";
import Categories from "./Categories";
import Quiz from './quiz.png';



  
  interface IFormInput {
    gamePin: string;
    nickName: string;
    error: string

  }
  
  const useStyles = makeStyles((theme) => ({
    heading: {
      textAlign: "center",
      margin: theme.spacing(1, 0, 4),
    },
    submitButton: {
      marginTop: theme.spacing(4),
    },
  }));

  let userName ="";
  
  function Form() {

    const [show, setShow] = useState(true);
    const [showCategory, setShowCategory] = useState(false);

    const {
      // register,
      // handleSubmit,
    } = useForm<IFormInput>();
  
    const { heading } = useStyles();
  
    const onSubmit = (event:any) => {          

            if (userName.length < 5)
            
        alert('Registration Failed')

        else{
          setShow(false)
            setShowCategory(true);
        }

    };
    
    const changeNickName = (event:any) =>{

      userName = event.target.value

      
    }

  
    return (
        <div>

          
            {
                show?
                <div>
                    <Container maxWidth="xs">
                <Typography className={heading} variant="h3">
                  Wanna Have Fun!!!  <img src={Quiz} alt="Trivia" width="30%"/>
                </Typography>
                <Container maxWidth="xs">
                <form>
                  <input type="text" placeholder="Game Pin" required />
                  <input type="text" placeholder="Nick Name" onChange={changeNickName} required />
          
                </form>
              </Container>

               <button onClick={onSubmit} className="btn btn-primary" >Sign Up</button>
              </Container>

              
                </div>:null
                
              
            }

            {
                showCategory?<Categories name={userName}/>:null
            }

        </div>
    );
  }
  export default Form