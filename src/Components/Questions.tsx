import React from 'react'
import EndScreen from '../Components/EndScreen';
import RadioButton from '../Components/FormComponents/RadioButton'
import './materialize.min.css'
import {Sadmeme} from './imgs/Sadmeme'
import {Happymeme} from './imgs/Happymeme'
import diss from './imgs/2Bz.gif'
import hpp from './imgs/2IC.gif'
import mild from './imgs/5iY.gif'


class Questions extends React.Component<{nickname: string, questions: any, no_of_questions:number}> {

    shuffle = () =>{
        for (let i = this.props.questions.length - 1; i > 0; i--)
            {
                const j = Math.floor(Math.random() * (i + 1));
                [this.props.questions[i], this.props.questions[j]] = [this.props.questions[j], this.props.questions[i]];
            }
            console.log(this.props.questions)
            return this.props.questions

    
    }
    

    state = { 
        count: 0,
        message:"Next",
        onChange: () =>{},
        checked: '',
        score : 0,
        q1 : this.props.questions,
        showEndScreen: false,
        show:true, 
        imageUrl : '',
        hehe: 0,
        rn: this.shuffle(),
        gif:'',
        passOrFail: 'Failed',
        radioChecked: false
    };


    
    next = (amt: number) => {
        let ran = Math.floor(Math.random()*Sadmeme.length-1)

            this.setState({
                radioChecked: false
            })
        
            if(this.state.hehe <this.props.no_of_questions -1){



                if(this.state.checked === this.state.rn[this.state.count].answer){
                    this.setState({
                        score: this.state.score+1,
                        gif: Happymeme[ran].href
                    })
                }else{
                    this.setState({
                        gif: Sadmeme[ran].href
                    })
                }
    
                this.setState((state) => ({
                    count: this.state.count + 1,
                    hehe: this.state.hehe+amt
                }));
    
        
                
            }else{
    
                if(this.state.checked === this.state.rn[this.state.count].answer){
                    let ran = Math.floor(Math.random()*Happymeme.length+1)
                    this.setState({
                        score: this.state.score+1,
                        gif: Happymeme[ran].href
                    })
                }else{
                    this.setState({
                        gif: Sadmeme[ran]
                    })
                }
    
                var percentage= (this.state.score/this.props.no_of_questions)
    
                if(percentage < 0.5){
                    this.setState({
                        imageUrl: diss,
                        passOrFail: 'Failed'
                    })
    
                    console.log(this.state.score)
                }else if(percentage === 0.5){
                    this.setState({
                        imageUrl: mild,
                        passOrFail: 'Passed'
                        
                    }) 
    
                    console.log(this.state.score)
    
                }else if(percentage >= 0.5){
                    this.setState({
                        imageUrl: hpp,
                        passOrFail: 'Passed'
                    })
    
                    console.log(this.state.imageUrl)
                }
                this.setState({
                    showEndScreen:true,
                    show:false
                })
    
     
    
            
        }
    }

    onChange = (event:any) =>{
        

            this.setState({
                radioChecked: true,
                checked: event.target.value,
               
            })
        }

    
    

    render(){ 


        return (
        
            <>
            {
                this.state.show ?        
                <div className="container">
            
                <h5 className="center-align">Game Started! Good Luck! {this.props.nickname}</h5>
    
                <h6 className="left-align"><b>Question {this.state.hehe +1}</b></h6>
    
                <p className="left-align"><h6>{this.state.rn[this.state.count].question}</h6></p>
                <div onChange={this.onChange}>
                    <div className="left-align">
                    <RadioButton value="A" label={this.state.rn[this.state.count].A} checked={this.state.radioChecked} />
                    <RadioButton value="B" label={this.state.rn[this.state.count].B} checked={this.state.radioChecked} />
                    <RadioButton value="C" label={this.state.rn[this.state.count].C} checked={this.state.radioChecked} />
                    <RadioButton value="D" label={this.state.rn[this.state.count].D} checked={this.state.radioChecked} />
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
    
                <button className="btn btn-primary" onClick={() => this.next(1)}>
                    {this.state.message}
                    
                </button>
    
               <p>{this.state.checked}</p>
               <img src={this.state.gif} alt="ene hle!"/>
               <p>{this.state.score}</p>
        
            </div>:null
            }

            {
                this.state.showEndScreen ? <EndScreen score={this.state.score * 100}
                player={this.props.nickname} imageUrl={this.state.imageUrl} results={this.state.passOrFail}
                 questions={this.props.no_of_questions * 100} />:null

            }
            </>
     
    )
        }
        
}

export default Questions