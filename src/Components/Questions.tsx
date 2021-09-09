import React, {useState} from 'react'
import EndScreen from '../Components/EndScreen';
import RadioButton from '../Components/FormComponents/RadioButton'
import './materialize.min.css'

import diss from './imgs/2Bz.gif'
import hpp from './imgs/2IC.gif'
import mild from './imgs/5iY.gif'


class Questions extends React.Component<{nickname: string, questions: any}> {

    shuffle = () =>{
        for (let i = this.props.questions.length - 1; i > 0; i--)
            {
                const j = Math.floor(Math.random() * (i + 1));
                [this.props.questions[i], this.props.questions[j]] = [this.props.questions[j], this.props.questions[i]];
            }
            console.log(this.props.questions)
            return this.shuffle

    
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
        rn: this.shuffle()
    };


    
    next = (amt: number) => {


        const rn:any = this.shuffle()


        if(this.state.hehe <this.props.questions.length-1){


            if(this.state.checked === this.props.questions[this.state.count].answer){
                this.state.score++
            }

            this.setState((state) => ({
                count: this.state.hehe,
                hehe: this.state.hehe+amt
            }));

            console.log(rn[this.state.hehe])
            
        }else{

            if(this.state.checked === this.props.questions[this.state.count].answer){
                this.state.score++
            }

            if(this.state.score < 5){
                this.setState({
                    imageUrl: diss
                })

                console.log(this.state.score)
            }else if(this.state.score === 5){
                this.setState({
                    imageUrl: mild
                }) 

                console.log(this.state.score)

            }else if(this.state.score >= 6){
                this.setState({
                    imageUrl: hpp
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
        this.state.checked = event.target.value;

        this.setState({
            checked: event.target.value
        });

    
    }
    

    render(){ 


        return (
        
            <>
            {
                this.state.show ?        
                <div className="container">
            
                <h5 className="center-align">{this.state.q1.lenght}Game Started! Good Luck! {this.props.nickname}</h5>
    
                <h6 className="left-align"><b>Question {this.state.hehe +1}</b></h6>
    
                <p className="left-align"><h6>{this.props.questions[this.state.count].question}</h6></p>
                <div onChange={this.onChange}>
                    <div className="left-align">
                    <RadioButton value="A" label={this.props.questions[this.state.count].A} />
                    <RadioButton value="B" label={this.props.questions[this.state.count].B}  />
                    <RadioButton value="C" label={this.props.questions[this.state.count].C} />
                    <RadioButton value="D" label={this.props.questions[this.state.count].D}  />
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
    
                <button className="btn btn-primary" onClick={() => this.next(1)}>
                    {this.state.message}
                    
                </button>
    
               <p>{this.state.checked}</p>
               <p>{this.state.score}</p>
        
            </div>:null
            }

            {
                this.state.showEndScreen ? <EndScreen score={this.state.score}
                player={this.props.nickname} imageUrl={this.state.imageUrl}
                 questions={this.props.questions.length} />:null

            }
            </>
     
    )
        }
        
}

export default Questions