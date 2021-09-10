import React, {useState} from 'react';
import { ButtonGroup } from '@material-ui/core'
import './materialize.min.css'
import Questions from './Questions';
import {movies} from './Questions/Movies'
import {knowledge} from './Questions/GKnowledge'
import {technology} from './Questions/Technology'
import RadioButton from './FormComponents/RadioButton'

interface nameProps{
    name: string;
}

 const Categories: React.FC<nameProps> = ({name}) => {


    const [showQuestion, setShowQuestion] = useState(false)
    const [showCategoris, setShowCategories] = useState(true)
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)

    const vs =[
        {
            question: "",
            A: "",
            B: "",
            C: "",
            D: "",
            answer: "",
        },
    ]

    const [questio, setQuestions] = useState(vs)



    
      
    function Knowledge(){

        var q =[
            {
                question: "",
                A: "",
                B: "",
                C: "",
                D: "",
                answer: "",
            },
        ]
        for(var i =0; i<knowledge.length; i++){
            q[i] =
                {
                    question: knowledge[i].question,
                    A: knowledge[i].A,
                    B: knowledge[i].B,
                    C: knowledge[i].C,
                    D: knowledge[i].D,
                    answer: knowledge[i].answer,
                }
            
        }
    
        setQuestions(q)
        setShowCategories(false)
        setShowQuestion(true)

    }

    
    function Entertainment(){
        var qs =[
            {
                question: "",
                A: "",
                B: "",
                C: "",
                D: "",
                answer: "",
            },
        ]
        for(var i =0; i<technology.length; i++){
            qs[i] =
                {
                    question: technology[i].question,
                    A: technology[i].A,
                    B: technology[i].B,
                    C: technology[i].C,
                    D: technology[i].D,
                    answer: technology[i].answer,
                }
            
            
        }
    
        setQuestions(qs)
        setShowCategories(false)
        setShowQuestion(true)
    }

    function Movies(){
        var qs =[
            {
                question: "",
                A: "",
                B: "",
                C: "",
                D: "",
                answer: "",
            },
        ]
        for(var i =0; i<movies.length; i++){
            qs[i] =
                {
                    question: movies[i].question,
                    A: movies[i].A,
                    B: movies[i].B,
                    C: movies[i].C,
                    D: movies[i].D,
                    answer: movies[i].answer,
                }
            
            
        }
    
        setQuestions(qs)
        setShowCategories(false)
        setShowQuestion(true)
        
    }


    function onChange(event:any){
        setNumberOfQuestions(event.target.value);


    }
    
 

        return (
            <div>
                {
                    showCategoris?<>
                     <h1>Select number of questions</h1>


                    <div onChange={onChange}>
                    <p className="center-align">
                        <RadioButton value="5" label="5" />
                        <RadioButton value="7" label="7"  />
                    </p>
                    <br />
                    <br />
    
                </div>

                    <ButtonGroup>
                    <button onClick={Knowledge} className="btn btn-primary orange" >General Knowledge</button>
                    <button onClick={Entertainment} className="btn btn-primary">Science: Computers</button>  
                    <button onClick={Movies} className="btn btn-btn-primary green" >Entertainment: Film</button>  
                    </ButtonGroup>
                    </>:null
                    
                }

                {
                
                    showQuestion? <Questions no_of_questions={numberOfQuestions}  nickname={name} questions={questio}/>:null
                }
               
            </div>
        )
    
    
}

export default Categories
